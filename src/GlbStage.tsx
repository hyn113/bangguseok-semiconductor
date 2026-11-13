import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {createCameraRig} from './viewOptions';
import {createPartFrames,pickAt} from './partFrames';
import {normName,type GlbPart,type Interaction} from './glbLessons';

/* 블렌더 단계별 모형(.glb) 캔버스
   - 단계(src)를 바꿔도 캔버스는 그대로 두고 모형만 갈아 끼워요
   - 애니메이션: once = 한 번 재생 후 마지막 장면 유지 · loop = 되풀이 · none = 정지 장면
   - 부품을 누르면 이름표 + 주황 강조, 왼쪽 패널에 설명(onPick)
   - 회로 학습(interact)은 예시 애니메이션 대신 스위치를 직접 눌러 상태를 바꿔요 */
export type PlayState='loading'|'playing'|'paused'|'done'|'static'|'error';
export type CircuitState={closed:boolean;high:boolean;a:boolean;b:boolean};
export type CircuitKey=keyof CircuitState;
type Props={src:string;label:string;play:'once'|'loop'|'none';paused:boolean;replay:number;reset:number;parts:GlbPart[];
 interact?:Interaction;circuit?:CircuitState;demo?:number;clear?:number;focus?:{part:GlbPart;n:number}|null;onParts?:(p:GlbPart[])=>void;onShot?:(part:GlbPart,url:string)=>void;onToggle?:(k:CircuitKey)=>void;onState?:(s:PlayState)=>void;onPick?:(p:GlbPart|null)=>void};

const Q_ON=new THREE.Quaternion(0,0,0,1),Q_OFF=new THREE.Quaternion(0,0,0.3193088,0.9476507);
const LEVERS:Record<string,CircuitKey>={'switch a lever':'closed','signal switch lever':'high','input a lever':'a','input b lever':'b'};
const ACCENT=new THREE.Color(0xf2862b);

type Live={root:THREE.Object3D|null;mixer:THREE.AnimationMixer|null;actions:THREE.AnimationAction[];play:Props['play'];demo:boolean;size:number;
 partOf:Map<THREE.Object3D,GlbPart>;groups:Map<GlbPart,THREE.Object3D[]>;nodes:Map<string,THREE.Object3D>;hover:GlbPart|null;sel:GlbPart|null;tinted:{mesh:THREE.Mesh;mat:THREE.Material|THREE.Material[]}[]};

