import {useEffect,useMemo,useRef,useState} from 'react';
import type {ReactNode,PointerEvent as RPointerEvent,KeyboardEvent as RKeyboardEvent,CSSProperties} from 'react';
import {Icon,type IconName} from './Icon';
import {tiltHandlers} from './tilt';

/* 워크스페이스 — 피그마 파일 목록과 같은 저장 체계.
   모든 기록은 입력하는 즉시 저장되고, 마지막으로 고친 순서대로 보여요. */
export type WsItem={id:string;kind:'file'|'memo'|'progress'|'quiz';title:string;module:string;detail:string;updated?:string|null;icon:IconName;wrong?:number;open:()=>void;remove?:()=>void};
type Filter='recent'|'memo'|'record'|'quiz'|'wrong';
/* 순서: 학습 기록(공부한 학습) · 메모 · 퀴즈(미션 결과) · 최근 항목(전부 시간순) · 오답 모아보기 */
const filters:{id:Filter;label:string;icon:IconName}[]=[
 {id:'record',label:'학습 기록',icon:'journal-text'},
 {id:'memo',label:'메모',icon:'file-earmark-text'},
 {id:'quiz',label:'퀴즈',icon:'trophy'},
 {id:'recent',label:'최근 항목',icon:'clock-history'},
 {id:'wrong',label:'오답 모아보기',icon:'x-circle'},
];
const kindLabel={file:'학습 파일',memo:'메모',progress:'학습하기',quiz:'퀴즈 결과'} as const;
export const relTime=(iso?:string|null)=>{if(!iso)return '';const t=new Date(iso).getTime();if(Number.isNaN(t))return '';const m=Math.round((Date.now()-t)/60000);if(m<1)return '방금';if(m<60)return `${m}분 전`;const h=Math.round(m/60);if(h<24)return `${h}시간 전`;const d=Math.round(h/24);if(d<7)return `${d}일 전`;return new Intl.DateTimeFormat('ko-KR',{month:'long',day:'numeric'}).format(new Date(t))};
/* 왼쪽 목록 너비 — 경계선을 끌어 200~400px로 조절, 이 브라우저에 기억해요 */
const SIDE_MIN=200,SIDE_MAX=400,SIDE_DEF=264,clampSide=(w:number)=>Math.round(Math.min(SIDE_MAX,Math.max(SIDE_MIN,w)));
const readSide=()=>{try{const v=Number(localStorage.getItem('semilab.ws.sideW'));return v?clampSide(v):SIDE_DEF}catch{return SIDE_DEF}};
function SideResizer({width,onChange}:{width:number;onChange:(w:number)=>void}){
 const drag=useRef<{x:number;w:number}|null>(null),[dragging,setDragging]=useState(false);
 const down=(e:RPointerEvent<HTMLDivElement>)=>{if(e.button!==0)return;drag.current={x:e.clientX,w:width};e.currentTarget.setPointerCapture?.(e.pointerId);setDragging(true);document.body.classList.add('is-resizing')};
 const move=(e:RPointerEvent<HTMLDivElement>)=>{const d=drag.current;if(d)onChange(clampSide(d.w+e.clientX-d.x))};
 const up=()=>{drag.current=null;setDragging(false);document.body.classList.remove('is-resizing')};
 const key=(e:RKeyboardEvent<HTMLDivElement>)=>{const st=e.shiftKey?32:16;let n=width;if(e.key==='ArrowLeft')n-=st;else if(e.key==='ArrowRight')n+=st;else if(e.key==='Home')n=SIDE_MIN;else if(e.key==='End')n=SIDE_MAX;else return;e.preventDefault();onChange(clampSide(n))};
 return <div className="panel-resizer ws-resizer" data-dragging={dragging||undefined} role="separator" aria-orientation="vertical" aria-label="목록 너비" aria-valuemin={SIDE_MIN} aria-valuemax={SIDE_MAX} aria-valuenow={width} tabIndex={0} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onKeyDown={key} onDoubleClick={()=>onChange(SIDE_DEF)} title="끌어서 너비 조절 · 두 번 누르면 처음 너비"/>;
}
const readView=():'grid'|'list'=>{try{return localStorage.getItem('semilab.ws.view')==='list'?'list':'grid'}catch{return 'grid'}};

