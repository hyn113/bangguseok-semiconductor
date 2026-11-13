import {useState} from 'react';
import type {ReactNode} from 'react';
import './lesson-workbench.css';
import {PanelToggle} from './LessonShell';
import {StudyHub} from './StudyHub';
export function LessonNotes({name,lessonId,storageKey,onQuiz,menu,profile}:{name:string;lessonId:string;storageKey:string;onQuiz:()=>void;menu?:ReactNode;profile?:ReactNode}){
 const read=(key:string)=>{try{return localStorage.getItem(key)}catch{return null}};
 const[note,setNote]=useState(()=>read(storageKey)||''),[updated,setUpdated]=useState(()=>read(storageKey+'.updated')),[failed,setFailed]=useState(false);
 const edit=(value:string)=>{const now=new Date().toISOString();setNote(value);setUpdated(now);try{localStorage.setItem(storageKey,value);localStorage.setItem(storageKey+'.updated',now);setFailed(false)}catch{setFailed(true)}};
 return <aside id="shell-panel-right" className="lesson-notes shell-right" aria-label="학습 도우미"><div className="lesson-notes-head">{profile??<b>체험 학습자</b>}<div className="shell-actions"><button type="button" className="shell-quiz" onClick={onQuiz}>퀴즈 풀기</button>{menu}<PanelToggle side="right"/></div></div><StudyHub lesson={lessonId} primary={{label:`${name} 학습 메모`,value:note,updated,failed,onChange:edit}}/></aside>
}
