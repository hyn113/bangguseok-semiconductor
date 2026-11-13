import {useEffect,useRef,useState,useSyncExternalStore} from 'react';
import type {Ref} from 'react';
import {Icon,type IconName} from './Icon';
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
export const setShellPanels=(closed:boolean)=>{state={left:closed,right:closed};emit()};
const toggleBoth=()=>{const anyOpen=!state.left||!state.right;state={left:anyOpen,right:anyOpen};emit()};

/** 접힘 상태와 루트 요소에 붙일 속성을 돌려줍니다. Ctrl/⌘ + \ 로 양쪽을 함께 접고 펼칩니다. */
export function useLessonShell(){
 const s=useSyncExternalStore(subscribe,()=>state,()=>state);
 useEffect(()=>{if(bound++===0)window.addEventListener('keydown',onKey);return()=>{if(--bound===0)window.removeEventListener('keydown',onKey)}},[]);
 return {collapsed:s,attrs:{'data-shell-left':s.left?'closed':'open','data-shell-right':s.right?'closed':'open'}};
}

const SidebarIcon=({side}:{side:ShellSide})=><Icon name={side==='left'?'layout-sidebar':'layout-sidebar-reverse'}/>;

/** 패널 머리에 두는 접기 버튼 */
export function PanelToggle({side}:{side:ShellSide}){
 return <button type="button" className={'shell-toggle shell-toggle-'+side} aria-label={side==='left'?'왼쪽 패널 접기':'오른쪽 패널 접기'} title={(side==='left'?'왼쪽':'오른쪽')+' 패널 접기 (Ctrl/⌘ + \\)'} aria-expanded="true" aria-controls={'shell-panel-'+side} onClick={()=>{toggleShellPanel(side);focusLater('.shell-chip-'+side)}}><SidebarIcon side={side}/></button>;
}

/** 패널이 접혔을 때 화면 모서리에 떠 있는 펼치기 칩 */
export function ShellChips({left,right}:{left:string;right:string}){
 const {collapsed}=useLessonShell();
 return <>{collapsed.left&&<button type="button" className="shell-chip shell-chip-left" aria-label={'왼쪽 패널 펼치기 · '+left} aria-expanded="false" aria-controls="shell-panel-left" onClick={()=>{toggleShellPanel('left');focusLater('#shell-panel-left .shell-toggle')}}><SidebarIcon side="left"/><span>{left}</span></button>}{collapsed.right&&<button type="button" className="shell-chip shell-chip-right" aria-label={'오른쪽 패널 펼치기 · '+right} aria-expanded="false" aria-controls="shell-panel-right" onClick={()=>{toggleShellPanel('right');focusLater('#shell-panel-right .shell-toggle')}}><span>{right}</span><SidebarIcon side="right"/></button>}</>;
}

/* 캔버스 하단 도구 막대 — 피그마식.
   손 도구(기본): 모형을 마우스로 돌려보는 상태. 조절 도구: 위로 보기·초기화 같은 조절 타일이 펼쳐짐. */
export type ToolTile={id:string;label:string;icon:IconName;onClick:()=>void;pressed?:boolean;disabled?:boolean;buttonRef?:Ref<HTMLButtonElement>};
export function CanvasToolbar({tiles:own}:{tiles:ToolTile[]}){
 const[open,setOpen]=useState(false),root=useRef<HTMLDivElement>(null);
 const {collapsed}=useLessonShell(),focused=collapsed.left&&collapsed.right;
 /* 보기: 좌우 패널을 모두 닫고 모형만 크게 봄. 다시 누르면 패널을 엶 */
 const tiles:ToolTile[]=[...own,{id:'view',label:'보기',icon:'box',pressed:focused,onClick:()=>setShellPanels(!focused)}];
 useEffect(()=>{if(!open)return;const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);root.current?.querySelector<HTMLButtonElement>('.dock-adjust')?.focus()}};const down=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setOpen(false)};document.addEventListener('keydown',key);document.addEventListener('pointerdown',down);return()=>{document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',down)}},[open]);
 return <div ref={root} className="canvas-toolbar">
  {open&&<div id="canvas-adjust" className="canvas-popover" role="group" aria-label="조절">{tiles.map(t=><button key={t.id} ref={t.buttonRef} type="button" className="tool-tile" aria-pressed={t.pressed} disabled={t.disabled} onClick={t.onClick}><Icon name={t.icon} size={20}/><span>{t.label}</span></button>)}</div>}
  <div className="canvas-dock" role="toolbar" aria-label="캔버스 도구">
   <button type="button" className="dock-btn dock-hand" aria-pressed={!open} aria-label="둘러보기" title="둘러보기 · 드래그해서 돌려보기" onClick={()=>setOpen(false)}><Icon name="hand-index" size={20}/></button>
   <button type="button" className="dock-btn dock-adjust" aria-pressed={open} aria-expanded={open} aria-controls="canvas-adjust" aria-label="조절" title="조절" onClick={()=>setOpen(o=>!o)}><Icon name="sliders" size={20}/></button>
  </div>
 </div>;
}
