import {useSyncExternalStore} from 'react';
import * as THREE from 'three';

/* 하단 도구 막대의 '보기' 설정.
   시점(기본·정면·측면·위), 부품 이름표, 효과(공기 흐름 등)를 모든 3D 화면이 함께 씁니다.
   3D 장면은 매 프레임 getViewOptions()로 읽고, 도구 막대는 useViewOptions()로 구독해요. */
export type ViewPreset='home'|'front'|'side'|'top';
export type ViewOptions={preset:ViewPreset|null;signal:number;labels:boolean;effects:boolean};
let state:ViewOptions={preset:'home',signal:0,labels:true,effects:true};
const listeners=new Set<()=>void>();
const emit=()=>listeners.forEach(l=>l());
const subscribe=(l:()=>void)=>{listeners.add(l);return()=>{listeners.delete(l)}};
export const getViewOptions=()=>state;
export const subscribeViewOptions=subscribe;
export const useViewOptions=()=>useSyncExternalStore(subscribe,getViewOptions,getViewOptions);
/** 시점 버튼: 같은 시점을 다시 눌러도 그 각도로 돌아가도록 signal을 올려요. */
export const setViewPreset=(preset:ViewPreset)=>{state={...state,preset,signal:state.signal+1};emit()};
/** 사용자가 직접 돌리기 시작하면 '자유 시점'(선택 없음)으로 */
export const releaseViewPreset=()=>{if(state.preset===null)return;state={...state,preset:null};emit()};
/** 초기화: 기본 시점으로 */
export const resetViewPreset=()=>setViewPreset('home');
export const setViewLabels=(labels:boolean)=>{state={...state,labels};emit()};
export const setViewEffects=(effects:boolean)=>{state={...state,effects};emit()};
export const viewPresets:{id:ViewPreset;label:string}[]=[{id:'home',label:'기본'},{id:'front',label:'정면'},{id:'side',label:'측면'},{id:'top',label:'위'}];

/** OrbitControls 장면용 카메라 이동기. 지금 거리를 유지한 채 정해진 방향으로 부드럽게 옮깁니다. */
export function createCameraRig(camera:THREE.PerspectiveCamera,target:THREE.Vector3,home:()=>THREE.Vector3){
 let seen=state.signal,goal:THREE.Vector3|null=null;
 const reduce=typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const dirs:Record<Exclude<ViewPreset,'home'>,THREE.Vector3>={front:new THREE.Vector3(0,.08,1),side:new THREE.Vector3(1,.08,0),top:new THREE.Vector3(0,1,.002)};
 const aim=(preset:ViewPreset)=>{
  if(preset==='home')return home().clone();
  const dist=camera.position.distanceTo(target);
  return target.clone().add(dirs[preset].clone().normalize().multiplyScalar(dist));
 };
 return {
  /** 매 프레임 호출. 움직이는 중이면 true */
  update(){
   const s=state;
   if(s.signal!==seen){seen=s.signal;goal=s.preset?aim(s.preset):null;if(goal&&reduce){camera.position.copy(goal);goal=null}}
   if(!goal)return false;
   camera.position.lerp(goal,.14);camera.lookAt(target);
   if(camera.position.distanceToSquared(goal)<1e-6){camera.position.copy(goal);goal=null}
   return true;
  },
  /** 사용자가 끌기 시작함 */
  cancel(){goal=null;releaseViewPreset()},
 };
}
