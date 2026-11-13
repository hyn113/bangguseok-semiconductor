import {useEffect,useMemo,useRef,useState} from 'react';
import type {ReactNode,DragEvent} from 'react';
import {Icon} from './Icon';
import {StudyHub} from './StudyHub';
import {recordPass} from './grade';
import {lessonTitle} from './LessonTitle';
import {levels,missionQuestions,missionNames,TARGET_YIELD,saveMissionResult,type MissionLesson,type MissionQ} from './missions';
import {readLessonNote,writeLessonNote} from './lessonNoteStore';
import {Preview} from './SelectionCatalog';
import {MISSION_ISSUER} from './missions';
import './mission.css';

/* 퀴즈 미션 페이지
   안내(미션 도착) → 레벨 선택 → 문제 풀기 → 결과(공정 수율)
   오른쪽 끝 '메모' 탭을 누르면 학습 때 쓴 메모와 AI 어시스턴스를 꺼내 볼 수 있어요. */
type Answer=number|string[]|null;
const shuffle=<T,>(list:T[],seed:number)=>{const a=[...list];let x=seed||1;for(let i=a.length-1;i>0;i--){x=(x*9301+49297)%233280;const j=Math.floor(x/233280*(i+1));[a[i],a[j]]=[a[j],a[i]]}if(a.every((v,i)=>v===list[i])&&a.length>1)a.push(a.shift()!);return a};
const isRight=(q:MissionQ,a:Answer)=>q.kind==='choice'?a===q.answer:Array.isArray(a)&&a.length===q.items.length&&a.every((v,i)=>v===q.items[i]);

