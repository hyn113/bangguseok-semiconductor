import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {createCameraRig} from './viewOptions';
import {createPartFrames,pickAt,createOutline} from './partFrames';

/* 블렌더에서 내보낸 .glb 모형을 띄우는 캔버스.
   - 드래그로 돌려보기, 스크롤로 확대 (손 도구)
   - exploded: 부품을 모형 중심에서 바깥으로 벌림
   - resetSignal: 값이 바뀔 때마다 처음 시점·조립 상태로 되돌림
   - 마우스를 올리거나 누르면 부품 이름(블렌더 오브젝트 이름)을 피그마처럼 표시 */
type Api={setExploded:(on:boolean)=>void;reset:()=>void};
export function ModelStage({src,label,exploded,resetSignal}:{src:string;label:string;exploded:boolean;resetSignal:number}){
 const host=useRef<HTMLDivElement>(null),api=useRef<Api|null>(null),explodedRef=useRef(exploded);
 const[status,setStatus]=useState<'loading'|'ready'|'error'>('loading');
 explodedRef.current=exploded;

 useEffect(()=>{
  const el=host.current;if(!el)return;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true})}catch{setStatus('error');return}
  setStatus('loading');
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;
  el.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),pmrem=new THREE.PMREMGenerator(renderer);
  scene.environment=pmrem.fromScene(new RoomEnvironment(),0.04).texture;
  const sun=new THREE.DirectionalLight(0xffffff,1.2);sun.position.set(3,5,4);scene.add(sun);
  const camera=new THREE.PerspectiveCamera(35,1,0.01,1000);
  const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.enablePan=false;
  const homeCam=new THREE.Vector3(),homeTarget=new THREE.Vector3();
  const rig=createCameraRig(camera,controls.target,()=>homeCam);let orbiting=false;
  controls.addEventListener('start',()=>{orbiting=true});controls.addEventListener('end',()=>{orbiting=false});controls.addEventListener('change',()=>{if(orbiting)rig.cancel()});
  const frames=createPartFrames(el),outline=createOutline();let hovered=-1,selected=-1;
  const nameOf=(i:number)=>{const o=parts[i]?.obj;return o?(o.name||'').replace(/[_.]+/g,' ').trim()||`구성 요소 ${i+1}`:''};
  const partIndex=(o:THREE.Object3D|null)=>{while(o){const i=parts.findIndex(p=>p.obj===o);if(i>=0)return i;o=o.parent}return -1};
  const canvas=renderer.domElement;let press:{x:number;y:number}|null=null;
  canvas.addEventListener('pointerdown',e=>{press={x:e.clientX,y:e.clientY}});
  canvas.addEventListener('pointermove',e=>{if(press||!parts.length){hovered=-1;return}const hit=pickAt(e,canvas,camera,parts.map(p=>p.obj),true);hovered=hit?partIndex(hit.object):-1;canvas.style.cursor=hovered>=0?'pointer':''});
  canvas.addEventListener('pointerup',e=>{const p=press;press=null;if(!p||Math.hypot(e.clientX-p.x,e.clientY-p.y)>6)return;const hit=pickAt(e,canvas,camera,parts.map(q=>q.obj),true);selected=hit?partIndex(hit.object):-1});
  canvas.addEventListener('pointerleave',()=>{hovered=-1;canvas.style.cursor=''});
  const reduce=typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let parts:{obj:THREE.Object3D;home:THREE.Vector3;out:THREE.Vector3}[]=[];
  let amount=0,target=explodedRef.current?1:0,frame=0,disposed=false;
  const resize=()=>{const w=el.clientWidth||1,h=el.clientHeight||1;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()};
  const ro=new ResizeObserver(resize);ro.observe(el);resize();

  new GLTFLoader().load(src,gltf=>{
   if(disposed)return;
   const root=gltf.scene;scene.add(root);
   const box=new THREE.Box3().setFromObject(root),size=box.getSize(new THREE.Vector3()).length()||1,center=box.getCenter(new THREE.Vector3());
   root.position.sub(center);root.updateMatrixWorld(true);
   let list=root.children;if(list.length===1&&list[0].children.length>1)list=list[0].children;
   const spread=size*0.35;
   parts=list.map(obj=>{
    const c=new THREE.Box3().setFromObject(obj).getCenter(new THREE.Vector3());
    const dir=c.lengthSq()>1e-8?c.clone().normalize():new THREE.Vector3(0,1,0);
    const parent=obj.parent!;const a=parent.worldToLocal(c.clone()),b=parent.worldToLocal(c.clone().add(dir.multiplyScalar(spread)));
    return {obj,home:obj.position.clone(),out:b.sub(a)};
   });
   camera.near=size/100;camera.far=size*20;camera.updateProjectionMatrix();
   homeCam.set(size*0.55,size*0.35,size*0.85);homeTarget.set(0,0,0);
   camera.position.copy(homeCam);controls.target.copy(homeTarget);controls.minDistance=size*0.3;controls.maxDistance=size*4;controls.update();
   if(reduce)amount=target;
   setStatus('ready');
  },undefined,()=>{if(!disposed)setStatus('error')});

  api.current={setExploded:on=>{target=on?1:0;if(reduce)amount=target},reset:()=>{target=0;selected=-1;if(reduce)amount=0;camera.position.copy(homeCam);controls.target.copy(homeTarget);controls.update()}};
  const tick=()=>{frame=requestAnimationFrame(tick);amount+=(target-amount)*0.12;for(const p of parts)p.obj.position.copy(p.home).addScaledVector(p.out,amount);rig.update();controls.update();outline.set(selected>=0?parts[selected]?.obj:null);renderer.render(scene,camera);
   frames.update(camera,hovered>=0?{target:parts[hovered].obj,name:nameOf(hovered)}:null,selected>=0?{target:parts[selected].obj,name:nameOf(selected)}:null)};
  tick();
  return()=>{disposed=true;api.current=null;frames.dispose();outline.dispose();cancelAnimationFrame(frame);ro.disconnect();controls.dispose();
   scene.traverse(o=>{const m=o as THREE.Mesh;m.geometry?.dispose?.();const mat=m.material as THREE.Material|THREE.Material[]|undefined;(Array.isArray(mat)?mat:mat?[mat]:[]).forEach(x=>x.dispose())});
   pmrem.dispose();renderer.dispose();renderer.domElement.remove()};
 },[src]);

 useEffect(()=>{api.current?.setExploded(exploded)},[exploded]);
 useEffect(()=>{if(resetSignal)api.current?.reset()},[resetSignal]);

 return <div ref={host} className="model-stage" role="img" aria-label={label}>{status!=='ready'&&<p className="model-stage-status" role="status">{status==='loading'?'3D 모형을 불러오는 중이에요':'3D 모형을 불러오지 못했어요'}</p>}</div>;
}
