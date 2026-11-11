import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {mosParts,type MosPart} from './mosfetModel';
type Props={selected:MosPart;onSelect:(part:MosPart)=>void;channel:boolean;saturated:boolean;reset:number};
export function MosfetScene({selected,onSelect,channel,saturated,reset}:Props){
 const host=useRef<HTMLDivElement>(null),select=useRef(onSelect);select.current=onSelect;
 const [fallback,setFallback]=useState(false);
 const view=useRef({x:0,y:-.25,reset});
 useEffect(()=>{
  const el=host.current;if(!el||fallback)return;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true})}catch{setFallback(true);return}
  let disposed=false;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));el.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-label','회전하고 구성 요소를 선택할 수 있는 MOSFET 3D 모형');
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(40,1,.1,100),group=new THREE.Group();scene.add(group);
  camera.position.set(5,4.3,6);camera.lookAt(0,0,0);
  scene.add(new THREE.HemisphereLight(0xffffff,0x647080,2.3));const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(3,6,4);scene.add(light);
  const meshes:THREE.Mesh[]=[];
  function block(id:MosPart|null,size:number[],position:number[],color:string,opacity=1){const material=new THREE.MeshStandardMaterial({color,roughness:.5,transparent:opacity<1,opacity,emissive:id===selected?0x643000:0,emissiveIntensity:.4});const mesh=new THREE.Mesh(new THREE.BoxGeometry(...size as [number,number,number]),material);mesh.position.set(...position as [number,number,number]);mesh.userData.part=id;group.add(mesh);meshes.push(mesh)}
  block('body',[4.6,.7,2.5],[0,-.55,0],mosParts.body.color);
  block('source',[1.15,.35,2],[-1.6,-.04,0],mosParts.source.color);
  block('drain',[1.15,.35,2],[1.6,-.04,0],mosParts.drain.color);
  block('oxide',[2.2,.13,2.05],[0,.2,0],mosParts.oxide.color,.8);
  block('gate',[2.1,.3,1.8],[0,.44,0],mosParts.gate.color,.65);
  if(channel){block(null,[saturated?1.8:2.1,.06,1.9],[saturated?-.15:0,.08,0],'#24a99b');}
  if(view.current.reset!==reset)view.current={x:0,y:-.25,reset};
  group.rotation.set(view.current.x,view.current.y,0);
  const render=()=>{if(!disposed)renderer.render(scene,camera)};
  const resize=()=>{const w=Math.max(1,el.clientWidth),h=Math.max(1,el.clientHeight);renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();render()};
  const observer=typeof ResizeObserver!=='undefined'?new ResizeObserver(resize):null;observer?.observe(el);window.addEventListener('resize',resize);resize();
  const canvas=renderer.domElement;const ray=new THREE.Raycaster();let drag:{id:number;x:number;y:number;moved:boolean}|null=null;
  const cancel=()=>{const d=drag;drag=null;if(d&&canvas.hasPointerCapture?.(d.id))canvas.releasePointerCapture(d.id)};
  const down=(e:PointerEvent)=>{if(e.button!==0||drag||e.isPrimary===false)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,moved:false};canvas.setPointerCapture?.(e.pointerId)};
  const move=(e:PointerEvent)=>{if(!drag||e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>3)drag.moved=true;if(drag.moved){group.rotation.y+=dx*.008;group.rotation.x=THREE.MathUtils.clamp(group.rotation.x+dy*.006,-.4,.6);view.current.x=group.rotation.x;view.current.y=group.rotation.y;drag.x=e.clientX;drag.y=e.clientY;render()}};
  const up=(e:PointerEvent)=>{if(!drag||e.pointerId!==drag.id)return;const moved=drag.moved;cancel();if(moved)return;const b=canvas.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1),camera);const hit=ray.intersectObjects(meshes).find(h=>h.object.userData.part);if(hit)select.current(hit.object.userData.part)};
  const visibility=()=>{if(document.visibilityState==='hidden')cancel()};
  const loss=(e:Event)=>{e.preventDefault();cancel();setFallback(true)};
  canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',cancel);canvas.addEventListener('lostpointercapture',cancel);canvas.addEventListener('webglcontextlost',loss);window.addEventListener('blur',cancel);document.addEventListener('visibilitychange',visibility);
  return()=>{cancel();disposed=true;observer?.disconnect();window.removeEventListener('resize',resize);window.removeEventListener('blur',cancel);document.removeEventListener('visibilitychange',visibility);canvas.removeEventListener('pointerdown',down);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerup',up);canvas.removeEventListener('pointercancel',cancel);canvas.removeEventListener('lostpointercapture',cancel);canvas.removeEventListener('webglcontextlost',loss);for(const m of meshes){m.geometry.dispose();(m.material as THREE.Material).dispose()}renderer.dispose();canvas.remove()};
 },[selected,channel,saturated,reset,fallback]);
 return <div className="mos-three" ref={host}>{fallback&&<div className="mos-fallback"><strong>2D 학습 모드</strong><p>이 환경에서는 3D를 표시할 수 없어요. 단면도와 구성 요소 버튼으로 개념을 계속 학습할 수 있어요.</p><svg viewBox="0 0 500 260" role="img" aria-label={`MOSFET 대체 단면 모형: ${channel?'채널 형성':'채널 없음'}`}><rect x="35" y="110" width="430" height="105" rx="8" fill="#b5c4ce"/><rect x="55" y="110" width="110" height="48" fill="#678ed7"/><rect x="335" y="110" width="110" height="48" fill="#9479cb"/><rect x="165" y="92" width="170" height="15" fill="#7ac9d7"/><rect x="165" y="44" width="170" height="44" rx="4" fill="#f09942"/>{channel&&<path d={saturated?'M165 111H335L165 128Z':'M165 111H335V128H165Z'} fill="#24a99b"/>}<g fontSize="15" textAnchor="middle" fill="#263c4a"><text x="250" y="72">게이트 G</text><text x="110" y="140">소스 n+</text><text x="390" y="140">드레인 n+</text><text x="250" y="190">p형 바디</text><text x="250" y="244">{channel?'반전 채널 형성':'게이트 전압을 높여 채널을 만들어 보세요'}</text></g></svg></div>}</div>;
}
