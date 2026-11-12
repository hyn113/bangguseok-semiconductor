import {useEffect,useRef,useState} from 'react';
import {CleanroomEnvironment} from './CleanroomEnvironment';
import './welcome.css';
import {ConceptPanel} from './ConceptPanel';
import {cleanroomConcepts} from './conceptTopics';
export type Visitor={organization:string;nickname:string};
const reduced=()=>typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const points=[
 {title:'천장 속 공기 관리',label:'FFU',text:'팬과 필터를 결합한 FFU는 공기를 이동시키고 입자를 줄이는 데 쓰입니다. 이 공간은 원리를 소개하는 개념 모형이며 실제 청정도나 풍속을 계산하지 않습니다.'},
 {title:'복장과 오염 관리',label:'클린룸 복장',text:'클린룸 복장은 사람이 가져올 수 있는 오염을 관리하기 위한 구성 요소입니다. 필요한 복장과 착용 방법은 시설의 승인된 절차와 교육을 따라야 합니다.'},
 {title:'실습을 시작하기 전에',label:'학습 공간',text:'장비를 탐색하고 직접 조작하며 개념을 알아보세요. 이 시제품은 실제 장비 운전이나 작업 자격을 제공하지 않습니다. 직접 저장한 메모와 완료한 퀴즈 기록은 브라우저에 저장됩니다.'}
];
export function Welcome({visitor,onVisitor,onContinue}:{visitor:Visitor;onVisitor:(v:Visitor)=>void;onContinue:()=>void}){
 const [screen,setScreen]=useState<'welcome'|'choice'|'tour'>('welcome'),[playing,setPlaying]=useState(()=>!reduced()),[motion,setMotion]=useState(()=>!reduced()),[reset,setReset]=useState(0),[point,setPoint]=useState(0),[seen,setSeen]=useState<number[]>([]);
 const [studyNote,setStudyNote]=useState(''),[leavePending,setLeavePending]=useState(false),[nicknameError,setNicknameError]=useState(false);
 const nicknameInput=useRef<HTMLInputElement>(null);
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
 const topHeader=<header className="entry-top"><span className="entry-brand"><span className="entry-mvp" title="최소 기능 제품 버전">MVP</span><span className="entry-wordmark">THE FIRST FAB <i>방구석 반도체</i></span></span><div><span className="entry-prototype">시제품 · 계정 인증 없음</span><button onClick={()=>setPlaying(p=>!p)} aria-pressed={!playing}>{playing?'배경 일시정지':'배경 재생'}</button></div></header>;
 const tourNavigation=<div className="tour-top"><button onClick={()=>setScreen('choice')}>← 시작 방법 선택</button><span>1인칭 클린룸 탐색 · 개념 모형</span><button onClick={requestContinue}>건너뛰고 실습 선택 →</button></div>;
 return <main className={'entry-page entry-'+screen}>
  <CleanroomEnvironment tour={screen==='tour'} playing={playing} motion={motion} reset={reset}/>
  <div className="entry-vignette"/>
  {screen==='tour'?<div className="tour-chrome">{topHeader}{tourNavigation}</div>:topHeader}
  {leavePending&&<section ref={leaveWarning} tabIndex={-1} className="tour-leave-note" role="status"><strong>학습 메모를 복사해 두셨나요?</strong><p>실습 선택으로 이동하면 이 화면의 메모가 사라져요. 시작 방법 선택으로 돌아가거나 학습 지점을 바꿀 때는 유지됩니다.</p><div><button onClick={cancelLeave}>여기서 계속하기</button><button onClick={onContinue}>메모를 남기지 않고 실습 선택</button></div></section>}
  {screen==='welcome'?<section className="welcome-card"><div className="guide-portrait"><img src="/entry-guide.png" alt="흰 후드와 마스크를 착용한 가상의 연구원 캐릭터"/><span>YOUR FIRST LAB PARTNER</span></div><div className="welcome-copy"><h1 ref={heading} tabIndex={-1}>방구석 반도체</h1><p className="entry-english">: The First Fab</p><p className="entry-intro">처음 만나는 반도체의 세계.<br/>둘러보고, 만져보고, 나만의 발견을 시작하세요.</p><form noValidate onSubmit={e=>{e.preventDefault();if(!visitor.nickname.trim()){setNicknameError(true);nicknameInput.current?.focus();return}setScreen('choice')}}><label>소속 <small>선택</small><input autoComplete="off" maxLength={60} placeholder="입력하지 않아도 시작할 수 있어요" value={visitor.organization} onChange={e=>onVisitor({...visitor,organization:e.target.value})}/></label><label>닉네임 <small className="entry-required">필수</small><input ref={nicknameInput} autoComplete="off" maxLength={30} required aria-required="true" aria-invalid={nicknameError} aria-describedby={nicknameError?'nickname-error':undefined} placeholder="어떻게 불러드릴까요?" value={visitor.nickname} onChange={e=>{onVisitor({...visitor,nickname:e.target.value});if(e.target.value.trim())setNicknameError(false)}}/></label>{nicknameError&&<p id="nickname-error" className="entry-field-error" role="alert">닉네임을 입력해야 시작할 수 있어요.</p>}<p className="entry-privacy">계정 인증 없는 시제품입니다. 입력 내용은 현재 열린 화면에서만 사용하며 저장·전송하지 않습니다.</p><button className="entry-start" type="submit">시작하기 <span>→</span></button></form></div></section>:
  screen==='choice'?<section className="entry-choice-card"><span className="entry-kicker">WELCOME TO YOUR FIRST FAB</span><h1 ref={heading} tabIndex={-1}>{visitor.nickname.trim()?`${visitor.nickname.trim()}님, `:''}어디서 시작할까요?</h1><p>클린룸을 가볍게 둘러보거나,<br/>관심 있는 실습으로 바로 이동할 수 있어요.</p><div className="entry-options"><button onClick={tour}><span>01 · FIRST LOOK</span><strong>클린룸 학습하기</strong><small>1인칭 공간 탐색 · 세 가지 기초 개념</small><b>둘러보기 →</b></button><button onClick={requestContinue}><span>02 · HANDS ON</span><strong>바로 실습 선택</strong><small>FFU · 클린룸 복장 · 잉곳과 웨이퍼</small><b>실습으로 →</b></button></div><p><a href="/airshower-preview.html" target="_blank" rel="noopener noreferrer" style={{color:"#a94b00",fontWeight:700}}>새로운 3D 에어샤워 · 바람과 소리 체험 ↗</a></p><button className="entry-back" onClick={()=>setScreen('welcome')}>← 처음 화면으로</button></section>:
  <><div className="tour-hotspots" aria-label="클린룸 학습 지점"><button className={point===0?'selected':''} onClick={()=>select(0)}>01 <span>천장 FFU</span></button><button className={point===1?'selected':''} onClick={()=>select(1)}>02 <span>클린룸 복장</span></button><button className={point===2?'selected':''} onClick={()=>select(2)}>03 <span>실습 공간</span></button></div><section className="tour-card"><span className="entry-kicker">{points[point].label} · {seen.length} / 3개 지점 확인</span><h1 ref={heading} tabIndex={-1}>{points[point].title}</h1><p>{points[point].text}</p><div><button onClick={()=>{setPoint(0);setSeen([]);setReset(r=>r+1)}}>입장 장면 다시 보기</button><button className="entry-start" onClick={requestContinue}>실습 선택하기 →</button></div><section className="tour-inline-study"><ConceptPanel topics={cleanroomConcepts} currentId={point===0?'cleanroom-airflow':'cleanroom-contamination'} contextLabel="클린룸 둘러보기 개념" onNotes={showNotes}/><details ref={noteSection} className="tour-study-notes"><summary>내 학습 메모 · 현재 화면만</summary><label htmlFor="tour-study-note">둘러보며 알게 된 점</label><p id="tour-note-help">자동 저장·전송하지 않아요. 주제나 시작 화면을 바꿔도 유지되지만, 실습 선택으로 나가거나 새로고침하면 사라져요. 필요한 내용은 복사하고 개인정보는 적지 마세요.</p><textarea ref={noteInput} id="tour-study-note" aria-describedby="tour-note-help" value={studyNote} onChange={e=>setStudyNote(e.target.value)} maxLength={4000} rows={4} placeholder="예: FFU가 입자를 줄이는 이유는…"/><small>{studyNote.length} / 4,000자</small></details></section><small>체험을 모두 완료하지 않아도 언제든 실습을 선택할 수 있어요.</small></section></>}
  {!motion&&<footer className="entry-footer"><span>동작 줄이기 설정 적용 · 카메라 이동 없이 입장</span></footer>}
 </main>;
}
