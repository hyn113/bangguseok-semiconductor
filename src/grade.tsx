import {useEffect,useRef,useState,useSyncExternalStore} from 'react';

/* 등급(명패) — 퀴즈를 모두 맞힌 횟수(성공한 공정 수)에 따라 바뀌어요.
   만점 기록은 recordPass(id)로 남기고, 이 브라우저에만 저장돼요. */
export const grades=[
 {id:'master',name:'마스터 엔지니어',min:100,range:'100개 이상'},
 {id:'chief',name:'수석 설계자',min:71,range:'71~99개'},
 {id:'expert',name:'전문 기술자',min:51,range:'51~70개'},
 {id:'mechanic',name:'메커닉',min:31,range:'31~50개'},
 {id:'technician',name:'테크니션',min:16,range:'16~30개'},
 {id:'novice',name:'입문 지망생',min:0,range:'15개 이하'},
] as const;
export type Grade=typeof grades[number];
export const gradeFor=(count:number):Grade=>grades.find(g=>count>=g.min)??grades[grades.length-1];

const KEY='semilab.passed';
const listeners=new Set<()=>void>();
const readIds=():string[]=>{try{const v=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(v)?v.filter(x=>typeof x==='string'):[]}catch{return []}};
let cache=readIds().length;
/** 퀴즈를 모두 맞혔을 때 한 번 호출 (같은 id는 한 번만 셈) */
export function recordPass(id:string){const ids=readIds();if(ids.includes(id))return;ids.push(id);try{localStorage.setItem(KEY,JSON.stringify(ids))}catch{}cache=ids.length;listeners.forEach(l=>l())}
export function usePassedCount(){return useSyncExternalStore(l=>{listeners.add(l);return()=>{listeners.delete(l)}},()=>cache,()=>cache)}

/** 명패 칩 — 누르면 등급 안내가 열려요 */
export function GradeChip({count}:{count:number}){
 const grade=gradeFor(count),[open,setOpen]=useState(false),[pos,setPos]=useState<{top:number;left:number}|null>(null),root=useRef<HTMLSpanElement>(null);
 const toggle=()=>{const r=root.current?.getBoundingClientRect();if(r){const w=Math.min(352,window.innerWidth-16);setPos({top:r.bottom+8,left:Math.max(8,Math.min(r.left,window.innerWidth-w-8))})}setOpen(o=>!o)};
 useEffect(()=>{if(!open)return;const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);root.current?.querySelector('button')?.focus()}};const down=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setOpen(false)};document.addEventListener('keydown',key);document.addEventListener('pointerdown',down);return()=>{document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',down)}},[open]);
 return <span ref={root} className="grade-wrap">
  <button type="button" className="grade-chip" data-grade={grade.id} aria-expanded={open} aria-label={`등급 ${grade.name}, 등급 안내 보기`} onClick={toggle}>{grade.name}</button>
  {open&&<div className="grade-pop" role="dialog" aria-label="등급 안내" style={pos?{top:pos.top,left:pos.left}:undefined}>
   <div className="grade-pop-head"><strong>등급 안내</strong><span>성공한 공정 {count}개</span></div>
   <table><thead><tr><th scope="col">등급</th><th scope="col">성공한 공정 수</th><th scope="col">명패</th></tr></thead>
    <tbody>{grades.map(g=><tr key={g.id} aria-current={g.id===grade.id?'true':undefined}><td>{g.name}</td><td>{g.range}</td><td><span className="grade-chip is-static" data-grade={g.id}>{g.name}</span></td></tr>)}</tbody></table>
  </div>}
 </span>;
}

/** 프로필 — 이니셜 아바타 · 닉네임 · 명패 */
export function ProfileBadge({name,count}:{name:string;count:number}){
 const shown=name.trim()||'체험 학습자';
 return <div className="profile-badge"><span className="profile-avatar" aria-hidden="true">{Array.from(shown)[0]}</span><b className="profile-name">{shown}</b><GradeChip count={count}/></div>;
}
