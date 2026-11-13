import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {mosParts,type MosPart} from './mosfetModel';
import {getViewOptions,subscribeViewOptions,releaseViewPreset,type ViewPreset} from './viewOptions';
import {createPartFrames,pickAt,createOutline} from './partFrames';
/* 시점 프리셋: 카메라 위치(원점을 바라봄)와 모형 회전 */
const HOME_CAM:[number,number,number]=[5,4.3,6],D=Math.hypot(...HOME_CAM);
const presetView=(p:ViewPreset)=>p==='home'?{cam:HOME_CAM,x:0,y:-.25}:{cam:(p==='front'?[0,D*.08,D]:p==='side'?[D,D*.08,0]:[0,D,.02]) as [number,number,number],x:0,y:0};
type Props={selected:MosPart;onSelect:(part:MosPart)=>void;channel:boolean;saturated:boolean;reset:number};
export function MosfetScene({selected,onSelect,channel,saturated,reset}:Props){
 const host=useRef<HTMLDivElement>(null),select=useRef(onSelect);select.current=onSelect;
 const [fallback,setFallback]=useState(false);
 const view=useRef({x:0,y:-.25,reset,cam:HOME_CAM,signal:getViewOptions().signal});
 useEffect(()=>{
  const el=host.current;if(!el||fallback)return;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true})}catch{setFallback(true);return}
  let disposed=false;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));el.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-label','회전하고 구성 요소를 선택할 수 있는 MOSFET 3D 모형');
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(40,1,.1,100),group=new THREE.Group();scene.add(group);
  camera.position.set(...view.current.cam);camera.lookAt(0,0,0);
  scene.add(new THREE.HemisphereLight(0xffffff,0x647080,2.3));const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(3,6,4);scene.add(light);
  const meshes:THREE.Mesh[]=[];
  function block(id:MosPart|null,size:number[],position:number[],color:string,opacity=1){const material=new THREE.MeshStandardMaterial({color,roughness:.5,transparent:opacity<1,opacity,emissive:id===selected?0x6a3a12:0,emissiveIntensity:.5});const mesh=new THREE.Mesh(new THREE.BoxGeometry(...size as [number,number,number]),material);mesh.position.set(...position as [number,number,number]);mesh.userData.part=id;group.add(mesh);meshes.push(mesh)}
  block('body',[4.6,.7,2.5],[0,-.55,0],mosParts.body.color);
  block('source',[1.15,.35,2],[-1.6,-.04,0],mosParts.source.color);
  block('drain',[1.15,.35,2],[1.6,-.04,0],mosParts.drain.color);
  block('oxide',[2.2,.13,2.05],[0,.2,0],mosParts.oxide.color,.8);
  block('gate',[2.1,.3,1.8],[0,.44,0],mosParts.gate.color,.65);
  if(channel){block(null,[saturated?1.8:2.1,.06,1.9],[saturated?-.15:0,.08,0],'#24a99b');}
  if(view.current.reset!==reset)view.current={x:0,y:-.25,reset,cam:HOME_CAM,signal:view.current.signal};
  group.rotation.set(view.current.x,view.current.y,0);
  const frames=createPartFrames(el),outline=createOutline(0xf2862b,.03);let hovered:MosPart|null=null;
  outline.set(meshes.find(m=>m.userData.part===selected));
  const tag=(id:MosPart|null)=>id?{target:meshes.find(m=>m.userData.part===id),name:mosParts[id].name}:null;
  const render=()=>{if(disposed)return;renderer.render(scene,camera);frames.update(camera,tag(hovered),tag(selected))};
  /* 보기 > 시점: 카메라와 모형 회전을 부드럽게 옮김 */
  let anim=0;
  const goTo=(p:ViewPreset)=>{const t=presetView(p),from=camera.position.clone(),to=new THREE.Vector3(...t.cam),rx=group.rotation.x,ry=group.rotation.y;let k=0;cancelAnimationFrame(anim);
   const reduce=typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   const step=()=>{k=reduce?1:Math.min(1,k+.08);const e=1-Math.pow(1-k,3);camera.position.lerpVectors(from,to,e);camera.lookAt(0,0,0);group.rotation.set(rx+(t.x-rx)*e,ry+(t.y-ry)*e,0);view.current={...view.current,x:group.rotation.x,y:group.rotation.y,cam:t.cam};render();if(k<1)anim=requestAnimationFrame(step)};step()};
  const unsubscribe=subscribeViewOptions(()=>{const o=getViewOptions();if(o.signal!==view.current.signal){view.current.signal=o.signal;if(o.preset)goTo(o.preset)}else render()});
  const resize=()=>{const w=Math.max(1,el.clientWidth),h=Math.max(1,el.clientHeight);renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();render()};
  const observer=typeof ResizeObserver!=='undefined'?new ResizeObserver(resize):null;observer?.observe(el);window.addEventListener('resize',resize);resize();
  const canvas=renderer.domElement;const ray=new THREE.Raycaster();let drag:{id:number;x:number;y:number;moved:boolean;released?:boolean}|null=null;
  const cancel=()=>{const d=drag;drag=null;if(d&&canvas.hasPointerCapture?.(d.id))canvas.releasePointerCapture(d.id)};
  const down=(e:PointerEvent)=>{if(e.button!==0||drag||e.isPrimary===false)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,moved:false};canvas.setPointerCapture?.(e.pointerId)};
  const move=(e:PointerEvent)=>{if(!drag){const hit=pickAt(e,canvas,camera,meshes);const id=(hit?.object.userData.part as MosPart|null)??null;if(id!==hovered){hovered=id;canvas.style.cursor=id?'pointer':'';render()}return}if(e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>3)drag.moved=true;if(drag.moved){if(!drag.released){drag.released=true;cancelAnimationFrame(anim);releaseViewPreset()}group.rotation.y+=dx*.008;group.rotation.x=THREE.MathUtils.clamp(group.rotation.x+dy*.006,-.4,.6);view.current.x=group.rotation.x;view.current.y=group.rotation.y;drag.x=e.clientX;drag.y=e.clientY;render()}};
  const up=(e:PointerEvent)=>{if(!drag||e.pointerId!==drag.id)return;const moved=drag.moved;cancel();if(moved)return;const b=canvas.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1),camera);const hit=ray.intersectObjects(meshes).find(h=>h.object.userData.part);if(hit)select.current(hit.object.userData.part)};
  const leave=()=>{if(hovered){hovered=null;canvas.style.cursor='';render()}};
  const visibility=()=>{if(document.visibilityState==='hidden')cancel()};
  const loss=(e:Event)=>{e.preventDefault();cancel();setFallback(true)};
  canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointerleave',leave);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',cancel);canvas.addEventListener('lostpointercapture',cancel);canvas.addEventListener('webglcontextlost',loss);window.addEventListener('blur',cancel);document.addEventListener('visibilitychange',visibility);
  return()=>{cancel();disposed=true;cancelAnimationFrame(anim);unsubscribe();frames.dispose();outline.dispose();canvas.removeEventListener('pointerleave',leave);observer?.disconnect();window.removeEventListener('resize',resize);window.removeEventListener('blur',cancel);document.removeEventListener('visibilitychange',visibility);canvas.removeEventListener('pointerdown',down);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerup',up);canvas.removeEventListener('pointercancel',cancel);canvas.removeEventListener('lostpointercapture',cancel);canvas.removeEventListener('webglcontextlost',loss);for(const m of meshes){m.geometry.dispose();(m.material as THREE.Material).dispose()}renderer.dispose();canvas.remove()};
 },[selected,channel,saturated,reset,fallback]);
 return <div className="mos-three" ref={host}>{fallback&&<div className="mos-fallback"><svg viewBox="0 0 500 260" role="img" aria-label={`MOSFET 대체 단면 모형: ${channel?'채널 형성':'채널 없음'}`}><rect x="35" y="110" width="430" height="105" rx="8" fill="#b5c4ce"/><rect x="55" y="110" width="110" height="48" fill="#678ed7"/><rect x="335" y="110" width="110" height="48" fill="#9479cb"/><rect x="165" y="92" width="170" height="15" fill="#7ac9d7"/><rect x="165" y="44" width="170" height="44" rx="4" fill="#f09942"/>{channel&&<path d={saturated?'M165 111H335L165 128Z':'M165 111H335V128H165Z'} fill="#24a99b"/>}<g fontSize="15" textAnchor="middle" fill="#263c4a"><text x="250" y="72">게이트 G</text><text x="110" y="140">소스 n+</text><text x="390" y="140">드레인 n+</text><text x="250" y="190">p형 바디</text><text x="250" y="244">{channel?'반전 채널 형성':'게이트 전압을 높여 채널을 만들어 보세요'}</text></g></svg></div>}</div>;
}
