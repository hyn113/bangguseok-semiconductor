import {useEffect,useMemo,useRef,useState} from 'react';
import type {ReactNode} from 'react';
import './glb-lesson.css';
import {StudyHub} from './StudyHub';
import {readLessonNote,writeLessonNote} from './lessonNoteStore';
import {LessonTitle} from './LessonTitle';
import {useLessonShell,PanelToggle,ShellChips,CanvasToolbar} from './LessonShell';
import './lesson-workbench.css';
import {Icon} from './Icon';
import {GlbStage,type PlayState,type CircuitState,type CircuitKey} from './GlbStage';
import {glbLessons,modelUrl,type GlbLessonId,type GlbPart} from './glbLessons';

/* 블렌더 단계별 모형 학습 화면 (웨이퍼 · 산화 · FFU · RIE · MOSFET · 전기 논리)
   왼쪽: 단계 목록과 설명 · 가운데: 3D와 재생 막대 · 오른쪽: 메모 · AI
   마지막으로 본 단계는 이 브라우저에 기억해요. */
const stepKey=(id:string)=>`semilab.glb.${id}.step`;
const readStep=(id:string)=>{try{const v=JSON.parse(localStorage.getItem(stepKey(id))||'null');return v&&typeof v.i==='number'?v as {t:string;i:number}:null}catch{return null}};

/* 오른쪽 메모 · AI — 학습마다 원래 쓰던 메모 저장 위치를 그대로 써요(lessonNoteStore) */
function GlbNotes({id,name,profile,onQuiz}:{id:string;name:string;profile?:ReactNode;onQuiz:()=>void}){
 const[note,setNote]=useState(()=>readLessonNote(id));
 return <aside id="shell-panel-right" className="lesson-notes shell-right" aria-label="학습 도우미"><div className="lesson-notes-head">{profile??<b>체험 학습자</b>}<div className="shell-actions"><button type="button" className="shell-quiz" onClick={onQuiz}>퀴즈 풀기</button><PanelToggle side="right"/></div></div><StudyHub lesson={id} primary={{label:`${name} 학습 메모`,value:note.text,updated:note.updated,failed:note.failed,onChange:text=>setNote(writeLessonNote(id,text))}}/></aside>;
}

