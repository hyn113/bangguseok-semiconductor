import {useSyncExternalStore} from 'react';

/* 메모장·AI 어시스턴스의 이전 내역과 폴더.
   - 학습 화면마다 '기본 메모'(primary:<lesson>)는 기존 저장 위치를 그대로 쓰고,
     새로 만든 메모와 AI 대화는 여기에 모아 둡니다.
   - 폴더는 학습 화면 + 종류(메모/AI)별로 따로 있어요.
   모두 이 브라우저에만 저장돼요. */
export type HubKind='memo'|'ai';
export type Msg={role:'user'|'assistant';text:string;at:string;sources?:string[];followUps?:string[]};
export type Entry={id:string;lesson:string;kind:HubKind;text:string;messages?:Msg[];updated:string};
export type Folder={id:string;lesson:string;kind:HubKind;name:string};
type Book={entries:Entry[];folders:Folder[];assign:Record<string,string>;current:Record<string,string>};
const KEY='semilab.notebook';
const empty=():Book=>({entries:[],folders:[],assign:{},current:{}});
const load=():Book=>{try{const v=JSON.parse(localStorage.getItem(KEY)||'null');if(v&&Array.isArray(v.entries)&&Array.isArray(v.folders))return {...empty(),...v}}catch{}return empty()};
let book=load();
const listeners=new Set<()=>void>();
const subscribe=(l:()=>void)=>{listeners.add(l);return()=>{listeners.delete(l)}};
const snapshot=()=>book;
let failed=false;
const commit=(next:Book)=>{book=next;try{localStorage.setItem(KEY,JSON.stringify(next));failed=false}catch{failed=true}listeners.forEach(l=>l())};
export const useNotebook=()=>useSyncExternalStore(subscribe,snapshot,snapshot);
export const notebookFailed=()=>failed;
export const getNotebook=()=>book;

export const primaryId=(lesson:string)=>'primary:'+lesson;
const slot=(lesson:string,kind:HubKind)=>lesson+':'+kind;
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const isBlank=(e:Entry)=>!e.text.trim()&&!(e.messages&&e.messages.length);

/** 지금 열려 있는 메모·대화 id. 메모는 기본값이 기본 메모, AI는 없을 수 있어요(null). */
export const currentId=(b:Book,lesson:string,kind:HubKind)=>{const id=b.current[slot(lesson,kind)];if(id&&(id===primaryId(lesson)||b.entries.some(e=>e.id===id)))return id;return kind==='memo'?primaryId(lesson):null};
/** 빈 메모·대화는 다른 곳으로 옮길 때 iOS 메모처럼 지워요 */
const pruned=(b:Book,keep?:string)=>b.entries.filter(e=>e.id===keep||!isBlank(e));
export function openEntry(lesson:string,kind:HubKind,id:string|null){
 const current={...book.current};if(id)current[slot(lesson,kind)]=id;else delete current[slot(lesson,kind)];
 commit({...book,entries:pruned(book,id??undefined),current});
}
export function newEntry(lesson:string,kind:HubKind){
 const e:Entry={id:uid(),lesson,kind,text:'',messages:kind==='ai'?[]:undefined,updated:new Date().toISOString()};
 commit({...book,entries:[...pruned(book),e],current:{...book.current,[slot(lesson,kind)]:e.id}});
 return e.id;
}
export function editEntry(id:string,text:string){
 commit({...book,entries:book.entries.map(e=>e.id===id?{...e,text,updated:new Date().toISOString()}:e)});
}
export function askInThread(lesson:string,text:string):string{
 const now=new Date().toISOString();let id=currentId(book,lesson,'ai');let entries=book.entries;
 if(!id){id=uid();entries=[...pruned(book),{id,lesson,kind:'ai',text:'',messages:[],updated:now}]}
 entries=entries.map(e=>e.id===id?{...e,text:e.text||text.slice(0,80),messages:[...(e.messages||[]),{role:'user',text,at:now}],updated:now}:e);
 commit({...book,entries,current:{...book.current,[slot(lesson,'ai')]:id}});
 return id;
}
export function appendMessage(id:string,msg:Msg){
 commit({...book,entries:book.entries.map(e=>e.id===id?{...e,messages:[...(e.messages||[]),msg],updated:msg.at}:e)});
}
/** 마지막 AI 답을 지워요(다시 답하기) */
export function dropLastReply(id:string){
 commit({...book,entries:book.entries.map(e=>{if(e.id!==id||!e.messages?.length)return e;const m=[...e.messages];if(m[m.length-1].role==='assistant')m.pop();return {...e,messages:m}})});
}
export function deleteEntry(id:string){
 const assign={...book.assign};delete assign[id];
 const current=Object.fromEntries(Object.entries(book.current).filter(([,v])=>v!==id));
 commit({...book,entries:book.entries.filter(e=>e.id!==id),assign,current});
}
export function addFolder(lesson:string,kind:HubKind,name:string){
 const f:Folder={id:uid(),lesson,kind,name:name.trim().slice(0,30)||'새 폴더'};
 commit({...book,folders:[...book.folders,f]});return f.id;
}
export function renameFolder(id:string,name:string){const n=name.trim().slice(0,30);if(!n)return;commit({...book,folders:book.folders.map(f=>f.id===id?{...f,name:n}:f)})}
export function deleteFolder(id:string){
 commit({...book,folders:book.folders.filter(f=>f.id!==id),assign:Object.fromEntries(Object.entries(book.assign).filter(([,v])=>v!==id))});
}
export function moveToFolder(entryId:string,folderId:string|null){
 const assign={...book.assign};if(folderId)assign[entryId]=folderId;else delete assign[entryId];
 commit({...book,assign});
}
export const entryTitle=(text:string,fallback:string)=>text.split('\n').map(s=>s.trim()).find(Boolean)?.slice(0,60)||fallback;
export const entryPreview=(text:string)=>{const lines=text.split('\n').map(s=>s.trim()).filter(Boolean);return lines.slice(1).join(' ').slice(0,80)};
