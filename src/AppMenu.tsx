import {useEffect,useRef,useState} from 'react';
import {Icon,type IconName} from './Icon';
import {toggleTheme,useDarkMode} from './theme';

/* 모든 화면 오른쪽 위에 고정되는 메뉴(햄버거).
   IA 순서: 클린룸 공부하기 · 학습하러 가기 · 워크스페이스 · 퀴즈 풀러 가기 / 화면 모드 / 로그아웃 */
export type MenuTarget='tour'|'learn'|'quiz'|'workspace'|'logout';
const items:{id:Exclude<MenuTarget,'logout'>;label:string;icon:IconName}[]=[
 {id:'tour',label:'클린룸 공부하기',icon:'compass'},
 {id:'learn',label:'학습하러 가기',icon:'boxes'},
 {id:'workspace',label:'워크스페이스',icon:'journal-text'},
 {id:'quiz',label:'퀴즈 풀러 가기',icon:'check2-circle'},
];
export function AppMenu({current,onSelect}:{current?:MenuTarget|null;onSelect:(target:MenuTarget)=>void}){
 const[open,setOpen]=useState(false),root=useRef<HTMLDivElement>(null),dark=useDarkMode();
 useEffect(()=>{if(!open)return;const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);root.current?.querySelector<HTMLButtonElement>('.menu-button')?.focus()}};const down=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setOpen(false)};document.addEventListener('keydown',key);document.addEventListener('pointerdown',down);return()=>{document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',down)}},[open]);
 const pick=(t:MenuTarget)=>{setOpen(false);onSelect(t)};
 return <div ref={root} className="menu-wrap global-menu">
  <button className="menu-button" data-tip="메뉴" data-tip-pos="left" aria-label="메뉴 열기" aria-expanded={open} aria-haspopup="menu" onClick={()=>setOpen(o=>!o)}><Icon name="list"/></button>
  {open&&<div className="dropdown" role="menu">
   {items.map(item=><button key={item.id} role="menuitem" aria-current={current===item.id?'page':undefined} disabled={current===item.id} onClick={()=>pick(item.id)}><Icon name={item.icon} className="lead"/>{item.label}</button>)}
   <button role="menuitemcheckbox" aria-checked={dark} onClick={toggleTheme}><Icon name={dark?'sun':'moon-stars'} className="lead"/>{dark?'라이트 모드':'다크 모드'}</button>
   <hr/>
   <button role="menuitem" className="menu-logout" onClick={()=>pick('logout')}><Icon name="box-arrow-right" className="lead"/>로그아웃</button>
  </div>}
 </div>;
}