export function GlbLesson({id,onExit,onMission,profile,right,extra}:{id:GlbLessonId;onExit:()=>void;onMission:()=>void;profile?:ReactNode;right?:ReactNode;extra?:ReactNode}){
 const def=glbLessons[id],shell=useLessonShell();
 const saved=useMemo(()=>readStep(id),[id]);
 const[track,setTrack]=useState(()=>def.tracks.find(t=>t.id===saved?.t)?.id??def.tracks[0].id);
 const stages=def.tracks.find(t=>t.id===track)!.stages;
 const[step,setStep]=useState(()=>Math.min(saved?.i??0,stages.length-1));
 const stage=stages[step];
 const[paused,setPaused]=useState(false),[replay,setReplay]=useState(0),[reset,setReset]=useState(0),[demo,setDemo]=useState(0);
 const[play,setPlay]=useState<PlayState>('loading'),[part,setPart]=useState<GlbPart|null>(null);
 const[circuit,setCircuit]=useState<CircuitState>({closed:false,high:false,a:false,b:false});
 const[seen,setSeen]=useState<Set<string>>(()=>new Set());
 const heading=useRef<HTMLHeadingElement>(null);
 useEffect(()=>{try{localStorage.setItem(stepKey(id),JSON.stringify({t:track,i:step}))}catch{}setSeen(s=>new Set(s).add(track+':'+step));setPaused(false);setPart(null)},[id,track,step]);
 const go=(i:number)=>{if(i<0||i>=stages.length)return;setStep(i);requestAnimationFrame(()=>heading.current?.focus({preventScroll:true}))};
 const switchTrack=(t:string)=>{if(t===track)return;setTrack(t);setStep(s=>Math.min(s,def.tracks.find(x=>x.id===t)!.stages.length-1))};
 const toggle=(k:CircuitKey)=>setCircuit(c=>({...c,[k]:!c[k]}));
 useEffect(()=>{const key=(e:KeyboardEvent)=>{const t=e.target as HTMLElement|null;if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable))return;if(e.key==='ArrowRight'&&e.altKey){e.preventDefault();go(step+1)}else if(e.key==='ArrowLeft'&&e.altKey){e.preventDefault();go(step-1)}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[step,stages.length]);

 const animated=stage.play!=='none'&&!stage.interact;
 const last=step===stages.length-1;
 const src=modelUrl(def,stage.file);
 const total=def.tracks.reduce((n,t)=>n+t.stages.length,0),progress=Math.round(seen.size/total*100);
 const row=(circuit.a?2:0)+(circuit.b?1:0);

 return <main className="glb-page lesson-workbench shell-page" {...shell.attrs}>
  <ShellChips leftId={id} left={def.title} right="메모 · AI"/>
  <div className="glb-grid shell-grid">
   <section className="glb-visual shell-center" aria-label="3D 학습 공간">
    <GlbStage src={src} label={`${def.title} · ${stage.title} 3D 모형`} play={stage.play} paused={paused} replay={replay} reset={reset} parts={def.parts}
     interact={stage.interact} circuit={circuit} demo={demo} onToggle={toggle} onState={setPlay} onPick={setPart}/>
    <div className="glb-player" role="group" aria-label="단계 재생">
     <button type="button" className="glb-icon" aria-label="이전 단계" data-tip="이전 단계" data-tip-pos="bottom" disabled={step===0} onClick={()=>go(step-1)}><Icon name="chevron-left"/></button>
     <span className="glb-player-title"><b>{String(step+1).padStart(2,'0')}</b><span>{stage.title}</span></span>
     <button type="button" className="glb-icon" aria-label="다음 단계" data-tip="다음 단계" data-tip-pos="bottom" disabled={last} onClick={()=>go(step+1)}><Icon name="chevron-right"/></button>
     {animated&&<><i className="glb-sep" aria-hidden="true"/>
      {play==='done'
       ?<button type="button" className="glb-icon" aria-label="다시 보기" data-tip="다시 보기" data-tip-pos="bottom" onClick={()=>{setPaused(false);setReplay(r=>r+1)}}><Icon name="arrow-repeat"/></button>
       :<button type="button" className="glb-icon" aria-label={paused?'재생':'일시정지'} data-tip={paused?'재생':'일시정지'} data-tip-pos="bottom" disabled={play==='loading'} onClick={()=>setPaused(v=>!v)}><Icon name={paused?'play-fill':'pause-fill'}/></button>}</>}
     {stage.interact&&<><i className="glb-sep" aria-hidden="true"/><button type="button" className="glb-icon" aria-label="예시 재생" data-tip="예시 애니메이션 보기" data-tip-pos="bottom" disabled={play==='loading'||play==='playing'} onClick={()=>setDemo(d=>d+1)}><Icon name="play-fill"/></button></>}
    </div>
    <CanvasToolbar tiles={[{id:'reset',label:'초기화',icon:'arrow-counterclockwise',onClick:()=>{setPaused(false);setReset(r=>r+1)}}]} view={{camera:true,labels:true}}/>
   </section>

   <section id="shell-panel-left" className="glb-guide shell-left">
    <div className="workbench-panel-title"><PanelToggle side="left"/><button className="shell-back" data-tip="실습 선택" data-tip-pos="bottom" onClick={onExit}><Icon name="chevron-left"/><span className="sr-only">실습 선택</span></button><LessonTitle id={id} fallback={def.title}/></div>
    {def.tracks.length>1&&<div className="glb-tracks" role="tablist" aria-label="공정 방식">{def.tracks.map(t=><button key={t.id} type="button" role="tab" aria-selected={t.id===track} onClick={()=>switchTrack(t.id)}><b>{t.label}</b><small>{t.sub}</small></button>)}</div>}
    <ol className="guide-items glb-steps" aria-label="학습 단계">{stages.map((s,i)=><li key={s.file}><button type="button" className={i===step?'active':''} aria-current={i===step?'step':undefined} onClick={()=>go(i)}><span>{String(i+1).padStart(2,'0')}</span>{s.title}{seen.has(track+':'+i)&&i!==step&&<Icon name="check2" className="glb-seen"/>}</button></li>)}</ol>
    <div className="glb-progress" aria-label={`살펴본 단계 ${progress}%`}><i style={{width:progress+'%'}}/></div>

    <article className="glb-stage-copy" aria-live="polite">
     <h2 ref={heading} tabIndex={-1}>{stage.title}</h2>
     <p>{stage.body}</p>
     {stage.key&&<p className="glb-key"><b>핵심</b>{stage.key}</p>}
     {stage.terms&&<dl className="glb-terms">{stage.terms.map(([t,d])=><div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>}

     {stage.interact==='switch'&&<div className="glb-controls"><button type="button" role="switch" aria-checked={circuit.closed} onClick={()=>toggle('closed')}><span>스위치</span><b>{circuit.closed?'닫힘':'열림'}</b></button><p className="glb-state">램프 <b>{circuit.closed?'켜짐':'꺼짐'}</b> · {circuit.closed?'전류가 흐를 길이 이어졌어요':'길이 끊겨 전류가 흐르지 않아요'}</p></div>}
     {stage.interact==='signal'&&<div className="glb-controls"><div className="glb-seg" role="group" aria-label="신호">{[false,true].map(h=><button key={String(h)} type="button" aria-pressed={circuit.high===h} onClick={()=>setCircuit(c=>({...c,high:h}))}>{h?'HIGH':'LOW'}</button>)}</div><p className="glb-state"><b>{circuit.high?'1 · HIGH':'0 · LOW'}</b> · 예시 전압 {circuit.high?'3.3 V':'0 V'}</p></div>}
     {stage.interact==='and'&&<div className="glb-controls">
      <div className="glb-inputs">{(['a','b'] as const).map(k=><button key={k} type="button" role="switch" aria-checked={circuit[k]} onClick={()=>toggle(k)}><span>입력 {k.toUpperCase()}</span><b>{circuit[k]?1:0}</b></button>)}</div>
      <table className="glb-truth"><caption className="sr-only">AND 진리표</caption><thead><tr><th>A</th><th>B</th><th>Y</th></tr></thead><tbody>{[0,1,2,3].map(r=><tr key={r} aria-current={r===row||undefined}><td>{r>>1}</td><td>{r&1}</td><td>{r===3?1:0}</td></tr>)}</tbody></table>
      <p className="glb-state">출력 Y = <b>{circuit.a&&circuit.b?1:0}</b> · 표시등 {circuit.a&&circuit.b?'켜짐':'꺼짐'}</p></div>}

     {stage.hint&&<p className="glb-hint"><Icon name="hand-index" className="lead"/>{stage.hint}</p>}
     {part&&<div className="glb-part" role="status"><span>선택한 부품</span><b>{part.name}</b><p>{part.desc}</p></div>}
     {stage.note&&<p className="glb-note">{stage.note}</p>}
     <div className="glb-nav">
      {step>0&&<button type="button" className="btn btn--secondary" onClick={()=>go(step-1)}>이전 단계</button>}
      {!last?<button type="button" className="btn btn--primary" onClick={()=>go(step+1)}>다음 단계</button>
       :def.tracks.length>1&&track!==def.tracks[def.tracks.length-1].id?<button type="button" className="btn btn--primary" onClick={()=>{const n=def.tracks[def.tracks.findIndex(t=>t.id===track)+1];setTrack(n.id);setStep(0)}}>{def.tracks[def.tracks.findIndex(t=>t.id===track)+1].label} 보기</button>
       :<button type="button" className="btn btn--primary" onClick={onMission}>퀴즈로 확인하기</button>}
     </div>
     {last&&<p className="glb-done"><Icon name="check-circle" className="lead"/>{def.done}</p>}
    </article>

    {extra}
    <details className="glb-about"><summary>이 학습에 대해</summary>
     <p>{def.intro}</p>
     <ul>{def.goals.map(g=><li key={g}>{g}</li>)}</ul>
     <p className="glb-note">{def.caution}</p>
     {def.refs.length>0&&<ul className="glb-refs">{def.refs.map(r=><li key={r.title}>{r.url?<a href={r.url} target="_blank" rel="noreferrer">{r.title}<Icon name="box-arrow-up-right" className="trail"/></a>:r.title}</li>)}</ul>}
    </details>
   </section>
   {right??<GlbNotes id={id} name={def.title.split('·').pop()!.trim()} profile={profile} onQuiz={onMission}/>}
  </div>
 </main>;
}
