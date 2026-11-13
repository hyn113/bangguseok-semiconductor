import {useEffect,useRef,useState} from 'react';
import {CleanroomEnvironment} from './CleanroomEnvironment';
import './welcome.css';
import {ConceptPanel} from './ConceptPanel';
import {cleanroomConcepts} from './conceptTopics';
import {Icon} from './Icon';
export type Visitor={organization:string;nickname:string};
const reduced=()=>typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const points=[
 {title:'천장 속 공기 관리',label:'FFU',step:'천장 FFU',text:'천장의 FFU는 팬과 필터를 하나로 묶은 장치예요. 공기를 아래로 보내면서 입자를 걸러 내요.'},
 {title:'복장과 오염 관리',label:'클린룸 복장',step:'클린룸 복장',text:'사람은 클린룸에서 가장 큰 오염원 중 하나예요. 방진복은 몸에서 나오는 입자가 공간으로 퍼지지 않게 막아요.'},
 {title:'실습을 시작하기 전에',label:'학습 공간',step:'실습 공간',text:'이제 장비를 직접 돌려 보고 분해하며 개념을 익혀 볼 차례예요. 메모와 퀴즈 기록은 이 브라우저에 저장돼요.'}
];
export function Welcome({visitor,onVisitor,onContinue,startAt='welcome',menu}:{visitor:Visitor;onVisitor:(v:Visitor)=>void;onContinue:()=>void;startAt?:'welcome'|'tour';menu?:import('react').ReactNode}){
 const [screen,setScreen]=useState<'welcome'|'choice'|'tour'>(startAt),[playing,setPlaying]=useState(()=>!reduced()),[motion,setMotion]=useState(()=>!reduced()),[reset,setReset]=useState(0),[point,setPoint]=useState(0),[seen,setSeen]=useState<number[]>([]);
 const [studyNote,setStudyNote]=useState(''),[leavePending,setLeavePending]=useState(false),[nicknameError,setNicknameError]=useState(false);
 const nicknameInput=useRef<HTMLInputElement>(null);
 /* 클린룸 학습 패널: 접고 펴기 + 왼쪽 가장자리로 너비 조절(320~520px, 기억) */
 const[tourOpen,setTourOpen]=useState(true),[tourW,setTourW]=useState(()=>{try{const n=Number(localStorage.getItem('semilab.tour.w'));return n>=320&&n<=520?n:368}catch{return 368}});
 const tourDrag=useRef<{x:number;w:number}|null>(null);
 const fitTour=(w:number)=>Math.round(Math.max(320,Math.min(520,(typeof window!=='undefined'?window.innerWidth:1440)-120,w))/4)*4;
 const saveTour=(w:number)=>{setTourW(w);try{localStorage.setItem('semilab.tour.w',String(w))}catch{}};
 const noteInput=useRef<HTMLTextAreaElement>(null),noteSection=useRef<HTMLDetailsElement>(null);
 const showNotes=()=>{if(noteSection.current)noteSection.current.open=true;noteInput.current?.focus()};
 const leaveTrigger=useRef<HTMLElement|null>(null);
 const requestContinue=()=>{if(studyNote.length){leaveTrigger.current=document.activeElement instanceof HTMLElement?document.activeElement:null;setLeavePending(true)}else onContinue()};
 const cancelLeave=()=>{setLeavePending(false);leaveTrigger.current?.focus()};
 const leaveWarning=useRef<HTMLElement>(null);
 useEffect(()=>{if(leavePending){leaveWarning.current?.focus({preventScroll:true});leaveWarning.current?.scrollIntoView?.({block:'start'})}},[leavePending]);
 const heading=useRef<HTMLHeadingElement>(null);
 useEffect(()=>{heading.current?.focus({preventScroll:true})},[screen]);
 useEffect(()=>{if(typeof window.matchMedia!=='function')return;const media=window.matchMedia('(prefers-reduced-motion: reduce)');const changed=()=>{setMotion(!media.matches);if(media.matches)setPlaying(false)};media.addEventListener?.('change',changed);return()=>media.removeEventListener?.('change',changed)},[]);
 const tour=()=>{setPoint(0);setSeen([]);setReset(r=>r+1);setScreen('tour')};
 const select=(i:number)=>{setPoint(i);setSeen(v=>v.includes(i)?v:[...v,i])};
 const topHeader=<header className="entry-top"><span className="entry-brand"><span className="entry-mvp" title="최소 기능 제품 버전">MVP</span><span className="entry-wordmark">THE FIRST FAB <i>방구석 반도체</i></span></span><div><span className="entry-prototype">시제품 · 계정 인증 없음</span><button onClick={()=>setPlaying(p=>!p)} aria-pressed={!playing}>{playing?'배경 일시정지':'배경 재생'}</button>{menu}</div></header>;
 return <main className={'entry-page entry-'+screen}>
  <CleanroomEnvironment tour={screen==='tour'} playing={playing} motion={motion} reset={reset}/>
  <div className="entry-vignette"/>
  {screen==='tour'?null:topHeader}
  {leavePending&&<section ref={leaveWarning} tabIndex={-1} className="tour-leave-note" role="status"><strong>학습 메모를 복사해 두셨나요?</strong><p>실습 선택으로 이동하면 이 화면의 메모가 사라져요. 시작 방법 선택으로 돌아가거나 학습 지점을 바꿀 때는 유지됩니다.</p><div><button onClick={cancelLeave}>여기서 계속하기</button><button onClick={onContinue}>메모를 남기지 않고 실습 선택</button></div></section>}
  {screen==='welcome'?<section className="welcome-card"><div className="guide-portrait"><img src="/entry-guide.png" alt="흰 후드와 마스크를 착용한 가상의 연구원 캐릭터"/></div><div className="welcome-copy"><h1 ref={heading} tabIndex={-1}>방구석 반도체</h1><p className="entry-english">: The First Fab</p><p className="entry-intro">처음 만나는 반도체의 세계.<br/>둘러보고, 만져보고, 나만의 발견을 시작하세요.</p><form noValidate onSubmit={e=>{e.preventDefault();if(!visitor.nickname.trim()){setNicknameError(true);nicknameInput.current?.focus();return}setScreen('choice')}}><label>소속 <small>선택</small><input autoComplete="off" maxLength={60} placeholder="입력하지 않아도 시작할 수 있어요" value={visitor.organization} onChange={e=>onVisitor({...visitor,organization:e.target.value})}/></label><label>닉네임 <small className="entry-required">필수</small><input ref={nicknameInput} autoComplete="off" maxLength={30} required aria-required="true" aria-invalid={nicknameError} aria-describedby={nicknameError?'nickname-error':undefined} placeholder="어떻게 불러드릴까요?" value={visitor.nickname} onChange={e=>{onVisitor({...visitor,nickname:e.target.value});if(e.target.value.trim())setNicknameError(false)}}/></label>{nicknameError&&<p id="nickname-error" className="entry-field-error" role="alert">닉네임을 입력해야 시작할 수 있어요.</p>}<p className="entry-privacy">계정 인증 없는 시제품입니다. 입력 내용은 현재 열린 화면에서만 사용하며 저장·전송하지 않습니다.</p><button className="entry-start" type="submit">시작하기 <span>→</span></button></form></div></section>:
  screen==='choice'?<section className="entry-choice-card"><h1 ref={heading} tabIndex={-1}>{visitor.nickname.trim()?`${visitor.nickname.trim()}님, `:''}어디서 시작할까요?</h1><p>클린룸을 가볍게 둘러보거나,<br/>관심 있는 실습으로 바로 이동할 수 있어요.</p><div className="entry-options"><button onClick={tour}><strong>클린룸 학습하기</strong><small>1인칭 공간 탐색 · 세 가지 기초 개념</small><b>둘러보기 →</b></button><button onClick={requestContinue}><strong>바로 실습 선택</strong><small>FFU · 클린룸 복장 · 잉곳과 웨이퍼</small><b>실습으로 →</b></button></div><button className="entry-back" onClick={()=>setScreen('welcome')}>← 처음 화면으로</button></section>:
  <>{menu}<header className="tour-head"><button type="button" className="tour-back" data-tip="시작 방법 선택" data-tip-pos="bottom" onClick={()=>setScreen('choice')}><Icon name="chevron-left"/><span className="sr-only">시작 방법 선택</span></button><span className="tour-title">클린룸 공부하기</span></header>
   <nav className="tour-steps" aria-label="클린룸 학습 지점">{points.map((p,i)=><button key={p.step} type="button" aria-current={point===i?'step':undefined} data-seen={seen.includes(i)||undefined} onClick={()=>select(i)}><span className="tour-step-num">{seen.includes(i)&&point!==i?<Icon name="check2"/>:i+1}</span>{p.step}</button>)}</nav>
   {!tourOpen&&<button type="button" className="tour-chip" data-menu={menu?true:undefined} aria-expanded="false" aria-controls="tour-panel" data-tip="패널 펼치기" data-tip-pos="bottom" onClick={()=>setTourOpen(true)}><Icon name="layout-sidebar-reverse"/><span>클린룸 학습</span></button>}
   <aside id="tour-panel" className="tour-panel" hidden={!tourOpen} data-menu={menu?true:undefined} aria-label="클린룸 학습" style={{width:fitTour(tourW)}}>
    <div className="tour-resizer" role="separator" aria-orientation="vertical" aria-label="패널 너비" aria-valuemin={320} aria-valuemax={520} aria-valuenow={fitTour(tourW)} tabIndex={0} title="끌어서 너비 조절 · 두 번 누르면 기본 너비"
     onPointerDown={e=>{if(e.button!==0)return;tourDrag.current={x:e.clientX,w:fitTour(tourW)};e.currentTarget.setPointerCapture?.(e.pointerId);e.currentTarget.dataset.dragging='true'}}
     onPointerMove={e=>{const d=tourDrag.current;if(d)setTourW(fitTour(d.w+(d.x-e.clientX)))}}
     onPointerUp={e=>{if(tourDrag.current){tourDrag.current=null;delete e.currentTarget.dataset.dragging;saveTour(fitTour(tourW))}}}
     onDoubleClick={()=>saveTour(368)}
     onKeyDown={e=>{const st=e.shiftKey?32:16;if(e.key==='ArrowLeft'){e.preventDefault();saveTour(fitTour(tourW+st))}else if(e.key==='ArrowRight'){e.preventDefault();saveTour(fitTour(tourW-st))}}}/>
    <div className="tour-panel-head"><span>클린룸 학습</span><button type="button" className="tour-collapse" aria-label="패널 접기" aria-expanded="true" aria-controls="tour-panel" data-tip="패널 접기" data-tip-pos="left" onClick={()=>setTourOpen(false)}><Icon name="layout-sidebar-reverse"/></button></div>
    <div className="tour-panel-scroll">
    <span className="tour-count">{point+1} / {points.length} · {points[point].label}</span>
    <h1 ref={heading} tabIndex={-1}>{points[point].title}</h1>
    <p className="tour-text">{points[point].text}</p>
    <div className="tour-actions"><button type="button" className="tour-primary" onClick={requestContinue}>실습 선택하기<Icon name="arrow-right" className="trail"/></button>{point<points.length-1&&<button type="button" className="tour-secondary" onClick={()=>select(point+1)}>다음 지점</button>}</div>
    <div className="tour-inline-study shell-page"><ConceptPanel topics={cleanroomConcepts} currentId={point===0?'cleanroom-airflow':'cleanroom-contamination'} contextLabel="클린룸 둘러보기 개념" onNotes={showNotes}/>
    <details ref={noteSection} className="tour-study-notes"><summary><Icon name="journal-text"/>내 학습 메모<Icon name="chevron-down" className="tour-notes-chevron"/></summary><textarea ref={noteInput} id="tour-study-note" aria-label="둘러보며 알게 된 점" aria-describedby="tour-note-help" value={studyNote} onChange={e=>setStudyNote(e.target.value)} maxLength={4000} rows={5} placeholder="메모"/><p id="tour-note-help">이 화면에서만 유지돼요. 실습 선택으로 나가면 사라져요.</p></details></div>
   </div></aside>
   <div className="tour-dock" role="toolbar" aria-label="장면 도구" style={{left:`calc((100vw - ${tourOpen?fitTour(tourW)+12:0}px) / 2)`}}><button type="button" aria-pressed={!playing} aria-label={playing?'배경 일시정지':'배경 재생'} data-tip={playing?'배경 일시정지':'배경 재생'} data-tip-pos="top" onClick={()=>setPlaying(p=>!p)}><Icon name={playing?'pause-fill':'play-fill'} size={20}/></button><button type="button" aria-label="입장 장면 다시 보기" data-tip="입장 장면 다시 보기" data-tip-pos="top" onClick={()=>{setPoint(0);setSeen([]);setReset(r=>r+1)}}><Icon name="arrow-counterclockwise" size={20}/></button></div>
  </>}
  {!motion&&<footer className="entry-footer"><span>동작 줄이기 설정 적용 · 카메라 이동 없이 입장</span></footer>}
 </main>;
}