export function Workspace({items,profile,onLearn,onRemove}:{items:WsItem[];profile:ReactNode;onLearn:()=>void;onRemove?:(items:WsItem[])=>void}){
 const[filter,setFilter]=useState<Filter>('record'),[q,setQ]=useState(''),[view,setViewState]=useState(readView);
 const[sideW,setSideWState]=useState(readSide),setSideW=(w:number)=>{setSideWState(w);try{localStorage.setItem('semilab.ws.sideW',String(w))}catch{}};
 const[selecting,setSelecting]=useState(false),[picked,setPicked]=useState<Set<string>>(()=>new Set()),[confirm,setConfirm]=useState<WsItem[]|null>(null),[more,setMore]=useState(false);
 const setView=(v:'grid'|'list')=>{setViewState(v);try{localStorage.setItem('semilab.ws.view',v)}catch{}};
 const sorted=useMemo(()=>[...items].sort((a,b)=>(b.updated?Date.parse(b.updated):0)-(a.updated?Date.parse(a.updated):0)),[items]);
 const match=(f:Filter,i:WsItem)=>(f==='recent'&&i.kind!=='file')||(f==='memo'&&i.kind==='memo')||(f==='record'&&i.kind==='progress')||(f==='quiz'&&i.kind==='quiz')||(f==='wrong'&&!!i.wrong);
 const pass=(i:WsItem)=>match(filter,i);
 const shown=sorted.filter(i=>pass(i)&&(i.title+i.module+i.detail).toLowerCase().includes(q.trim().toLowerCase()));
 const count=(f:Filter)=>sorted.filter(i=>match(f,i)).length;
 const current=filters.find(f=>f.id===filter)!;
 /* 삭제: 개별(카드 휴지통) · 여러 개(선택 모드) · 이 목록 모두 — 항상 한 번 확인해요 */
 const removable=shown.filter(i=>i.remove);
 const pick=(id:string)=>setPicked(p=>{const n=new Set(p);if(n.has(id))n.delete(id);else n.add(id);return n});
 const endSelect=()=>{setSelecting(false);setPicked(new Set())};
 const allPicked=removable.length>0&&removable.every(i=>picked.has(i.id));
 const doRemove=()=>{if(confirm&&onRemove)onRemove(confirm);setConfirm(null);endSelect()};
 useEffect(()=>{endSelect();setMore(false)},[filter]);
 useEffect(()=>{if(!more)return;const close=(e:PointerEvent)=>{if(!(e.target as HTMLElement).closest?.('.ws-more'))setMore(false)};document.addEventListener('pointerdown',close);return()=>document.removeEventListener('pointerdown',close)},[more]);
 useEffect(()=>{if(!confirm&&!selecting)return;const key=(e:KeyboardEvent)=>{if(e.key!=='Escape')return;if(confirm)setConfirm(null);else endSelect()};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key)},[confirm,selecting]);
 const noun=filter==='memo'?'메모':filter==='quiz'||filter==='wrong'?'퀴즈 기록':filter==='record'?'학습 기록':'항목';
 const Check=({i}:{i:WsItem})=>i.remove?<button type="button" className="ws-check" role="checkbox" aria-checked={picked.has(i.id)} aria-label={`${i.title} 선택`} onClick={e=>{e.stopPropagation();if(!selecting)setSelecting(true);pick(i.id)}}><Icon name="check-lg"/></button>:null;
 const Trash=({i}:{i:WsItem})=>i.remove&&!selecting?<button type="button" className="ws-trash" aria-label={`${i.title} 삭제`} data-tip="삭제" data-tip-pos="bottom" onClick={e=>{e.stopPropagation();setConfirm([i])}}><Icon name="trash3"/></button>:null;
 return <div className="ws" style={{'--ws-side':sideW+'px'} as CSSProperties}>
  <aside className="ws-side">
   <SideResizer width={sideW} onChange={setSideW}/>
   <div className="ws-profile">{profile}</div>
   <label className="ws-search"><Icon name="search"/><input aria-label="워크스페이스 검색" placeholder="검색" value={q} onChange={e=>setQ(e.target.value)}/></label>
   <nav className="ws-nav" aria-label="워크스페이스">{filters.map(f=><button key={f.id} type="button" aria-current={filter===f.id?'page':undefined} onClick={()=>setFilter(f.id)}><Icon name={f.icon}/><span>{f.label}</span><small>{count(f.id)||''}</small></button>)}</nav>
   <button type="button" className="ws-learn" onClick={onLearn}><Icon name="boxes" className="lead"/>학습하러 가기</button>
  </aside>
  <main className="ws-main">
   <header className="ws-head" data-selecting={selecting||undefined}>{selecting
    ?<div className="ws-selbar" role="toolbar" aria-label="선택한 항목"><button type="button" className="ws-selbar-close" aria-label="선택 끝내기" data-tip="선택 끝내기" data-tip-pos="bottom" onClick={endSelect}><Icon name="x-lg"/></button><b aria-live="polite">{picked.size?`${picked.size}개 선택됨`:'항목을 골라 주세요'}</b>
     <div className="ws-selbar-actions"><button type="button" className="btn btn--tertiary" disabled={!removable.length} onClick={()=>setPicked(allPicked?new Set():new Set(removable.map(i=>i.id)))}>{allPicked?'선택 해제':'전체 선택'}</button><button type="button" className="btn ws-danger" disabled={!picked.size} onClick={()=>setConfirm(removable.filter(i=>picked.has(i.id)))}><Icon name="trash3" className="lead"/>삭제</button></div></div>
    :<><h1>{current.label}</h1><div className="ws-tools"><span className="ws-sort">마지막 수정 순</span><div className="ws-view" role="group" aria-label="보기 방식"><button type="button" aria-pressed={view==='grid'} data-tip="격자로 보기" data-tip-pos="bottom" aria-label="격자로 보기" onClick={()=>setView('grid')}><Icon name="grid-3x3-gap"/></button><button type="button" aria-pressed={view==='list'} data-tip="목록으로 보기" data-tip-pos="bottom" aria-label="목록으로 보기" onClick={()=>setView('list')}><Icon name="list-ul"/></button></div><div className="ws-more"><button type="button" className="ws-more-btn" aria-label="더 보기" aria-haspopup="menu" aria-expanded={more} data-tip="더 보기" data-tip-pos="bottom" disabled={!removable.length} onClick={()=>setMore(v=>!v)}><Icon name="three-dots"/></button>
     {more&&<div className="ws-more-menu" role="menu"><button type="button" role="menuitem" onClick={()=>{setMore(false);setSelecting(true)}}><Icon name="check2-circle" className="lead"/>여러 개 선택</button><hr/><button type="button" role="menuitem" className="is-danger" onClick={()=>{setMore(false);setConfirm(removable)}}><Icon name="trash3" className="lead"/>{noun} 모두 삭제</button></div>}</div></div></>}</header>
   {shown.length===0?<div className="ws-empty"><Icon name="folder2" size={32}/><h2>{q?'일치하는 항목이 없어요':filter==='wrong'?'틀린 문제가 없어요':filter==='quiz'?'아직 푼 퀴즈가 없어요':'아직 저장된 항목이 없어요'}</h2><p>학습 화면에서 메모를 쓰거나 퀴즈를 풀면 여기에 자동으로 저장돼요.</p><button type="button" className="ws-learn" onClick={onLearn}>학습하러 가기</button></div>:
    view==='grid'?<ul className="ws-grid" data-selecting={selecting||undefined}>{shown.map(i=><li key={i.id} className="ws-cell" data-picked={picked.has(i.id)||undefined}><Check i={i}/><Trash i={i}/><button type="button" className="ws-card tilt-card" aria-pressed={selecting&&i.remove?picked.has(i.id):undefined} onClick={()=>selecting?(i.remove&&pick(i.id)):i.open()} {...tiltHandlers(3)}><span className="ws-thumb" data-kind={i.kind}><Icon name={i.icon} size={28}/>{i.kind==='memo'&&i.detail&&<span className="ws-thumb-text">{i.detail}</span>}</span><span className="ws-card-body"><strong>{i.title}</strong><time dateTime={i.updated||undefined}>{i.updated?relTime(i.updated)+(i.kind==='file'?' 열어 봄':' 수정'):'저장 기록 없음'}</time></span></button></li>)}</ul>:
    <div className="ws-list" role="table" aria-label={current.label}><div className="ws-row ws-row-head" role="row"><span role="columnheader">이름</span><span role="columnheader">종류</span><span role="columnheader">마지막 수정</span></div>{shown.map(i=><div key={i.id} className="ws-row-wrap" data-picked={picked.has(i.id)||undefined}><Check i={i}/><button type="button" className="ws-row" role="row" onClick={()=>selecting?(i.remove&&pick(i.id)):i.open()}><span role="cell" className="ws-row-name"><span className="ws-row-icon" data-kind={i.kind}><Icon name={i.icon}/></span><strong>{i.title}</strong></span><span role="cell">{kindLabel[i.kind]}{i.wrong?` · 오답 ${i.wrong}개`:''}</span><span role="cell">{relTime(i.updated)}</span></button><Trash i={i}/></div>)}</div>}
  </main>
  {confirm&&<div className="ws-confirm-scrim" onClick={e=>{if(e.target===e.currentTarget)setConfirm(null)}}><div className="ws-confirm" role="alertdialog" aria-modal="true" aria-labelledby="ws-confirm-title" aria-describedby="ws-confirm-desc">
   <span className="ws-confirm-icon" aria-hidden="true"><Icon name="trash3" size={20}/></span>
   <h2 id="ws-confirm-title">{confirm.length===1?`‘${confirm[0].title}’을(를) 삭제할까요?`:`${noun} ${confirm.length}개를 삭제할까요?`}</h2>
   <p id="ws-confirm-desc">삭제하면 되돌릴 수 없어요.{confirm.some(i=>i.kind==='progress')?' 학습 기록을 지워도 학습 화면과 메모는 그대로예요.':''}</p>
   <div className="ws-confirm-actions"><button type="button" className="btn btn--secondary" autoFocus onClick={()=>setConfirm(null)}>취소</button><button type="button" className="btn ws-danger" onClick={doRemove}>삭제</button></div>
  </div></div>}
 </div>;
}
