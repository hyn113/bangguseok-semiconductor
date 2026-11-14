import {useEffect,useRef,useState} from 'react';
import {Icon} from './Icon';

/* 학습 화면 왼쪽 위 '다른 학습으로 이동'
   드롭다운으로 같은 분야의 학습을 골라요. 8대 공정은 1~8공정 전체를 보여주고, 아직 없는 공정은 '준비 중'으로 흐리게 둬요. */
export type NavLesson='wafer'|'oxidation'|'photo'|'rie'|'gown'|'ffu'|'circuit'|'mosfet'|'gowning';
type Item={id:NavLesson|null;name:string;no?:number};
const processes:Item[]=[{no:1,id:'wafer',name:'웨이퍼 제조'},{no:2,id:'oxidation',name:'산화'},{no:3,id:null,name:'포토'},{no:4,id:'rie',name:'식각'},{no:5,id:null,name:'증착 · 이온주입'},{no:6,id:null,name:'금속 배선'},{no:7,id:null,name:'EDS'},{no:8,id:null,name:'패키징'}];
const equipment:Item[]=[{id:'ffu',name:'FFU'},{id:'rie',name:'RIE 식각'}];
const design:Item[]=[{id:'circuit',name:'전기 · 논리'},{id:'mosfet',name:'MOSFET'}];
export type NavArea='8대 공정'|'장비'|'설계';

export function LessonNav({current,area,onSwitch}:{current:NavLesson;area:NavArea;onSwitch?:(id:NavLesson)=>void}){
 const[open,setOpen]=useState(false),root=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!open)return;const down=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setOpen(false)};const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);root.current?.querySelector<HTMLButtonElement>('.lesson-nav-btn')?.focus()}};document.addEventListener('pointerdown',down);document.addEventListener('keydown',key);return()=>{document.removeEventListener('pointerdown',down);document.removeEventListener('keydown',key)}},[open]);
 if(!onSwitch)return null;
 const list=area==='8대 공정'?processes:area==='장비'?equipment:design;
 const label=(p:Item)=>p.no?`제${p.no}공정 · ${p.name}`:p.name;
 const cur=list.find(p=>p.id===current);
 return <div ref={root} className="lesson-nav">
  <button type="button" className="lesson-nav-btn" aria-haspopup="listbox" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span className="lesson-nav-label">{area}</span><b>{cur?label(cur):'학습 선택'}</b><Icon name="chevron-down" className="lesson-nav-chev"/></button>
  {open&&<ul className="lesson-nav-menu" role="listbox" aria-label={`${area} 학습`}>{list.map(p=><li key={label(p)} role="option" aria-selected={p.id===current} aria-disabled={!p.id||undefined}><button type="button" disabled={!p.id} onClick={()=>{setOpen(false);if(p.id&&p.id!==current)onSwitch(p.id)}}><span>{label(p)}</span>{!p.id&&<small>준비 중</small>}{p.id===current&&<Icon name="check2"/>}</button></li>)}</ul>}
 </div>;
}

/* 대표 관련 기업 — '이 학습에 대해'처럼 접고 펴는 항목 */
export type Company={name:string;role:string};
export const lessonCompanies:Record<string,Company[]>={
 wafer:[{name:'SK실트론',role:'실리콘 웨이퍼 제조 · 한국'},{name:'신에츠화학',role:'실리콘 웨이퍼 제조 · 일본'},{name:'SUMCO',role:'실리콘 웨이퍼 제조 · 일본'},{name:'글로벌웨이퍼스',role:'실리콘 웨이퍼 제조 · 대만'},{name:'실트로닉',role:'실리콘 웨이퍼 제조 · 독일'}],
 oxidation:[{name:'도쿄일렉트론(TEL)',role:'산화 · 확산 퍼니스 장비 · 일본'},{name:'고쿠사이 일렉트릭',role:'배치형 열처리 장비 · 일본'},{name:'ASM 인터내셔널',role:'퍼니스 · 증착 장비 · 네덜란드'}],
 photo:[{name:'ASML',role:'노광 장비 · 네덜란드'},{name:'니콘 · 캐논',role:'노광 장비 · 일본'},{name:'도쿄일렉트론(TEL)',role:'PR 도포 · 현상 트랙 장비 · 일본'},{name:'JSR · 도쿄오카공업(TOK)',role:'포토레지스트 · 일본'},{name:'동진쎄미켐',role:'포토레지스트 · 한국'}],
 ffu:[{name:'Camfil',role:'FFU · 공기 필터 · 스웨덴'},{name:'신성이엔지',role:'FFU · 클린룸 설비 · 한국'},{name:'AAF 인터내셔널',role:'공기 필터 · 미국'}],
 rie:[{name:'램리서치(Lam Research)',role:'식각 장비 · 미국'},{name:'도쿄일렉트론(TEL)',role:'식각 장비 · 일본'},{name:'어플라이드 머티어리얼즈',role:'식각 · 증착 장비 · 미국'},{name:'히타치 하이테크',role:'식각 장비 · 일본'},{name:'옥스퍼드 인스트루먼트',role:'연구용 플라즈마 식각 장비 · 영국'}],
 mosfet:[{name:'삼성전자',role:'메모리 · 파운드리 · 한국'},{name:'SK하이닉스',role:'메모리 · 한국'},{name:'TSMC',role:'파운드리 · 대만'},{name:'인텔',role:'프로세서 설계 · 제조 · 미국'},{name:'시놉시스 · 케이던스',role:'반도체 설계 소프트웨어(EDA) · 미국'}],
 circuit:[{name:'텍사스 인스트루먼트(TI)',role:'논리 IC · 아날로그 칩 · 미국'},{name:'르네사스',role:'마이크로컨트롤러 · 일본'},{name:'인피니언',role:'전력 반도체 · 마이크로컨트롤러 · 독일'},{name:'Arm',role:'프로세서 설계 · 영국'}],
};
export function LessonCompanies({id}:{id:string}){
 const list=lessonCompanies[id];if(!list?.length)return null;
 return <details className="glb-about lesson-companies"><summary>대표 관련 기업</summary>
  <ul className="lesson-company-list">{list.map(c=><li key={c.name}><Icon name="box" className="lead"/><span><b>{c.name}</b><small>{c.role}</small></span></li>)}</ul>
  <p className="glb-note">학습을 돕기 위한 예시 목록이에요. 순서는 순위와 관계없어요.</p>
 </details>;
}

