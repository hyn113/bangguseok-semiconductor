import {useEffect,useRef,useState,useSyncExternalStore} from 'react';

/* 학습 파일 이름 바꾸기 — 피그마 파일 이름처럼 제목을 누르면 바로 고칠 수 있어요.
   Enter 또는 바깥을 누르면 저장, Esc는 취소, 비우면 원래 이름으로 돌아가요. 이 브라우저에 기억합니다. */
const KEY='semilab.titles';
const read=():Record<string,string>=>{try{const v=JSON.parse(localStorage.getItem(KEY)||'{}');return v&&typeof v==='object'?v:{}}catch{return {}}};
let titles=read();
const listeners=new Set<()=>void>();
const subscribe=(l:()=>void)=>{listeners.add(l);return()=>{listeners.delete(l)}};
const snapshot=()=>titles;
export const lessonTitle=(id:string,fallback:string)=>(id&&titles[id])||fallback;
export const setLessonTitle=(id:string,name:string)=>{
 const next={...titles},clean=name.replace(/\s+/g,' ').trim().slice(0,40);
 if(clean)next[id]=clean;else delete next[id];
 titles=next;try{localStorage.setItem(KEY,JSON.stringify(next))}catch{}
 listeners.forEach(l=>l());
};
export const useLessonTitle=(id:string|undefined,fallback:string)=>{useSyncExternalStore(subscribe,snapshot,snapshot);return lessonTitle(id??'',fallback)};

export function LessonTitle({id,fallback}:{id:string;fallback:string}){
 const title=useLessonTitle(id,fallback),[editing,setEditing]=useState(false),[draft,setDraft]=useState(title),input=useRef<HTMLInputElement>(null),cancelled=useRef(false);
 useEffect(()=>{if(editing){input.current?.focus();input.current?.select()}},[editing]);
 const start=()=>{cancelled.current=false;setDraft(title);setEditing(true)};
 const finish=()=>{if(!cancelled.current&&draft!==title)setLessonTitle(id,draft===fallback?'':draft);setEditing(false)};
 return <h1 className="lesson-title">{editing
  ?<input ref={input} className="lesson-title-input" aria-label="학습 파일 이름" value={draft} maxLength={40} onChange={e=>setDraft(e.target.value)} onBlur={finish} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();input.current?.blur()}else if(e.key==='Escape'){e.preventDefault();cancelled.current=true;input.current?.blur()}}}/>
  :<button type="button" className="lesson-title-button" title="눌러서 이름 바꾸기" aria-label={`${title} · 이름 바꾸기`} onClick={start}>{title}</button>}</h1>;
}
