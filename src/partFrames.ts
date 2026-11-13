import * as THREE from 'three';
import {getViewOptions} from './viewOptions';

/* 3D 구성 요소 이름표.
   마우스를 올린 부품 위쪽 가운데에 이름만 띄워요(테두리 없음). 위치는 부품의 3D 경계 상자를 화면에 투영해 정해요.
   선택 표시는 각 장면에서 부품을 살짝 밝히는 것으로 해요. '보기 > 부품 이름표'를 끄면 이름표를 숨겨요. */
type Target=THREE.Object3D|THREE.Object3D[]|null|undefined;
type Frame={el:HTMLDivElement;tag:HTMLSpanElement;key:string};

export function createPartFrames(host:HTMLElement){
 const layer=document.createElement('div');layer.className='part-frames';layer.setAttribute('aria-hidden','true');host.appendChild(layer);
 const make=(kind:'hover'|'selected'):Frame=>{
  const el=document.createElement('div');el.className='part-frame is-'+kind;el.hidden=true;
  const tag=document.createElement('span');tag.className='part-frame-tag';el.appendChild(tag);
  if(kind==='selected')for(const c of ['tl','tr','bl','br']){const h=document.createElement('i');h.className='part-frame-handle '+c;el.appendChild(h)}
  layer.appendChild(el);return {el,tag,key:''};
 };
 const frames={hover:make('hover'),selected:make('selected')};
 const box=new THREE.Box3(),v=new THREE.Vector3();
 const rect=(target:Target,camera:THREE.Camera,w:number,h:number)=>{
  box.makeEmpty();
  for(const o of Array.isArray(target)?target:target?[target]:[])if(o.visible)box.expandByObject(o);
  if(box.isEmpty())return null;
  let x0=Infinity,y0=Infinity,x1=-Infinity,y1=-Infinity;
  for(let i=0;i<8;i++){
   v.set(i&1?box.max.x:box.min.x,i&2?box.max.y:box.min.y,i&4?box.max.z:box.min.z).project(camera);
   if(v.z>1)return null;
   const sx=(v.x+1)/2*w,sy=(1-v.y)/2*h;x0=Math.min(x0,sx);y0=Math.min(y0,sy);x1=Math.max(x1,sx);y1=Math.max(y1,sy);
  }
  const pad=4;
  return {x:Math.round(x0-pad),y:Math.round(y0-pad),w:Math.round(x1-x0+pad*2),h:Math.round(y1-y0+pad*2)};
 };
 const show=(f:Frame,target:Target,name:string,camera:THREE.Camera)=>{
  const w=host.clientWidth,h=host.clientHeight,r=target&&name?rect(target,camera,w,h):null;
  if(!r){if(!f.el.hidden)f.el.hidden=true;return}
  f.el.hidden=false;
  const key=`${r.x},${r.y},${r.w},${r.h}`;
  if(key!==f.key){f.key=key;Object.assign(f.el.style,{transform:`translate(${r.x}px,${r.y}px)`,width:r.w+'px',height:r.h+'px'})}
  if(f.tag.textContent!==name)f.tag.textContent=name;
  /* 위쪽에 자리가 없으면 이름표를 테두리 아래로 */
  f.el.classList.toggle('tag-below',r.y<28);
  f.tag.hidden=!getViewOptions().labels;
 };
 return {
  update(camera:THREE.Camera,hover:{target:Target;name:string}|null,selected:{target:Target;name:string}|null){
   show(frames.selected,selected?.target,selected?.name??'',camera);
   show(frames.hover,hover?.target,hover?.name??'',camera);
  },
  dispose(){layer.remove()},
 };
}

/** 캔버스 위 포인터 위치를 정규화 좌표로 바꿔 광선과 맞닿은 첫 물체를 찾습니다. */
export function pickAt(e:{clientX:number;clientY:number},canvas:HTMLCanvasElement,camera:THREE.Camera,objects:THREE.Object3D[],recursive=false,ray=new THREE.Raycaster()){
 const b=canvas.getBoundingClientRect();
 ray.setFromCamera(new THREE.Vector2((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1),camera);
 return ray.intersectObjects(objects.filter(o=>o.visible),recursive)[0]??null;
}

/** 고른 부품의 윤곽선 — 모형 모양을 따라 바깥쪽에 얇은 주황 선을 그려요(뒤집은 껍데기 방식).
    set(대상)으로 바꾸고, 같은 대상이면 다시 만들지 않아요. */
export function createOutline(color=0xf2862b,thickness=.012){
 const mat=new THREE.MeshBasicMaterial({color,side:THREE.BackSide,depthWrite:false});
 mat.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\ntransformed += normalize(normal) * ${thickness.toFixed(4)};`)};
 let current:THREE.Object3D|null=null;const hulls:THREE.Mesh[]=[];
 const clear=()=>{for(const h of hulls)h.parent?.remove(h);hulls.length=0};
 return {
  set(target:THREE.Object3D|null|undefined){
   if((target??null)===current)return;current=target??null;clear();if(!target)return;
   target.traverse(o=>{const m=o as THREE.Mesh;if(!m.isMesh||(m as THREE.InstancedMesh).isInstancedMesh||!m.geometry?.attributes?.normal||m.userData.outline)return;
    /* 앞뒤가 다 보이는 얇은 면(필터 주름 등)은 윤곽선이 면 전체를 덮어 버려서 빼요 */
    const mm=m.material as THREE.Material|THREE.Material[];if((Array.isArray(mm)?mm:[mm]).some(x=>x.side===THREE.DoubleSide))return;
    const h=new THREE.Mesh(m.geometry,mat);h.raycast=()=>{};h.renderOrder=-1;h.userData.outline=true;m.add(h);hulls.push(h)});
  },
  dispose(){clear();mat.dispose()},
 };
}
