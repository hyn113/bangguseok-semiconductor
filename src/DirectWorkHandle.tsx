import {useEffect,useRef,useState} from 'react';
import type {PointerEvent as ReactPointerEvent,RefObject} from 'react';
type Props={disabled?:boolean;stage:number;progress:number;reset:number;onWorkProgress:(n:number)=>void;handle:RefObject<HTMLButtonElement|null>;guide:RefObject<HTMLDivElement|null>;path:RefObject<{x:number;y:number}>;moveTool:RefObject<((x:number,y:number)=>number)|null>};
export function DirectWorkHandle(props:Props){
 const {handle,guide,path,moveTool,reset}=props;
 const [dragging,setDragging]=useState(false);
 const cut=useRef<{element:HTMLButtonElement;id:number;x:number;y:number;progress:number;dx:number;dy:number;offsetX:number;offsetY:number}|null>(null);
 const stopCut=(id?:number,update=true)=>{if(id!==undefined&&cut.current?.id!==id)return;const idToRelease=cut.current?.id,element=cut.current?.element;cut.current=null;if(idToRelease!==undefined&&element?.hasPointerCapture?.(idToRelease))element.releasePointerCapture(idToRelease);if(update)setDragging(false)};
 useEffect(()=>{stopCut()},[props.stage,reset,props.disabled,props.progress>=100]);
 useEffect(()=>{const cancel=()=>stopCut();const visibility=()=>{if(document.hidden)cancel()};window.addEventListener('blur',cancel);document.addEventListener('visibilitychange',visibility);return()=>{window.removeEventListener('blur',cancel);document.removeEventListener('visibilitychange',visibility);stopCut(undefined,false)}},[]);
 const startCut=(e:ReactPointerEvent<HTMLButtonElement>)=>{
  if(props.disabled||(props.stage<1||props.stage>5)||props.progress>=100||cut.current||e.button!==0)return;
  e.preventDefault();e.stopPropagation();
  const bounds=e.currentTarget.getBoundingClientRect();
  cut.current={element:e.currentTarget,id:e.pointerId,x:e.clientX,y:e.clientY,progress:props.progress,dx:path.current.x,dy:path.current.y,offsetX:e.clientX-(bounds.left+bounds.width/2),offsetY:e.clientY-(bounds.top+bounds.height/2)};
  e.currentTarget.setPointerCapture?.(e.pointerId);setDragging(true);
 };
 const moveCut=(e:ReactPointerEvent<HTMLButtonElement>)=>{
  const g=cut.current;if(props.disabled||!g||g.id!==e.pointerId||props.stage<1||props.stage>5||props.progress>=100)return;
  e.preventDefault();
  if(props.stage!==1){
   // Keep the original grab point attached to the tool instead of snapping its center to the finger.
   if(e.clientX===g.x&&e.clientY===g.y)return;
   const distance=moveTool.current?.(e.clientX-g.offsetX,e.clientY-g.offsetY)??0;g.x=e.clientX;g.y=e.clientY;
   if(distance>0){g.progress=Math.min(100,Math.max(g.progress,props.progress)+distance/6*100);props.onWorkProgress(g.progress)}return;
  }
  const length2=g.dx*g.dx+g.dy*g.dy;
  const travel=((e.clientX-g.x)*g.dx+(e.clientY-g.y)*g.dy)/Math.max(1,length2);
  const value=Math.min(100,Math.max(props.progress,g.progress+travel*100));
  props.onWorkProgress(value);
 };

 return <div className="direct-cut-overlay">
  <div ref={guide} className="direct-cut-guide" style={{display:props.stage===1?undefined:'none'}} aria-hidden="true"/>
  <button ref={handle} className={'direct-cut-handle '+(dragging?'is-dragging':'')} aria-label={props.stage===1?"와이어 절단 손잡이":"웨이퍼 가공 도구 손잡이"} aria-describedby="direct-cut-help" aria-disabled={props.disabled||props.progress>=100}
   onPointerDown={startCut} onPointerMove={moveCut} onPointerUp={e=>stopCut(e.pointerId)} onPointerCancel={e=>stopCut(e.pointerId)} onLostPointerCapture={e=>stopCut(e.pointerId)}
   onKeyDown={e=>{if(!props.disabled&&props.stage>=1&&props.stage<=5&&props.progress<100&&!cut.current&&['ArrowDown','ArrowRight','Enter',' '].includes(e.key)){e.preventDefault();props.onWorkProgress(Math.min(100,props.progress+20))}}}>
   <span aria-hidden="true">{props.progress>=100?'✓':props.stage===1?'↧':'✥'}</span>
  </button>
  <p id="direct-cut-help" className="direct-cut-help">{props.progress>=100?'이 장면 완료 · 다음 단계로 이동하세요':props.stage===1?'주황 손잡이를 잡고 점선을 따라 내려보세요':props.stage===4?'손잡이를 움직여 손상층 감소를 개념적으로 살펴보세요':'주황 손잡이를 잡고 웨이퍼 위를 문질러 보세요'}<small>개념 체험 · 조작 중 시점 고정 · 방향키 / Enter로도 진행</small></p>
 </div>;
}

/** Convert a ray/wafer-plane hit into actual bounded tool travel. */
export function surfaceTravel(stage:number,point:{x:number;z:number},previous:{x:number;z:number}){
 const radius=Math.hypot(point.x,point.z);
 if(!Number.isFinite(radius)||radius>1.72||(stage===2&&radius<.001))return null;
 const limit=stage===2?1.7:1.35;
 const scale=stage===2?limit/radius:Math.min(1,limit/Math.max(.001,radius));
 const next={x:point.x*scale,z:point.z*scale};
 return {next,distance:Math.hypot(next.x-previous.x,next.z-previous.z)};
}

/** Off-surface travel is not work: the next valid hit starts a fresh segment. */
export function createSurfaceTracker(){
 let interrupted=false;
 return {
  reset(){interrupted=false},
  move(stage:number,point:{x:number;z:number}|null,previous:{x:number;z:number}){
   const result=point?surfaceTravel(stage,point,previous):null;
   if(!result){interrupted=true;return null}
   if(interrupted)result.distance=0;
   interrupted=false;
   return result;
  }
 };
}
