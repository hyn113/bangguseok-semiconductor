import {useEffect,useId,useRef,useState} from 'react';
import './concepts.css';

export type ConceptTopic={
 id:string;
 title:string;
 definition:string;
 principle:string;
 connection:string;
 misconception:string;
 question:{prompt:string;options:string[];answer:number;explanation:string;optionExplanations?:string[]};
 sources:{label:string;url:string}[];
};
type Props={topics:ConceptTopic[];currentId?:string;contextLabel?:string;onNotes?:()=>void;initialExpanded?:boolean};

function ConceptQuestion({topic}:{topic:ConceptTopic}){
 const [choice,setChoice]=useState<number|null>(null),[checked,setChecked]=useState(false);
 const groupId=useId(),firstOption=useRef<HTMLInputElement>(null);
 const question=topic.question;
 const valid=question.options.length>1&&Number.isInteger(question.answer)&&question.answer>=0&&question.answer<question.options.length;
 if(!valid)return null;
 const correct=choice===question.answer;
 return <section className="concept-check" aria-labelledby={groupId+'-heading'}>
  <div className="concept-check-heading"><span aria-hidden="true">✓</span><h3 id={groupId+'-heading'}>짧게 확인해 볼까요?</h3><small>연습 · 점수에 반영되지 않아요</small></div>
  <fieldset disabled={checked}><legend>{question.prompt}</legend><div className="concept-options">{question.options.map((option,index)=><label key={index} className={'concept-option '+(choice===index?'chosen ':'')+(checked&&index===question.answer?'correct':'')}><input ref={index===0?firstOption:undefined} type="radio" name={groupId} value={index} checked={choice===index} onChange={()=>setChoice(index)}/><span>{option}</span>{checked&&index===question.answer&&<small>정답</small>}</label>)}</div></fieldset>
  {!checked?<button className="concept-check-button" type="button" disabled={choice===null} onClick={()=>{if(choice!==null)setChecked(true)}}>답 확인하기</button>:<div className={'concept-feedback '+(correct?'is-correct':'try-again')} role="status" aria-live="polite"><strong>{correct?'맞았어요. 개념을 잘 연결했네요!':'조금 다르게 생각해 볼까요?'}</strong><p><span>내가 고른 답</span> {choice!==null?question.options[choice]:''}</p>{!correct&&<p><span>정답</span> {question.options[question.answer]}</p>}<p>{choice!==null&&question.optionExplanations?.[choice]||question.explanation}</p><button type="button" className="concept-retry" onClick={()=>{setChoice(null);setChecked(false);requestAnimationFrame(()=>firstOption.current?.focus())}}>다시 풀어보기</button></div>}
 </section>;
}

/** Inline, browser-local teaching content. Never awards lesson completion. */
export function ConceptPanel({topics,currentId,contextLabel,onNotes,initialExpanded=false}:Props){
 const panelId=useId();
 const [selectedId,setSelectedId]=useState(()=>topics.find(topic=>topic.id===currentId)?.id??topics[0]?.id??'');
 const [expanded,setExpanded]=useState(initialExpanded);
 const externalId=useRef(currentId);
 const topicIds=topics.map(topic=>topic.id).join('\u0000');
 useEffect(()=>{
  const externalChanged=externalId.current!==currentId;
  externalId.current=currentId;
  if(externalChanged&&topics.some(topic=>topic.id===currentId)){setSelectedId(currentId!);return}
  if(!topics.some(topic=>topic.id===selectedId))setSelectedId(topics.find(topic=>topic.id===currentId)?.id??topics[0]?.id??'');
 },[currentId,topicIds,selectedId]);
 const topic=topics.find(item=>item.id===selectedId)??topics[0];
 if(!topic)return null;
 return <section className="concept-panel" aria-labelledby={panelId+'-title'}>
  <div className="concept-panel-heading"><span className="concept-eyebrow">한눈에 이해하는 개념</span>{contextLabel&&<span className="concept-context">{contextLabel}</span>}</div>
  {topics.length>1&&<div className="concept-topic-list" role="group" aria-label="학습 개념 선택">{topics.map(item=><button key={item.id} type="button" className={item.id===topic.id?'selected':''} aria-pressed={item.id===topic.id} onClick={()=>setSelectedId(item.id)}>{item.title}</button>)}</div>}
  <div className="concept-definition"><h2 id={panelId+'-title'}>{topic.title}</h2><p>{topic.definition}</p></div>
  <button type="button" className="concept-expand" aria-expanded={expanded} aria-controls={panelId+'-body'} onClick={()=>setExpanded(value=>!value)}><span>{expanded?'핵심 설명 접기':'원리와 확인 문제 펼치기'}</span><span aria-hidden="true">{expanded?'−':'+'}</span></button>
  <div id={panelId+'-body'} hidden={!expanded} className="concept-body">
   <div className="concept-explanations"><section><h3><span aria-hidden="true">01</span> 원리</h3><p>{topic.principle}</p></section><section><h3><span aria-hidden="true">02</span> 지금 장면과 연결</h3><p>{topic.connection}</p></section><section className="concept-misconception"><h3><span aria-hidden="true">!</span> 자주 헷갈리는 점</h3><p>{topic.misconception}</p></section></div>
   <ConceptQuestion key={topic.id} topic={topic}/>
   <div className="concept-footer">{onNotes&&<button type="button" className="concept-notes" onClick={onNotes}>내 메모에 정리하기 <span aria-hidden="true">↗</span></button>}<details key={topic.id} className="concept-sources"><summary>참고 자료 보기</summary>{topic.sources.filter(source=>/^https:\/\//i.test(source.url)).length?<ul>{topic.sources.filter(source=>/^https:\/\//i.test(source.url)).map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} <span aria-hidden="true">↗</span><span className="concept-sr-only"> (새 창)</span></a></li>)}</ul>:<p>등록된 외부 참고 자료가 없습니다.</p>}</details></div>
  </div>
 </section>;
}
