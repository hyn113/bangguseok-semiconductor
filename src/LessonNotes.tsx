import {useState} from 'react';
import './lesson-workbench.css';
import {PanelToggle} from './LessonShell';
import {NoteSheet} from './NoteSheet';
import {Icon} from './Icon';
export function LessonNotes({name,storageKey,onExit}:{name:string;storageKey:string;onExit:()=>void}){
 const[tab,setTab]=useState<'notes'|'ai'>('notes');
 const read=(key:string)=>{try{return localStorage.getItem(key)}catch{return null}};
 const[note,setNote]=useState(()=>read(storageKey)||''),[updated,setUpdated]=useState(()=>read(storageKey+'.updated')),[failed,setFailed]=useState(false);
 const edit=(value:string)=>{const now=new Date().toISOString();setNote(value);setUpdated(now);try{localStorage.setItem(storageKey,value);localStorage.setItem(storageKey+'.updated',now);setFailed(false)}catch{setFailed(true)}};
 return <aside id="shell-panel-right" className="lesson-notes shell-right" aria-label="학습 도우미"><div className="lesson-notes-head"><PanelToggle side="right"/><b>체험 학습자</b><button className="orange" onClick={onExit}>학습 종료</button></div><div className="lesson-note-tabs"><button aria-pressed={tab==='ai'} onClick={()=>setTab('ai')}>AI 어시스턴스</button><button aria-pressed={tab==='notes'} onClick={()=>setTab('notes')}>메모장</button></div>{tab==='notes'?<div className="lesson-note-body"><NoteSheet label={`${name} 학습 메모`} value={note} updated={updated} failed={failed} onChange={edit}/></div>:<div className="lesson-ai"><Icon name="stars" size={24}/><h3>AI 어시스턴트는 준비 중이에요</h3><button onClick={()=>setTab('notes')}><Icon name="journal-text" className="lead"/>메모장에 질문 적기</button></div>}</aside>
}