export function MissionPage({lesson,profile,onExit,onLearn}:{lesson:MissionLesson;profile:ReactNode;onExit:()=>void;onLearn:()=>void}){
 const name=lessonTitle(lesson,missionNames[lesson]);
 const[phase,setPhase]=useState<'intro'|'level'|'play'|'result'>('level'),[level,setLevel]=useState<1|2|3>(1),[round,setRound]=useState(1);
 const questions=useMemo(()=>missionQuestions(lesson,level),[lesson,level]);
 const[at,setAt]=useState(0),[answers,setAnswers]=useState<Answer[]>([]),[checked,setChecked]=useState<boolean[]>([]);
 const[memoOpen,setMemoOpen]=useState(false),[onlyWrong,setOnlyWrong]=useState(false);
 const[note,setNote]=useState(()=>readLessonNote(lesson));
 const heading=useRef<HTMLHeadingElement>(null);
 /* 메모 패널 너비: 왼쪽 가장자리를 끌어 줄이고 늘려요(300~560px, 화면을 넘지 않게). 이 브라우저에 기억해요. */
 const[memoW,setMemoW]=useState(()=>{try{const n=Number(localStorage.getItem('semilab.mission.memoW'));return n>=300&&n<=560?n:364}catch{return 364}});
 const fitW=(w:number)=>Math.round(Math.max(300,Math.min(560,window.innerWidth-120,w))/4)*4;
 const memoDrag=useRef<{x:number;w:number}|null>(null);
 const saveW=(w:number)=>{setMemoW(w);try{localStorage.setItem('semilab.mission.memoW',String(w))}catch{}};
 useEffect(()=>{heading.current?.focus({preventScroll:true})},[phase,at]);
 const start=()=>{setAnswers(questions.map(()=>null));setChecked(questions.map(()=>false));setAt(0);setOnlyWrong(false);setRound(r=>r+1);setPhase('play')};
 const q=questions[at],a=answers[at]??null,done=checked[at];
 const correct=questions.filter((qq,i)=>checked[i]&&isRight(qq,answers[i]??null)).length;
 const solved=checked.filter(Boolean).length;
 const yieldNow=solved?Math.round(correct/questions.length*100):0;
 const setA=(v:Answer)=>setAnswers(list=>list.map((x,i)=>i===at?v:x));
 const check=()=>setChecked(list=>list.map((x,i)=>i===at?true:x));
 const finish=()=>{const c=questions.filter((qq,i)=>isRight(qq,answers[i]??null)).length,y=Math.round(c/questions.length*100);
  saveMissionResult({id:Date.now().toString(36),lesson,level,total:questions.length,correct:c,wrong:questions.length-c,yield:y,date:new Date().toISOString()});
  if(c===questions.length)recordPass(`mission:${lesson}:${level}`);setPhase('result')};
 const ready=q?.kind==='choice'?a!==null:Array.isArray(a)&&q&&a.length===(q.kind==='order'?q.items.length:0);
 const finalCorrect=questions.filter((qq,i)=>isRight(qq,answers[i]??null)).length,finalYield=Math.round(finalCorrect/Math.max(1,questions.length)*100),success=finalYield>=TARGET_YIELD;
 const lv=levels.find(l=>l.id===level)!;

 return <main className="mission-page" data-memo={memoOpen||undefined}>
  <header className="mission-head">
   <div className="mission-title-chip"><button type="button" className="mission-back" data-tip="학습으로 돌아가기" data-tip-pos="bottom" onClick={onExit}><Icon name="chevron-left"/><span className="sr-only">학습으로 돌아가기</span></button><span>{name} 미션</span></div>
   {phase==='play'&&<div className="mission-progress" aria-label={`${questions.length}문제 중 ${at+1}번째`}>
    <ol>{questions.map((_,i)=><li key={i} data-state={i===at?'now':checked[i]?(isRight(questions[i],answers[i]??null)?'right':'wrong'):undefined}><button type="button" onClick={()=>setAt(i)} aria-label={`${i+1}번 문제`}>{i+1}</button></li>)}</ol>
    <div className="mission-bar"><i style={{width:`${(solved/questions.length)*100}%`}}/></div>
   </div>}
  </header>

  {(phase==='intro'||phase==='level')&&<div className="mission-backdrop" aria-hidden="true"><Preview id={lesson==='gowning'?'gown':lesson} live gid="mission-wafer"/></div>}
  <section className="mission-board" aria-hidden={phase!=='play'} hidden={phase==='intro'||phase==='level'}>
   {(phase==='play'||phase==='result')&&q?<>
    <div className="mission-meta"><span>{lv.name} · {at+1} / {questions.length}</span><span>현재 공정 수율 <b>{yieldNow}%</b></span></div>
    <h1 ref={heading} tabIndex={-1} className="mission-q">Q. {q.q}</h1>
    {q.sub&&<p className="mission-sub">{q.sub}</p>}
    {q.kind==='choice'?<Choice key={round+'-'+at} q={q} value={a as number|null} locked={done} onPick={setA}/>:<Order key={round+'-'+at} q={q} value={(a as string[]|null)??[]} locked={done} seed={round*31+at} onChange={setA}/>}
    {done&&<div className={'mission-feedback '+(isRight(q,a)?'is-right':'is-wrong')} role="status"><strong>{isRight(q,a)?'정답이에요':'아쉬워요'}</strong>{!isRight(q,a)&&<span>정답 · {q.kind==='choice'?q.options[q.answer]:q.items.join(' → ')}</span>}<p>{q.why}</p></div>}
    <div className="mission-actions">
     <button type="button" className="btn btn--secondary" disabled={at===0} onClick={()=>setAt(i=>i-1)}>이전</button>
     {!done?<button type="button" className="btn btn--primary" disabled={!ready} onClick={check}>정답 확인</button>
      :at<questions.length-1?<button type="button" className="btn btn--primary" onClick={()=>setAt(i=>i+1)}>다음 문제<Icon name="arrow-right" className="trail"/></button>
      :<button type="button" className="btn btn--primary" onClick={finish}>결과 보기<Icon name="arrow-right" className="trail"/></button>}
    </div>
   </>:<div className="mission-board-empty" aria-hidden="true"><Icon name="check2-circle" size={48}/></div>}
  </section>

  {(phase==='intro'||phase==='level')&&<div className="mission-scrim"><div className="mission-dialog" role="dialog" aria-modal="true" aria-labelledby="mission-dialog-title">
   {phase==='intro'?<>
    <span className="mission-alert">{MISSION_ISSUER?`${MISSION_ISSUER} `:''}{lv.alert}</span>
    <h1 id="mission-dialog-title" ref={heading} tabIndex={-1}>{lv.title}</h1>
    <p className="mission-brief">{lv.brief.split('\n').map((l,i)=><span key={i}>{l}</span>)}</p>
    <p className="mission-goal">{name} · {questions.length}문제 · 목표 수율 <b>{TARGET_YIELD}%</b></p>
    <div className="mission-dialog-actions"><button type="button" className="btn btn--secondary btn--lg" onClick={()=>setPhase('level')}>레벨 바꾸기</button><button type="button" className="btn btn--primary btn--lg" onClick={start}>미션 시작</button></div>
   </>:<>
    <span className="mission-alert">{name}</span>
    <h1 id="mission-dialog-title" ref={heading} tabIndex={-1}>레벨을 골라 주세요</h1>
    <div className="game-levels" role="radiogroup" aria-label="레벨">{levels.map(l=>{const n=missionQuestions(lesson,l.id).length;return <button key={l.id} type="button" role="radio" className="game-tile" aria-checked={level===l.id} onClick={()=>setLevel(l.id)} onDoubleClick={()=>{setLevel(l.id);setPhase('intro')}}>
     <span className="game-tile-stars" aria-hidden="true">{[1,2,3].map(k=><Icon key={k} name={k<=l.id?'star-fill':'star'}/>)}</span>
     <strong>{l.name}</strong><span>{l.label} · {n}문제</span></button>})}</div>
    <div className="mission-dialog-actions"><button type="button" className="btn btn--tertiary btn--lg" onClick={onExit}>나가기</button><button type="button" className="btn btn--primary btn--lg" onClick={()=>setPhase('intro')}>다음으로<Icon name="arrow-right" className="trail"/></button></div>
   </>}
  </div></div>}

  {phase==='result'&&<div className="mission-scrim"><div className="mission-result" role="dialog" aria-modal="true" aria-labelledby="mission-result-title">
   <div className="mission-result-side">
    <h1 id="mission-result-title" ref={heading} tabIndex={-1}>{success?'미션 성공':'미션 실패'}</h1>
    <div className="mission-gauge" style={{'--p':finalYield} as React.CSSProperties}><div><small>공정 수율</small><strong>{finalYield}%</strong></div></div>
    <p>총 {questions.length}개의 공정 미션 중 <b>{finalCorrect}개</b>를 해결했어요.<br/>{success?'목표 수율을 달성했어요. 다음 레벨에도 도전해 보세요.':`목표 수율 ${TARGET_YIELD}%까지 ${TARGET_YIELD-finalYield}%가 남았어요. 오답 피드백을 확인하고 다시 도전해 보세요.`}</p>
    <div className="mission-result-actions"><button type="button" className="btn btn--secondary btn--lg" aria-pressed={onlyWrong} disabled={finalCorrect===questions.length} onClick={()=>setOnlyWrong(v=>!v)}>{onlyWrong?'전체 보기':'오답 다시 보기'}</button><button type="button" className="btn btn--primary btn--lg" onClick={start}>다시 도전하기</button></div>
    <button type="button" className="btn btn--tertiary btn--sm" onClick={onLearn}>학습으로 돌아가기</button>
   </div>
   <ol className="mission-review">{questions.map((qq,i)=>{const ans=answers[i]??null,ok=isRight(qq,ans);if(onlyWrong&&ok)return null;return <li key={i}>
    <div className="mission-review-head"><span className="mission-review-num">{String(i+1).padStart(2,'0')}</span><h2>{qq.q}</h2><span className={'mission-tag '+(ok?'is-right':'is-wrong')}>{ok?'정답':'오답'}</span></div>
    <dl><div><dt>내가 고른 답</dt><dd>{qq.kind==='choice'?(typeof ans==='number'?qq.options[ans]:'—'):(Array.isArray(ans)&&ans.length?ans.join(' → '):'—')}</dd></div>
    {!ok&&<div><dt>정답</dt><dd>{qq.kind==='choice'?qq.options[qq.answer]:qq.items.join(' → ')}</dd></div>}
    <div><dt>해설</dt><dd>{qq.why}</dd></div></dl>
   </li>})}</ol>
  </div></div>}

  {phase==='play'&&<button type="button" className="mission-memo-tab" aria-expanded={memoOpen} aria-controls="mission-memo" onClick={()=>setMemoOpen(v=>!v)}><Icon name={memoOpen?'x-lg':'journal-text'}/><span>{memoOpen?'닫기':'메모'}</span></button>}
  {memoOpen&&<div className="mission-memo-scrim" onClick={()=>setMemoOpen(false)} aria-hidden="true"/>}
  {memoOpen&&<aside id="mission-memo" className="mission-memo shell-page" aria-label="학습 메모와 AI 어시스턴스" style={{width:fitW(memoW)}}>
   <div className="mission-memo-resizer" role="separator" aria-orientation="vertical" aria-label="메모 패널 너비" aria-valuemin={300} aria-valuemax={560} aria-valuenow={fitW(memoW)} tabIndex={0} title="끌어서 너비 조절 · 두 번 누르면 기본 너비"
    onPointerDown={e=>{if(e.button!==0)return;memoDrag.current={x:e.clientX,w:fitW(memoW)};e.currentTarget.setPointerCapture?.(e.pointerId);e.currentTarget.dataset.dragging='true'}}
    onPointerMove={e=>{const d=memoDrag.current;if(d)setMemoW(fitW(d.w+(d.x-e.clientX)))}}
    onPointerUp={e=>{if(memoDrag.current){memoDrag.current=null;delete e.currentTarget.dataset.dragging;saveW(fitW(memoW))}}}
    onDoubleClick={()=>saveW(364)}
    onKeyDown={e=>{const step=e.shiftKey?32:16;if(e.key==='ArrowLeft'){e.preventDefault();saveW(fitW(memoW+step))}else if(e.key==='ArrowRight'){e.preventDefault();saveW(fitW(memoW-step))}}}/>
   <div className="mission-memo-head">{profile}<button type="button" className="hub-icon" aria-label="메모 닫기" onClick={()=>setMemoOpen(false)}><Icon name="x-lg"/></button></div>
   <StudyHub lesson={lesson==='gowning'?'gowning':lesson} primary={{label:`${name} 학습 메모`,value:note.text,updated:note.updated,failed:note.failed,onChange:t=>setNote(writeLessonNote(lesson,t))}}/>
  </aside>}
 </main>;
}

