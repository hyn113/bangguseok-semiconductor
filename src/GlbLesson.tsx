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
import {LessonNav,LessonCompanies,LessonPager,type NavLesson} from './lessonNav';

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

export function GlbLesson({id,onExit,onMission,onSwitch,profile,right,extra}:{id:GlbLessonId;onExit:()=>void;onMission:()=>void;onSwitch?:(id:NavLesson)=>void;profile?:ReactNode;right?:ReactNode;extra?:ReactNode}){
 const def=glbLessons[id],shell=useLessonShell();
 const saved=useMemo(()=>readStep(id),[id]);
 const[track,setTrack]=useState(()=>def.tracks.find(t=>t.id===saved?.t)?.id??def.tracks[0].id);
 const stages=def.tracks.find(t=>t.id===track)!.stages;
 const[step,setStep]=useState(()=>Math.min(saved?.i??0,stages.length-1));
 const stage=stages[step];
 const[paused,setPaused]=useState(false),[replay,setReplay]=useState(0),[reset,setReset]=useState(0),[demo,setDemo]=useState(0);
 const[play,setPlay]=useState<PlayState>('loading'),[part,setPartState]=useState<GlbPart|null>(null),[clear,setClear]=useState(0),[seenTip,setSeenTip]=useState(false);
 const setPart=(p:GlbPart|null)=>{setPartState(p);if(p)setSeenTip(true)};
 const[searching,setSearching]=useState(false),[query,setQuery]=useState(''),[pickOpen,setPickOpen]=useState(false),[shot,setShot]=useState<{part:GlbPart;url:string}|null>(null);const q=query.trim().toLowerCase();
 const[tab,setTab]=useState<'steps'|'parts'>('steps'),[present,setPresent]=useState<GlbPart[]>([]),[focus,setFocus]=useState<{part:GlbPart;n:number}|null>(null);
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
     interact={stage.interact} circuit={circuit} demo={demo} clear={clear} focus={focus} onParts={setPresent} onShot={(pt,url)=>setShot({part:pt,url})} onToggle={toggle} onState={setPlay} onPick={setPart}/>
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
    {part&&tab==='steps'?<div className="glb-part-pop" role="status" aria-live="polite"><div><b>{part.name}</b><button type="button" className="glb-icon" aria-label="설명 닫기" onClick={()=>setClear(c=>c+1)}><Icon name="x-lg"/></button></div><p>{part.desc}</p></div>
     :play!=='loading'&&!seenTip&&<p className="glb-part-tip" aria-hidden="true"><Icon name="hand-index" className="lead"/>부품을 누르면 설명이 나와요</p>}
    <CanvasToolbar tiles={[{id:'reset',label:'초기화',icon:'arrow-counterclockwise',onClick:()=>{setPaused(false);setReset(r=>r+1)}}]} view={{camera:true,labels:true}}/>
   </section>

   <section id="shell-panel-left" className="glb-guide shell-left">
    <div className="workbench-panel-title"><PanelToggle side="left"/><button className="shell-back" data-tip="실습 선택" data-tip-pos="bottom" onClick={onExit}><Icon name="chevron-left"/><span className="sr-only">실습 선택</span></button><LessonTitle id={id} fallback={def.title}/></div>
    <LessonNav current={id} area={def.area} onSwitch={onSwitch}/>
    <div className="glb-tabbar"><div className="glb-tabs2" role="tablist" aria-label="학습 보기"><button type="button" role="tab" aria-selected={tab==='steps'} onClick={()=>setTab('steps')}>{def.area==='설계'?'학습 단계':'공정 단계'}</button><button type="button" role="tab" aria-selected={tab==='parts'} onClick={()=>setTab('parts')}>{def.area==='설계'?'구성 설명':'기계 설명'}</button></div>
     <button type="button" className="glb-icon glb-search-btn" aria-label="검색" aria-pressed={searching} data-tip="검색" data-tip-pos="bottom" onClick={()=>{setSearching(v=>!v);setQuery('')}}><Icon name="search"/></button></div>
    {searching&&<label className="glb-search"><Icon name="search"/><input autoFocus type="search" aria-label={tab==='parts'?'부품 검색':'단계 검색'} placeholder={tab==='parts'?'부품 이름으로 찾기':'단계 찾기'} value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>{if(e.key==='Escape'){setSearching(false);setQuery('')}}}/></label>}
    {tab==='parts'?<div className="glb-parts" role="tabpanel">
     <div className="glb-partpick">
      <button type="button" className="glb-partpick-btn" aria-haspopup="listbox" aria-expanded={pickOpen} onClick={()=>setPickOpen(v=>!v)}><Icon name="chevron-right" className="glb-partpick-chev"/><span>{part?part.name:'부품 선택'}</span></button>
      {(pickOpen||!!q)&&<ul className="glb-partpick-menu" role="listbox" aria-label="부품">{def.parts.filter(pt=>present.includes(pt)&&(!q||(pt.name+' '+(pt.en??'')+' '+pt.desc).toLowerCase().includes(q))).map(pt=>{const here=present.includes(pt);return <li key={pt.name} role="option" aria-selected={part===pt}><button type="button" data-absent={!here||undefined} onClick={()=>{setPickOpen(false);if(here)setFocus(f=>({part:pt,n:(f?.n??0)+1}));else{setShot(null);setPart(pt)}}}>{pt.name}{!here&&<small>다른 단계</small>}</button></li>})}</ul>}
     </div>
     {part?<article className="glb-partcard">
      {shot&&shot.part===part?<figure><img src={shot.url} alt={`${part.name} 3D 모형`}/></figure>:!present.includes(part)&&<p className="glb-note glb-partcard-absent">이 부품은 다른 단계 장면에 있어요. 단계를 옮기면 3D로 볼 수 있어요.</p>}
      <h3>{part.name}{part.en&&<small>{part.en}</small>}</h3>
      {part.specs&&<dl>{part.specs.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}
      <h4>핵심 설명</h4>
      <p>{part.desc}</p>
     </article>:<p className="glb-partcard-empty"><Icon name="hand-index" className="lead"/>부품을 고르거나 3D 모형을 직접 눌러 보세요.</p>}
    </div>:<>
    {def.tracks.length>1&&<div className="glb-tracks" role="tablist" aria-label="공정 방식">{def.tracks.map(t=><button key={t.id} type="button" role="tab" aria-selected={t.id===track} onClick={()=>switchTrack(t.id)}><b>{t.label}</b><small>{t.sub}</small></button>)}</div>}
    <ol className="guide-items glb-steps" aria-label="학습 단계">{stages.map((s,i)=>q&&!(s.title+' '+s.body).toLowerCase().includes(q)?null:<li key={s.file}><button type="button" className={i===step?'active':''} aria-current={i===step?'step':undefined} onClick={()=>go(i)}><span>{String(i+1).padStart(2,'0')}</span>{s.title}{seen.has(track+':'+i)&&i!==step&&<Icon name="check2" className="glb-seen"/>}</button></li>)}</ol>
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
     {stage.note&&<p className="glb-note">{stage.note}</p>}
     <div className="glb-nav">
      {step>0&&<button type="button" className="btn btn--secondary" onClick={()=>go(step-1)}>이전 단계</button>}
      {!last?<button type="button" className="btn btn--primary" onClick={()=>go(step+1)}>다음 단계</button>
       :def.tracks.length>1&&track!==def.tracks[def.tracks.length-1].id?<button type="button" className="btn btn--primary" onClick={()=>{const n=def.tracks[def.tracks.findIndex(t=>t.id===track)+1];setTrack(n.id);setStep(0)}}>{def.tracks[def.tracks.findIndex(t=>t.id===track)+1].label} 보기</button>
       :null}
     </div>
     {last&&<p className="glb-done"><Icon name="check-circle" className="lead"/>{def.done}</p>}
    </article>
    <LessonPager current={id} area={def.area} onSwitch={onSwitch}/>
    {extra}
    </>}
    <details className="glb-about"><summary>이 학습에 대해</summary>
     <p>{def.intro}</p>
     <ul>{def.goals.map(g=><li key={g}>{g}</li>)}</ul>
     <p className="glb-note">{def.caution}</p>
     {def.refs.length>0&&<ul className="glb-refs">{def.refs.map(r=><li key={r.title}>{r.url?<a href={r.url} target="_blank" rel="noreferrer">{r.title}<Icon name="box-arrow-up-right" className="trail"/></a>:r.title}</li>)}</ul>}
    </details>
    <LessonCompanies id={id}/>
   </section>
   {right??<GlbNotes id={id} name={def.title.split('·').pop()!.trim()} profile={profile} onQuiz={onMission}/>}
  </div>
 </main>;
}
