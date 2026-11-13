import {useState} from 'react';
import './lesson-workbench.css';
import {PanelToggle} from './LessonShell';
export function LessonNotes({name,storageKey,onExit}:{name:string;storageKey:string;onExit:()=>void}){
 const[tab,setTab]=useState<'notes'|'ai'>('notes');
 const[note,setNote]=useState(()=>{try{return localStorage.getItem(storageKey)||''}catch{return ''}}),[failed,setFailed]=useState(false);
 const edit=(value:string)=>{setNote(value);try{localStorage.setItem(storageKey,value);setFailed(false)}catch{setFailed(true)}};
 return <aside id="shell-panel-right" className="lesson-notes shell-right" aria-label="학습 도우미"><div className="lesson-notes-head"><PanelToggle side="right"/><b>체험 학습자 <small>입문 탐색</small></b><button className="orange" onClick={onExit}>학습 종료</button></div><div className="lesson-note-tabs"><button aria-pressed={tab==='ai'} onClick={()=>setTab('ai')}>AI 어시스턴스</button><button aria-pressed={tab==='notes'} onClick={()=>setTab('notes')}>메모장</button></div>{tab==='notes'?<div className="lesson-note-body"><span>나의 학습 메모</span><p>{name}</p><textarea aria-label={`${name} 학습 메모`} maxLength={5000} value={note} onChange={e=>edit(e.target.value)} placeholder="직접 관찰한 것과 기억하고 싶은 내용을 적어보세요."/><small>{note.length} / 5,000</small><p className="lesson-save-status" role="status">{failed?'저장하지 못했어요. 메모를 복사해 보관하세요.':''}</p></div>:<div className="lesson-ai"><span>✦</span><h3>AI 연결 준비 중</h3><p>현재 AI 답변 기능은 연결되어 있지 않아요. 설명을 확인하고 질문은 메모장에 남겨 주세요.</p><button onClick={()=>setTab('notes')}>메모장에 질문 적기</button></div>}</aside>
}
