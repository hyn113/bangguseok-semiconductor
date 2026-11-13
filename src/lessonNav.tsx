import {Icon} from './Icon';

/* 학습 화면 왼쪽 위 '다른 학습으로 이동'
   8대 공정은 1~8 번호로, 장비 · 설계는 이름으로 보여줘요. 아직 없는 공정은 '준비 중'으로 흐리게 둬요. */
export type NavLesson='wafer'|'oxidation'|'photo'|'rie'|'gown'|'ffu'|'circuit'|'mosfet'|'gowning';
type Item={id:NavLesson|null;name:string;no?:number};
const processes:Item[]=[{no:1,id:'wafer',name:'웨이퍼 제조'},{no:2,id:'oxidation',name:'산화'},{no:3,id:'photo',name:'포토'},{no:4,id:'rie',name:'식각'},{no:5,id:null,name:'증착 · 이온주입'},{no:6,id:null,name:'금속 배선'},{no:7,id:null,name:'EDS'},{no:8,id:null,name:'패키징'}];
const equipment:Item[]=[{id:'gown',name:'클린룸 복장'},{id:'ffu',name:'FFU'},{id:'rie',name:'RIE 식각'}];
const design:Item[]=[{id:'circuit',name:'전기 · 논리'},{id:'mosfet',name:'MOSFET'}];
export type NavArea='8대 공정'|'장비'|'설계';

export function LessonNav({current,area,onSwitch}:{current:NavLesson;area:NavArea;onSwitch?:(id:NavLesson)=>void}){
 if(!onSwitch)return null;
 if(area==='8대 공정')return <nav className="lesson-nav is-process" aria-label="8대 공정 이동">
  <span className="lesson-nav-label">8대 공정</span>
  <div className="lesson-nav-steps">{processes.map(p=><button key={p.no} type="button" disabled={!p.id} aria-current={p.id===current?'page':undefined} aria-label={`제${p.no}공정 · ${p.name}${p.id?'':' (준비 중)'}`} data-tip={`${p.no} · ${p.name}${p.id?'':' · 준비 중'}`} data-tip-pos="bottom" onClick={()=>p.id&&p.id!==current&&onSwitch(p.id)}>{p.no}</button>)}</div>
 </nav>;
 const list=area==='장비'?equipment:design;
 return <nav className="lesson-nav" aria-label={`${area} 학습 이동`}>
  <span className="lesson-nav-label">{area}</span>
  <div className="lesson-nav-chips">{list.map(p=><button key={p.name} type="button" aria-current={p.id===current?'page':undefined} onClick={()=>p.id&&p.id!==current&&onSwitch(p.id)}>{p.name}</button>)}</div>
 </nav>;
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
