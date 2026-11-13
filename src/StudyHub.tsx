import {useEffect,useRef,useState} from 'react';
import type {Ref,DragEvent} from 'react';
import {Icon} from './Icon';
import {NoteSheet} from './NoteSheet';
import {relTime} from './Workspace';
import {replyTo,streamText,starterQuestions} from './assistant';
import {useNotebook,currentId,primaryId,openEntry,newEntry,editEntry,askInThread,appendMessage,dropLastReply,deleteEntry,addFolder,renameFolder,deleteFolder,moveToFolder,entryTitle,entryPreview,notebookFailed,type HubKind,type Entry} from './notebook';

/* 오른쪽 패널의 메모장 · AI 어시스턴스.
   머리 줄: [AI 어시스턴스][메모장] ……… [이전 내역][검색][새 메모]
   - 이전 내역: 지난 메모·대화를 마지막 수정 순으로, 폴더로 묶어 보기 (끌어서 폴더에 넣기 · ⋯ 메뉴)
   - 메모에서 글을 드래그해 고르면 'AI에게 물어보기'가 떠서 고른 글을 채팅 입력칸에 붙여 줘요. */
export type HubTab='notes'|'ai';
type Primary={label:string;value:string;updated?:string|null;failed?:boolean;onChange:(text:string)=>void;inputRef?:Ref<HTMLTextAreaElement>};
type Row={id:string;title:string;preview:string;updated?:string|null;primary?:boolean};

export function StudyHub({lesson,ai=true,primary,tab:ctrlTab,onTab}:{lesson:string;ai?:boolean;primary:Primary;tab?:HubTab;onTab?:(t:HubTab)=>void}){
 const book=useNotebook();
 const[ownTab,setOwnTab]=useState<HubTab>('notes');const tab=ai?(ctrlTab??ownTab):'notes';
 const setTab=(t:HubTab)=>{setOwnTab(t);onTab?.(t)};
 const kind:HubKind=tab==='ai'?'ai':'memo';
 const[view,setView]=useState<'current'|'history'>('current'),[query,setQuery]=useState(''),[draft,setDraft]=useState('');
 const[pick,setPick]=useState<{text:string;x:number;y:number}|null>(null);
 const root=useRef<HTMLDivElement>(null),search=useRef<HTMLInputElement>(null),ask=useRef<HTMLTextAreaElement>(null),memo=useRef<HTMLTextAreaElement|null>(null);
 const cur=currentId(book,lesson,kind),entry=book.entries.find(e=>e.id===cur);
 useEffect(()=>{setPick(null)},[tab,view,cur]);

 const goHistory=(focusSearch=false)=>{setQuery('');setView(v=>v==='history'&&!focusSearch?'current':'history');if(focusSearch)requestAnimationFrame(()=>search.current?.focus())};
 const create=()=>{newEntry(lesson,kind);setView('current');requestAnimationFrame(()=>(kind==='ai'?ask.current:memo.current)?.focus())};
 const open=(id:string)=>{openEntry(lesson,kind,id);setView('current')};
 const onSelection=(text:string,point?:{x:number;y:number})=>{
  if(!ai||!text){setPick(null);return}
  const box=root.current?.getBoundingClientRect();if(!box)return;
  const x=point?point.x-box.left:box.width/2,y=point?point.y-box.top:box.height-72;
  setPick({text,x:Math.min(Math.max(x,72),box.width-72),y:Math.max(56,y-44)});
 };
 const askAI=()=>{if(!pick)return;setDraft(d=>(d.trim()?d.trim()+'\n\n':'')+'“'+pick.text+'”\n');setPick(null);setTab('ai');setView('current');requestAnimationFrame(()=>{const t=ask.current;if(t){t.focus();t.setSelectionRange(t.value.length,t.value.length)}})};

 const memoRef=(el:HTMLTextAreaElement|null)=>{memo.current=el;const r=primary.inputRef;if(!r)return;if(typeof r==='function')r(el);else (r as {current:HTMLTextAreaElement|null}).current=el};
 return <div ref={root} className="study-hub" data-tab={tab}>
  <div className="hub-bar">
   {ai?<div className="hub-tabs" role="tablist" aria-label="학습 도우미">
    <button type="button" role="tab" aria-selected={tab==='ai'} onClick={()=>{setTab('ai');setView('current')}}>AI 어시스턴스</button>
    <button type="button" role="tab" aria-selected={tab==='notes'} onClick={()=>{setTab('notes');setView('current')}}>메모장</button>
   </div>:<span className="hub-title">메모장</span>}
   <div className="hub-actions">
    <button type="button" className="hub-icon" aria-pressed={view==='history'} aria-label={kind==='ai'?'이전 대화':'이전 메모'} data-tip={kind==='ai'?'이전 대화':'이전 메모'} data-tip-pos="bottom" onClick={()=>goHistory()}><Icon name="clock-history"/></button>
    <button type="button" className="hub-icon" aria-label="검색" data-tip="검색" data-tip-pos="bottom" onClick={()=>goHistory(true)}><Icon name="search"/></button>
    <button type="button" className="hub-icon" aria-label={kind==='ai'?'새 대화':'새 메모'} data-tip={kind==='ai'?'새 대화':'새 메모'} data-tip-pos="bottom" onClick={create}><Icon name="pencil-square"/></button>
   </div>
  </div>
  {view==='history'?<History lesson={lesson} kind={kind} query={query} setQuery={setQuery} searchRef={search} current={cur} primary={primary} onOpen={open} onBack={()=>setView('current')}/>:
   tab==='notes'?<div className="hub-body">
    {entry?<NoteSheet label="새 메모" value={entry.text} updated={entry.updated} failed={notebookFailed()} onChange={t=>editEntry(entry.id,t)} inputRef={memoRef} onSelection={onSelection}/>
     :<NoteSheet label={primary.label} value={primary.value} updated={primary.updated} failed={primary.failed} onChange={primary.onChange} inputRef={memoRef} onSelection={onSelection}/>}
   </div>:
   <AiThread lesson={lesson} entry={entry} draft={draft} setDraft={setDraft} inputRef={ask}/>}
  {pick&&<button type="button" className="hub-ask" style={{left:pick.x,top:pick.y}} onMouseDown={e=>e.preventDefault()} onClick={askAI}><Icon name="stars" className="lead"/>AI에게 물어보기</button>}
 </div>;
}

