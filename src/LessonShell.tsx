import {useEffect,useSyncExternalStore} from 'react';
import './lesson-shell.css';

/* 학습 화면 공통 3단 레이아웃의 좌우 패널 접기 상태.
   피그마처럼 화면을 옮겨도 유지되도록 모듈 단위로 기억합니다(브라우저 저장소는 쓰지 않음). */
export type ShellSide='left'|'right';
type State={left:boolean;right:boolean};
let state:State={left:false,right:false};
const listeners=new Set<()=>void>();
const emit=()=>listeners.forEach(l=>l());
const subscribe=(l:()=>void)=>{listeners.add(l);return()=>{listeners.delete(l)}};
export const toggleShellPanel=(side:ShellSide)=>{state={...state,[side]:!state[side]};emit()};
const focusLater=(selector:string)=>requestAnimationFrame(()=>document.querySelector<HTMLElement>(selector)?.focus());
let bound=0;
const onKey=(e:KeyboardEvent)=>{if(e.key!=='\\'||!(e.metaKey||e.ctrlKey))return;const t=e.target as HTMLElement|null;if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable))return;e.preventDefault();toggleBoth()};
const toggleBoth=()=>{const anyOpen=!state.left||!state.right;state={left:anyOpen,right:anyOpen};emit()};

/** 접힘 상태와 루트 요소에 붙일 속성을 돌려줍니다. Ctrl/⌘ + \ 로 양쪽을 함께 접고 펼칩니다. */
export function useLessonShell(){
 const s=useSyncExternalStore(subscribe,()=>state,()=>state);
 useEffect(()=>{if(bound++===0)window.addEventListener('keydown',onKey);return()=>{if(--bound===0)window.removeEventListener('keydown',onKey)}},[]);
 return {collapsed:s,attrs:{'data-shell-left':s.left?'closed':'open','data-shell-right':s.right?'closed':'open'}};
}

const SidebarIcon=({side}:{side:ShellSide})=><svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><rect x="1.5" y="2.5" width="13" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d={side==='left'?'M6 2.5v11':'M10 2.5v11'} stroke="currentColor" strokeWidth="1.3"/><rect x={side==='left'?2.2:10.6} y="3.2" width="3.2" height="9.6" rx="1" fill="currentColor" opacity=".22"/></svg>;

/** 패널 머리에 두는 접기 버튼 */
export function PanelToggle({side}:{side:ShellSide}){
 return <button type="button" className={'shell-toggle shell-toggle-'+side} aria-label={side==='left'?'왼쪽 패널 접기':'오른쪽 패널 접기'} title={(side==='left'?'왼쪽':'오른쪽')+' 패널 접기 (Ctrl/⌘ + \\)'} aria-expanded="true" aria-controls={'shell-panel-'+side} onClick={()=>{toggleShellPanel(side);focusLater('.shell-chip-'+side)}}><SidebarIcon side={side}/></button>;
}

/** 패널이 접혔을 때 화면 모서리에 떠 있는 펼치기 칩 */
export function ShellChips({left,right}:{left:string;right:string}){
 const {collapsed}=useLessonShell();
 return <>{collapsed.left&&<button type="button" className="shell-chip shell-chip-left" aria-label={'왼쪽 패널 펼치기 · '+left} aria-expanded="false" aria-controls="shell-panel-left" onClick={()=>{toggleShellPanel('left');focusLater('#shell-panel-left .shell-toggle')}}><SidebarIcon side="left"/><span>{left}</span></button>}{collapsed.right&&<button type="button" className="shell-chip shell-chip-right" aria-label={'오른쪽 패널 펼치기 · '+right} aria-expanded="false" aria-controls="shell-panel-right" onClick={()=>{toggleShellPanel('right');focusLater('#shell-panel-right .shell-toggle')}}><span>{right}</span><SidebarIcon side="right"/></button>}</>;
}