function Choice({q,value,locked,onPick}:{q:Extract<MissionQ,{kind:'choice'}>;value:number|null;locked:boolean;onPick:(n:number)=>void}){
 return <div className="mission-choices" role="radiogroup">{q.options.map((o,i)=>{const state=locked?(i===q.answer?'right':i===value?'wrong':undefined):undefined;
  return <button key={i} type="button" role="radio" aria-checked={value===i} data-state={state} disabled={locked} onClick={()=>onPick(i)}><span className="mission-choice-key">{String.fromCharCode(65+i)}</span><span>{o}</span>{state==='right'&&<Icon name="check2"/>}</button>})}</div>;
}

/* 순서 문제: 위 카드를 눌러(또는 끌어) 아래 칸에 차례로 놓아요. 놓인 칸을 누르면 다시 빠져요. */
function Order({q,value,locked,seed,onChange}:{q:Extract<MissionQ,{kind:'order'}>;value:string[];locked:boolean;seed:number;onChange:(v:string[])=>void}){
 const pool=useMemo(()=>shuffle(q.items,seed),[q,seed]);
 const[over,setOver]=useState<number|null>(null);
 const place=(item:string,slot?:number)=>{if(locked)return;const next=value.filter(v=>v!==item);if(slot===undefined||slot>=next.length)next.push(item);else next.splice(slot,0,item);onChange(next.slice(0,q.items.length))};
 const remove=(item:string)=>{if(!locked)onChange(value.filter(v=>v!==item))};
 const drag=(item:string)=>(e:DragEvent)=>{e.dataTransfer.setData('text/x-mission',item);e.dataTransfer.effectAllowed='move'};
 const drop=(slot:number)=>(e:DragEvent)=>{e.preventDefault();setOver(null);const item=e.dataTransfer.getData('text/x-mission');if(item)place(item,slot)};
 return <div className="mission-order">
  <div className="mission-pool" aria-label="고를 카드">{pool.map(item=>{const used=value.includes(item);return <button key={item} type="button" className="mission-card" draggable={!locked&&!used} onDragStart={drag(item)} disabled={locked||used} aria-pressed={used} onClick={()=>place(item)}>{item}</button>})}</div>
  <ol className="mission-slots" aria-label="순서 칸">{q.items.map((_,i)=>{const item=value[i],state=locked&&item?(item===q.items[i]?'right':'wrong'):undefined;
   return <li key={i} data-over={over===i||undefined} data-state={state} onDragOver={e=>{if(!locked){e.preventDefault();setOver(i)}}} onDragLeave={()=>setOver(null)} onDrop={drop(i)}>
    {item?<button type="button" className="mission-card is-placed" disabled={locked} draggable={!locked} onDragStart={drag(item)} onClick={()=>remove(item)} aria-label={`${i+1}번째: ${item} · 눌러서 빼기`}>{item}</button>:<span className="mission-slot-num">{i+1}</span>}
   </li>})}</ol>
 </div>;
}