/* 가벼운 마크다운: **굵게**, '- ' 목록, 빈 줄 = 문단 */
function Inline({text}:{text:string}){return <>{text.split(/(\*\*[^*]+\*\*)/g).map((t,i)=>t.startsWith('**')&&t.endsWith('**')?<strong key={i}>{t.slice(2,-2)}</strong>:<span key={i}>{t}</span>)}</>}
function Md({text}:{text:string}){
 return <>{text.split(/\n{2,}/).map((block,i)=>{const lines=block.split('\n');return lines.every(l=>l.startsWith('- '))?<ul key={i}>{lines.map((l,k)=><li key={k}><Inline text={l.slice(2)}/></li>)}</ul>:<p key={i}>{lines.map((l,k)=><span key={k}>{k>0&&<br/>}<Inline text={l}/></span>)}</p>})}</>;
}

function AiThread({lesson,entry,draft,setDraft,inputRef}:{lesson:string;entry?:Entry;draft:string;setDraft:(s:string)=>void;inputRef:Ref<HTMLTextAreaElement>}){
 const log=useRef<HTMLDivElement>(null),msgs=entry?.messages??[];
 const[stream,setStream]=useState<{id:string;text:string;waiting:boolean;sig:{stopped:boolean}}|null>(null);
 const[variants,setVariants]=useState<Record<string,number>>({}),[copied,setCopied]=useState<number|null>(null);
 const live=stream&&stream.id===entry?.id?stream:null;
 useEffect(()=>{const el=log.current;if(el)el.scrollTop=el.scrollHeight},[msgs.length,live?.text,live?.waiting]);
 const respond=async(id:string,q:string,variant:number)=>{
  const r=replyTo(q,lesson,variant),sig={stopped:false};
  setStream({id,text:'',waiting:true,sig});
  const text=await streamText(r.text,t=>setStream(s=>s&&s.sig===sig?{...s,text:t,waiting:false}:s),sig);
  appendMessage(id,{role:'assistant',text:text||'답변을 멈췄어요.',at:new Date().toISOString(),sources:sig.stopped?[]:r.sources,followUps:sig.stopped?[]:r.followUps});
  setStream(s=>s&&s.sig===sig?null:s);
 };
 const send=(override?:string)=>{const q=(override??draft).trim();if(!q||stream)return;if(override===undefined)setDraft('');const id=askInThread(lesson,q);void respond(id,q,0)};
 const again=()=>{if(!entry||stream)return;const lastUser=[...msgs].reverse().find(m=>m.role==='user');if(!lastUser)return;const v=(variants[entry.id]??0)+1;setVariants(x=>({...x,[entry.id]:v}));dropLastReply(entry.id);void respond(entry.id,lastUser.text,v)};
 const copy=async(i:number,text:string)=>{try{await navigator.clipboard.writeText(text.replace(/\*\*/g,''));setCopied(i);setTimeout(()=>setCopied(c=>c===i?null:c),1500)}catch{/* 복사를 막은 환경이면 조용히 넘어가요 */}};
 const lastAssistant=msgs.map(m=>m.role).lastIndexOf('assistant');
 const empty=!msgs.length&&!live;
 return <div className="hub-ai chat">
  <div ref={log} className="chat-log" aria-live="polite">
   {empty?<div className="chat-empty"><strong>무엇이 궁금하세요?</strong><div className="chat-starters">{starterQuestions(lesson,3).map(q=><button key={q} type="button" onClick={()=>send(q)}><span>{q}</span><Icon name="arrow-up"/></button>)}</div></div>
   :<>{msgs.map((m,i)=>m.role==='user'
     ?<div key={i} className="chat-msg is-user"><div className="chat-bubble">{m.text}</div></div>
     :<div key={i} className="chat-msg is-ai"><div className="chat-content">
       <div className="chat-md"><Md text={m.text}/></div>
       {!!m.sources?.length&&<p className="chat-sources">참고 · {m.sources.join(', ')}</p>}
       <div className="chat-actions">
        <button type="button" className="hub-icon" aria-label={copied===i?'복사했어요':'답변 복사'} data-tip={copied===i?'복사했어요':'복사'} data-tip-pos="bottom" onClick={()=>copy(i,m.text)}><Icon name={copied===i?'check2':'copy'}/></button>
        {i===lastAssistant&&!live&&<button type="button" className="hub-icon" aria-label="다시 답하기" data-tip="다시 답하기" data-tip-pos="bottom" onClick={again}><Icon name="arrow-repeat"/></button>}
       </div>
       {i===msgs.length-1&&!live&&!!m.followUps?.length&&<div className="chat-follow">{m.followUps.map(q=><button key={q} type="button" onClick={()=>send(q)}>{q}</button>)}</div>}
      </div></div>)}
    {live&&<div className="chat-msg is-ai"><div className="chat-content">{live.waiting?<span className="chat-typing" aria-label="답변을 쓰는 중"><i/><i/><i/></span>:<div className="chat-md is-streaming"><Md text={live.text}/></div>}</div></div>}</>}
  </div>
  <form className="chat-composer" onSubmit={e=>{e.preventDefault();send()}}>
   <textarea ref={inputRef} rows={1} aria-label="AI에게 질문" placeholder="무엇이든 물어보세요" value={draft} onChange={e=>setDraft(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();send()}}}/>
   {live?<button type="button" className="chat-send is-stop" aria-label="답변 멈추기" onClick={()=>{live.sig.stopped=true}}><Icon name="stop"/></button>
    :<button type="submit" className="chat-send" aria-label="보내기" disabled={!draft.trim()}><Icon name="arrow-up"/></button>}
  </form>
 </div>;
}