export function GlbStage(p:Props){
 const host=useRef<HTMLDivElement>(null),props=useRef(p);props.current=p;
 const[status,setStatus]=useState<'loading'|'ready'|'error'>('loading');
 const api=useRef<{focus:(p:GlbPart)=>void;deselect:()=>void;load:(src:string)=>void;replay:()=>void;reset:()=>void;demo:()=>void;apply:()=>void;pause:(on:boolean)=>void}|null>(null);

 useEffect(()=>{
  const el=host.current;if(!el)return;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true})}catch{setStatus('error');props.current.onState?.('error');return}
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  el.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),pmrem=new THREE.PMREMGenerator(renderer);
  scene.environment=pmrem.fromScene(new RoomEnvironment(),0.04).texture;
  const hemi=new THREE.HemisphereLight(0xffffff,0x8a9099,0.6);scene.add(hemi);
  const sun=new THREE.DirectionalLight(0xffffff,1.4);sun.position.set(3,6,4);scene.add(sun);hemi.layers.enableAll();sun.layers.enableAll();
  const camera=new THREE.PerspectiveCamera(32,1,0.01,1000);
  const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.enablePan=true;controls.screenSpacePanning=true;
  const homeCam=new THREE.Vector3(),homeTarget=new THREE.Vector3();
  const rig=createCameraRig(camera,controls.target,()=>homeCam);let orbiting=false;
  controls.addEventListener('start',()=>{orbiting=true});controls.addEventListener('end',()=>{orbiting=false});controls.addEventListener('change',()=>{if(orbiting)rig.cancel()});
  const frames=createPartFrames(el);
  const reduce=typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const L:Live={root:null,mixer:null,actions:[],play:'none',demo:false,size:1,partOf:new Map(),groups:new Map(),nodes:new Map(),hover:null,sel:null,tinted:[]};
  const loader=new GLTFLoader();let loadId=0,frame=0,lastT=performance.now();
  const state=(s:PlayState)=>props.current.onState?.(s);

  /* 고른 부품을 주황빛으로 살짝 물들여요(원래 재질은 보관했다가 되돌림) */
  const untint=()=>{for(const t of L.tinted)t.mesh.material=t.mat;L.tinted=[]};
  const tint=(part:GlbPart|null)=>{untint();if(!part)return;for(const o of L.groups.get(part)??[])o.traverse(x=>{const m=x as THREE.Mesh;if(!m.isMesh)return;const orig=m.material;
   const mk=(mat:THREE.Material)=>{const c=mat.clone() as THREE.MeshStandardMaterial;if(c.emissive){c.emissive=c.emissive.clone().lerp(ACCENT,.55);c.emissiveIntensity=Math.max(c.emissiveIntensity??1,.55)}else if((c as unknown as {color?:THREE.Color}).color)(c as unknown as {color:THREE.Color}).color.lerp(ACCENT,.4);return c};
   m.material=Array.isArray(orig)?orig.map(mk):mk(orig);L.tinted.push({mesh:m,mat:orig})})};
  /* 부품만 따로 찍은 작은 이미지 (왼쪽 '기계 설명'에 보여줘요) — 레이어 1에 올려 그 부품만 그려요 */
  let shotR:THREE.WebGLRenderer|null=null,shotEnv:THREE.Texture|null=null;const shotCam=new THREE.PerspectiveCamera(30,1.4,0.01,1000);shotCam.layers.set(1);
  const shoot=(part:GlbPart)=>{const g=L.groups.get(part);if(!g?.length||!props.current.onShot)return;
   try{if(!shotR){shotR=new THREE.WebGLRenderer({antialias:true,alpha:true});shotR.setPixelRatio(1);shotR.setSize(560,400,false);shotR.outputColorSpace=THREE.SRGBColorSpace;shotR.toneMapping=THREE.ACESFilmicToneMapping;const pm=new THREE.PMREMGenerator(shotR);shotEnv=pm.fromScene(new RoomEnvironment(),0.04).texture;pm.dispose()}
    const box=new THREE.Box3();for(const o of g){o.updateMatrixWorld(true);box.expandByObject(o)}if(box.isEmpty())return;
    const c=box.getCenter(new THREE.Vector3()),r=box.getSize(new THREE.Vector3()).length()/2||1;
    const dir=camera.position.clone().sub(controls.target).normalize();const dist=r/Math.sin(THREE.MathUtils.degToRad(15))*1.05;
    shotCam.position.copy(c).addScaledVector(dir,dist);shotCam.near=dist/100;shotCam.far=dist*10;shotCam.lookAt(c);shotCam.updateProjectionMatrix();
    for(const o of g)o.traverse(x=>x.layers.enable(1));const env=scene.environment;scene.environment=shotEnv;
    shotR.render(scene,shotCam);const url=shotR.domElement.toDataURL('image/png');
    scene.environment=env;for(const o of g)o.traverse(x=>x.layers.disable(1));
    props.current.onShot(part,url)}catch{}};
  const select=(part:GlbPart|null)=>{L.sel=part;if(part)shoot(part);tint(part);props.current.onPick?.(part)};

  /* 회로: 지금 상태를 모형에 반영 (스위치 각도 · 램프 · 화살표 · 진리표) */
  const show=(name:string,on:boolean)=>{const o=L.nodes.get(name);if(o)o.scale.setScalar(on?1:0)};
  const apply=()=>{const kind=props.current.interact,c=props.current.circuit;if(!kind||!c||L.demo||!L.root)return;
   for(const [n,k] of Object.entries(LEVERS)){const o=L.nodes.get(n);if(o)o.quaternion.copy(c[k]?Q_ON:Q_OFF)}
   if(kind==='switch'){show('lamp glow',c.closed);for(const [n,o] of L.nodes)if(/^current arrow \d+ orientation$/.test(n))o.children.forEach(ch=>ch.scale.setScalar(c.closed?1:0))}
   if(kind==='signal'){show('signal high',c.high);show('signal low',!c.high)}
   if(kind==='and'){show('output y glow',c.a&&c.b);const row=(c.a?2:0)+(c.b?1:0);for(let i=0;i<4;i++)show('truth highlight '+i,i===row)}
  };

  /* 좌우 패널이 캔버스 위에 떠 있어서, 실제로 보이는 가운데 영역에 맞춰 모형을 놓아요 */
  let vis={l:0,r:0},visTick=0;
  const measure=()=>{const W=el.clientWidth||1;if(window.innerWidth<=900)return {l:0,r:0};const b=el.getBoundingClientRect();
   const side=(id:string)=>{const p=document.getElementById(id);if(!p)return null;const r=p.getBoundingClientRect();return r.width>0&&getComputedStyle(p).display!=='none'?r:null};
   const lp=side('shell-panel-left'),rp=side('shell-panel-right');
   return {l:Math.max(0,Math.min(W/2,lp?lp.right-b.left:0)),r:Math.max(0,Math.min(W/2,rp?b.right-rp.left:0))}};
  const applyView=()=>{const W=el.clientWidth||1,H=el.clientHeight||1;const cx=vis.l+(W-vis.l-vis.r)/2;camera.setViewOffset(W,H,W/2-cx,0,W,H);camera.updateProjectionMatrix()};
  const fit=(root:THREE.Object3D)=>{
   const box=new THREE.Box3();const grow=()=>{root.updateMatrixWorld(true);box.union(new THREE.Box3().setFromObject(root))};
   grow();if(L.mixer&&L.actions.length){const dur=Math.max(...L.actions.map(a=>a.getClip().duration));for(const a of L.actions)a.play();L.mixer.setTime(dur);grow();L.mixer.setTime(0);for(const a of L.actions)a.stop()}
   const size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3()),r=size.length()/2||1;L.size=r;
   vis=measure();applyView();
   const W=el.clientWidth||1,H=el.clientHeight||1,vh=THREE.MathUtils.degToRad(camera.fov/2),vw=Math.atan(Math.tan(vh)*Math.max(.4,(W-vis.l-vis.r-48)/H));
   const dist=r/Math.sin(Math.min(vh,vw))*1.08;
   homeTarget.copy(center);homeCam.copy(center).add(new THREE.Vector3(0.62,0.42,0.9).normalize().multiplyScalar(dist));
   camera.near=dist/100;camera.far=dist*20;camera.updateProjectionMatrix();
   camera.position.copy(homeCam);controls.target.copy(homeTarget);controls.minDistance=r*0.25;controls.maxDistance=dist*3;controls.update();
  };
  const start=()=>{const {play}=L;if(!L.mixer||!L.actions.length||play==='none'||props.current.interact){state('static');return}
   for(const a of L.actions){a.reset();a.setLoop(play==='loop'?THREE.LoopRepeat:THREE.LoopOnce,play==='loop'?Infinity:1);a.clampWhenFinished=true;a.play()}
   if(reduce&&play==='once'){const dur=Math.max(...L.actions.map(a=>a.getClip().duration));L.mixer.setTime(dur);state('done');return}
   if(reduce){L.mixer.timeScale=0;state('paused');return}
   L.mixer.timeScale=props.current.paused?0:1;state(props.current.paused?'paused':'playing')};

  const dispose=(root:THREE.Object3D)=>{untint();root.traverse(o=>{const m=o as THREE.Mesh;m.geometry?.dispose?.();const mat=m.material as THREE.Material|THREE.Material[]|undefined;(Array.isArray(mat)?mat:mat?[mat]:[]).forEach(x=>{for(const v of Object.values(x))if(v instanceof THREE.Texture)v.dispose();x.dispose()})})};
  const load=(src:string)=>{const id=++loadId;setStatus('loading');state('loading');
   loader.load(src,gltf=>{if(id!==loadId||disposed)return;
    if(L.root){scene.remove(L.root);dispose(L.root)}L.mixer?.stopAllAction();
    const root=gltf.scene;L.root=root;scene.add(root);L.sel=null;L.hover=null;L.tinted=[];props.current.onPick?.(null);
    /* 부품 규칙: 바깥쪽부터 내려가며 처음 맞는 규칙을 그 가지에 적용 */
    L.partOf=new Map();L.groups=new Map();L.nodes=new Map();
    const parts=props.current.parts;
    const walk=(o:THREE.Object3D,inherited:GlbPart|null)=>{const n=normName(o.name||'');if(n&&!L.nodes.has(n))L.nodes.set(n,o);
     /* 안쪽에 더 구체적인 규칙이 있으면 그쪽이 우선 (예: 덮개 안의 제어부) */
     let part=inherited;const own=n?parts.find(q=>q.match.test(n)):undefined;
     if(own&&own!==inherited){part=own;const g=L.groups.get(own)??[];g.push(o);L.groups.set(own,g)}
     if(part)L.partOf.set(o,part);o.children.forEach(c=>walk(c,part))};
    root.children.forEach(c=>walk(c,null));
    props.current.onParts?.(parts.filter(q=>L.groups.has(q)));
    L.mixer=new THREE.AnimationMixer(root);L.actions=gltf.animations.map(c=>L.mixer!.clipAction(c));L.play=props.current.play;L.demo=false;
    L.mixer.addEventListener('finished',()=>{if(L.actions.every(a=>!a.isRunning())){if(L.demo){L.demo=false;L.mixer?.stopAllAction();apply()}state('done')}});
    fit(root);apply();start();setStatus('ready');
   },undefined,()=>{if(id===loadId&&!disposed){setStatus('error');state('error')}})};

  const canvas=renderer.domElement;let press:{x:number;y:number}|null=null;
  const hitPart=(e:{clientX:number;clientY:number})=>{if(!L.root)return {part:null as GlbPart|null,lever:null as CircuitKey|null};const hit=pickAt(e,canvas,camera,[L.root],true);if(!hit)return {part:null,lever:null};
   let o:THREE.Object3D|null=hit.object,lever:CircuitKey|null=null;while(o&&o!==L.root){const k=LEVERS[normName(o.name||'')];if(k){lever=k;break}o=o.parent}
   return {part:L.partOf.get(hit.object)??null,lever}};
  canvas.addEventListener('pointerdown',e=>{press={x:e.clientX,y:e.clientY}});
  canvas.addEventListener('pointermove',e=>{if(press)return;const h=hitPart(e);L.hover=h.part;canvas.style.cursor=h.part||(h.lever&&props.current.interact)?'pointer':''});
  canvas.addEventListener('pointerup',e=>{const s=press;press=null;if(!s||Math.hypot(e.clientX-s.x,e.clientY-s.y)>6)return;const h=hitPart(e);
   if(h.lever&&props.current.interact){props.current.onToggle?.(h.lever)}
   select(h.part)});
  canvas.addEventListener('pointerleave',()=>{L.hover=null;canvas.style.cursor=''});

  const resize=()=>{const w=el.clientWidth||1,h=el.clientHeight||1;renderer.setSize(w,h,false);camera.aspect=w/h;vis=measure();applyView()};
  const ro=new ResizeObserver(resize);ro.observe(el);resize();
  let disposed=false;
  api.current={focus:part=>{if(L.groups.has(part))select(part)},deselect:()=>select(null),load,
   replay:()=>{L.demo=false;start()},
   reset:()=>{select(null);camera.position.copy(homeCam);controls.target.copy(homeTarget);controls.update();if(props.current.interact)apply();else start()},
   demo:()=>{if(!L.mixer||!L.actions.length)return;L.demo=true;for(const a of L.actions){a.reset();a.setLoop(THREE.LoopOnce,1);a.clampWhenFinished=true;a.play()}L.mixer.timeScale=1;state('playing')},
   apply,
   pause:on=>{if(!L.mixer)return;L.mixer.timeScale=on?0:1;if(L.actions.some(a=>a.isRunning()))state(on?'paused':'playing')}};
  const tick=()=>{frame=requestAnimationFrame(tick);if(++visTick%20===0){const v=measure();if(Math.abs(v.l-vis.l)>1||Math.abs(v.r-vis.r)>1){vis=v;applyView()}}const now=performance.now(),dt=Math.min((now-lastT)/1000,.1);lastT=now;L.mixer?.update(dt);rig.update();controls.update();renderer.render(scene,camera);
   const g=(part:GlbPart|null)=>part?{target:L.groups.get(part)??[],name:part.name}:null;
   frames.update(camera,L.hover&&L.hover!==L.sel?g(L.hover):null,g(L.sel))};
  tick();load(props.current.src);
  return()=>{disposed=true;api.current=null;shotR?.dispose();shotEnv?.dispose();frames.dispose();cancelAnimationFrame(frame);ro.disconnect();controls.dispose();if(L.root)dispose(L.root);pmrem.dispose();renderer.dispose();renderer.domElement.remove()};
 },[]);

 const first=useRef(true);
 useEffect(()=>{if(first.current){first.current=false;return}api.current?.load(p.src)},[p.src]);
 useEffect(()=>{if(p.replay)api.current?.replay()},[p.replay]);
 useEffect(()=>{if(p.reset)api.current?.reset()},[p.reset]);
 useEffect(()=>{if(p.demo)api.current?.demo()},[p.demo]);
 useEffect(()=>{if(p.clear)api.current?.deselect()},[p.clear]);
 useEffect(()=>{if(p.focus)api.current?.focus(p.focus.part)},[p.focus?.n]);
 useEffect(()=>{api.current?.pause(p.paused)},[p.paused]);
 useEffect(()=>{api.current?.apply()},[p.circuit?.closed,p.circuit?.high,p.circuit?.a,p.circuit?.b]);

 return <div ref={host} className="model-stage glb-stage" role="img" aria-label={p.label}>{status!=='ready'&&<p className="model-stage-status" role="status">{status==='loading'?'3D 모형을 불러오는 중이에요':'3D 모형을 불러오지 못했어요'}</p>}</div>;
}