/* 이전 · 다음 학습으로 넘어가기 (문서 아래 페이지 넘김처럼) — 같은 분야 안에서, 준비된 학습만 */
const titles:Record<NavLesson,string>={wafer:'제1공정 · 웨이퍼 제조',oxidation:'제2공정 · 산화',photo:'제3공정 · 포토',rie:'식각 장비 · RIE',gown:'클린룸 복장 탐색',ffu:'FFU 장비 탐색',circuit:'전기 · 논리 기초',mosfet:'MOSFET 설계 기초',gowning:'클린룸 착의 체험'};
export function LessonPager({current,area,onSwitch}:{current:NavLesson;area:NavArea;onSwitch?:(id:NavLesson)=>void}){
 if(!onSwitch)return null;
 const list=(area==='8대 공정'?processes:area==='장비'?equipment:design).filter(p=>p.id) as {id:NavLesson;name:string;no?:number}[];
 const i=list.findIndex(p=>p.id===current);if(i<0)return null;
 const prev=list[i-1],next=list[i+1],unit=area==='8대 공정'?'공정':area==='장비'?'장비':'학습';
 const label=(p:{id:NavLesson;no?:number})=>area==='8대 공정'&&p.no?`제${p.no}공정 · ${p.id==='rie'?'식각':titles[p.id].split('·').pop()!.trim()}`:titles[p.id];
 if(!prev&&!next)return null;
 return <nav className="lesson-pager" aria-label={`이전 · 다음 ${unit}`}>
  {prev?<button type="button" className="is-prev" onClick={()=>onSwitch(prev.id)}><small><Icon name="chevron-left"/>이전 {unit}</small><b>{label(prev)}</b></button>:<span/>}
  {next?<button type="button" className="is-next" onClick={()=>onSwitch(next.id)}><small>다음 {unit}<Icon name="chevron-right"/></small><b>{label(next)}</b></button>:<span/>}
 </nav>;
}

/* 3D 모형이 없는 학습(포토)의 '기계 설명' — 지금 화면에 보이는 항목만 골라 같은 모양의 카드로 보여줘요 */
export type SimplePart={name:string;en?:string;desc:string;specs?:[string,string][]};
export function SimpleParts({parts}:{parts:SimplePart[]}){
 const[sel,setSel]=useState<SimplePart|null>(null),[open,setOpen]=useState(false);
 const cur=sel&&parts.includes(sel)?sel:null;
 return <div className="glb-parts" role="tabpanel">
  <div className="glb-partpick">
   <button type="button" className="glb-partpick-btn" aria-haspopup="listbox" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><Icon name="chevron-right" className="glb-partpick-chev"/><span>{cur?cur.name:'부품 선택'}</span></button>
   {open&&<ul className="glb-partpick-menu" role="listbox" aria-label="부품">{parts.map(pt=><li key={pt.name} role="option" aria-selected={cur===pt}><button type="button" onClick={()=>{setSel(pt);setOpen(false)}}>{pt.name}</button></li>)}</ul>}
  </div>
  {cur?<article className="glb-partcard"><h3>{cur.name}{cur.en&&<small>{cur.en}</small>}</h3>
   {cur.specs&&<dl>{cur.specs.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}
   <h4>핵심 설명</h4><p>{cur.desc}</p></article>
   :<p className="glb-partcard-empty"><Icon name="hand-index" className="lead"/>지금 화면에 보이는 부품을 골라 보세요.</p>}
 </div>;
}