function History({lesson,kind,query,setQuery,searchRef,current,primary,onOpen,onBack}:{lesson:string;kind:HubKind;query:string;setQuery:(q:string)=>void;searchRef:Ref<HTMLInputElement>;current:string|null;primary:Primary;onOpen:(id:string)=>void;onBack:()=>void}){
 const book=useNotebook();
 const[naming,setNaming]=useState<string|null>(null),[name,setName]=useState(''),[closed,setClosed]=useState<Record<string,boolean>>({}),[menu,setMenu]=useState<string|null>(null),[over,setOver]=useState<string|null>(null);
 const fallback=kind==='ai'?'새 대화':'새 메모';
 const rows:Row[]=[
  ...(kind==='memo'&&primary.value.trim()?[{id:primaryId(lesson),title:entryTitle(primary.value,'기본 메모'),preview:entryPreview(primary.value),updated:primary.updated,primary:true}]:[]),
  ...book.entries.filter(e=>e.lesson===lesson&&e.kind===kind&&(e.text.trim()||e.messages?.length)).map(e=>({id:e.id,title:entryTitle(e.text,fallback),preview:kind==='ai'?`질문 ${e.messages?.length??0}개`:entryPreview(e.text),updated:e.updated})),
 ].sort((a,b)=>(b.updated?Date.parse(b.updated):0)-(a.updated?Date.parse(a.updated):0));
 const folders=book.folders.filter(f=>f.lesson===lesson&&f.kind===kind);
 const q=query.trim().toLowerCase();
 const fullText=(r:Row)=>r.primary?primary.value:(book.entries.find(e=>e.id===r.id)?.messages?.map(m=>m.text).join(' ')??'')+' '+(book.entries.find(e=>e.id===r.id)?.text??'');
 const found=q?rows.filter(r=>(r.title+' '+fullText(r)).toLowerCase().includes(q)):rows;
 const folderOf=(id:string)=>{const f=book.assign[id];return f&&folders.some(x=>x.id===f)?f:null};
 const inFolder=(fid:string|null)=>found.filter(r=>folderOf(r.id)===fid);
 const startFolder=()=>{setName('');setNaming('new')};
 const saveFolder=()=>{if(naming==='new'){if(name.trim())addFolder(lesson,kind,name)}else if(naming)renameFolder(naming,name);setNaming(null)};
 const drop=(fid:string|null)=>(e:DragEvent)=>{e.preventDefault();const id=e.dataTransfer.getData('text/x-semilab-entry');if(id)moveToFolder(id,fid);setOver(null)};
 const dragOver=(fid:string)=>(e:DragEvent)=>{if(e.dataTransfer.types.includes('text/x-semilab-entry')){e.preventDefault();setOver(fid)}};
 useEffect(()=>{if(!menu)return;const close=(e:PointerEvent)=>{if(!(e.target as HTMLElement).closest?.('.hub-row-menu,.hub-more'))setMenu(null)};const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenu(null)};document.addEventListener('pointerdown',close);document.addEventListener('keydown',key);return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',key)}},[menu]);

 const item=(r:Row)=><li key={r.id} className="hub-row" draggable onDragStart={e=>{e.dataTransfer.setData('text/x-semilab-entry',r.id);e.dataTransfer.effectAllowed='move'}} data-current={r.id===current||undefined}>
  <button type="button" className="hub-row-main" onClick={()=>onOpen(r.id)}><strong>{r.title}</strong><span><time dateTime={r.updated||undefined}>{relTime(r.updated)}</time>{r.preview&&<> · {r.preview}</>}</span></button>
  <button type="button" className="hub-icon hub-more" aria-label={`${r.title} 더 보기`} aria-expanded={menu===r.id} onClick={()=>setMenu(m=>m===r.id?null:r.id)}><Icon name="three-dots"/></button>
  {menu===r.id&&<div className="hub-row-menu" role="menu">
   <span className="hub-menu-label">폴더로 옮기기</span>
   {folders.length?folders.map(f=><button key={f.id} type="button" role="menuitem" aria-current={book.assign[r.id]===f.id||undefined} onClick={()=>{moveToFolder(r.id,f.id);setMenu(null)}}><Icon name="folder" className="lead"/>{f.name}</button>):<button type="button" role="menuitem" onClick={()=>{setMenu(null);startFolder()}}><Icon name="folder-plus" className="lead"/>새 폴더 만들기</button>}
   {book.assign[r.id]&&<button type="button" role="menuitem" onClick={()=>{moveToFolder(r.id,null);setMenu(null)}}><Icon name="x-lg" className="lead"/>폴더에서 빼기</button>}
   {!r.primary&&<><hr/><button type="button" role="menuitem" className="hub-danger" onClick={()=>{deleteEntry(r.id);setMenu(null)}}><Icon name="trash3" className="lead"/>삭제</button></>}
  </div>}
 </li>;

 const loose=inFolder(null);
 return <div className="hub-history">
  <div className="hub-history-head">
   <button type="button" className="hub-icon" aria-label="돌아가기" data-tip="돌아가기" data-tip-pos="bottom" onClick={onBack}><Icon name="chevron-left"/></button>
   <strong>{kind==='ai'?'이전 대화':'이전 메모'}</strong>
   <button type="button" className="hub-icon" aria-label="새 폴더" data-tip="새 폴더" data-tip-pos="bottom" onClick={startFolder}><Icon name="folder-plus"/></button>
  </div>
  <label className="hub-search"><Icon name="search"/><input ref={searchRef} type="search" aria-label={kind==='ai'?'대화 검색':'메모 검색'} placeholder="검색" value={query} onChange={e=>setQuery(e.target.value)}/></label>
  <div className="hub-list">
   {naming==='new'&&<div className="hub-folder-name"><Icon name="folder"/><input autoFocus aria-label="새 폴더 이름" placeholder="폴더 이름" value={name} maxLength={30} onChange={e=>setName(e.target.value)} onBlur={saveFolder} onKeyDown={e=>{if(e.key==='Enter')saveFolder();else if(e.key==='Escape')setNaming(null)}}/></div>}
   {!q&&folders.map(f=>{const list=inFolder(f.id),isOpen=!closed[f.id];return <section key={f.id} className="hub-folder" data-over={over===f.id||undefined} onDragOver={dragOver(f.id)} onDragLeave={()=>setOver(null)} onDrop={drop(f.id)}>
    <div className="hub-folder-head">{naming===f.id
     ?<div className="hub-folder-name"><Icon name="folder"/><input autoFocus aria-label="폴더 이름" value={name} maxLength={30} onChange={e=>setName(e.target.value)} onBlur={saveFolder} onKeyDown={e=>{if(e.key==='Enter')saveFolder();else if(e.key==='Escape')setNaming(null)}}/></div>
     :<button type="button" className="hub-folder-toggle" aria-expanded={isOpen} onClick={()=>setClosed(c=>({...c,[f.id]:isOpen}))} onDoubleClick={()=>{setName(f.name);setNaming(f.id)}}><Icon name="chevron-down" className="hub-chevron"/><Icon name="folder"/><span>{f.name}</span><small>{list.length||''}</small></button>}
     <button type="button" className="hub-icon hub-folder-delete" aria-label={`${f.name} 폴더 삭제`} data-tip="폴더 삭제 · 안의 항목은 남아요" data-tip-pos="left" onClick={()=>deleteFolder(f.id)}><Icon name="trash3"/></button>
    </div>
    {isOpen&&(list.length?<ul>{list.map(item)}</ul>:<p className="hub-folder-empty">여기로 끌어다 놓아 묶어 보세요</p>)}
   </section>})}
   {found.length===0?<p className="hub-empty">{q?'일치하는 항목이 없어요':kind==='ai'?'아직 대화가 없어요':'아직 메모가 없어요'}</p>
    :(q?<ul>{found.map(item)}</ul>:loose.length>0&&<ul className="hub-loose" data-over={over==='loose'||undefined} onDragOver={dragOver('loose')} onDragLeave={()=>setOver(null)} onDrop={drop(null)}>{loose.map(item)}</ul>)}
  </div>
 </div>;
}
