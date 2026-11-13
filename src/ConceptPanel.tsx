import {useEffect,useId,useRef,useState} from 'react';
import './concepts.css';
import {Icon} from './Icon';

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
type Props={topics:ConceptTopic[];currentId?:string;contextLabel?:string;onNotes?:()=>void;initialExpanded?:boolean;openSignal?:number};

function ConceptQuestion({topic}:{topic:ConceptTopic}){
 const [choice,setChoice]=useState<number|null>(null),[checked,setChecked]=useState(false);
 const groupId=useId(),firstOption=useRef<HTMLInputElement>(null);
 const question=topic.question;
 const valid=question.options.length>1&&Number.isInteger(question.answer)&&question.answer>=0&&question.answer<question.options.length;
 if(!valid)return null;
 const correct=choice===question.answer;
 return <section className="concept-check" aria-labelledby={groupId+'-heading'}>
  <div className="concept-check-heading"><Icon name="check2-circle" size={18}/><h3 id={groupId+'-heading'}>짧게 확인해 볼까요?</h3><small>연습 · 점수에 반영되지 않아요</small></div>
  <fieldset disabled={checked}><legend>{question.prompt}</legend><div className="concept-options">{question.options.map((option,index)=><label key={index} className={'concept-option '+(choice===index?'chosen ':'')+(checked&&index===question.answer?'correct':'')}><input ref={index===0?firstOption:undefined} type="radio" name={groupId} value={index} checked={choice===index} onChange={()=>setChoice(index)}/><span>{option}</span>{checked&&index===question.answer&&<small>정답</small>}</label>)}</div></fieldset>
  {!checked?<button className="concept-check-button" type="button" disabled={choice===null} onClick={()=>{if(choice!==null)setChecked(true)}}>답 확인하기</button>:<div className={'concept-feedback '+(correct?'is-correct':'try-again')} role="status" aria-live="polite"><strong>{correct?'맞았어요. 개념을 잘 연결했네요!':'조금 다르게 생각해 볼까요?'}</strong><p><span>내가 고른 답</span> {choice!==null?question.options[choice]:''}</p>{!correct&&<p><span>정답</span> {question.options[question.answer]}</p>}<p>{choice!==null&&question.optionExplanations?.[choice]||question.explanation}</p><button type="button" className="concept-retry" onClick={()=>{setChoice(null);setChecked(false);requestAnimationFrame(()=>firstOption.current?.focus())}}>다시 풀어보기</button></div>}
 </section>;
}

/** Inline, browser-local teaching content. Never awards lesson completion.
    모든 개념을 펼친 채로 보여 줘요(클릭 없이 읽기). 지금 고른 부품과 이어지는 개념은 표시만 해 둬요.
    확인 문제만 원할 때 펼치는 연습이에요. */
export function ConceptPanel({topics,currentId,onNotes,openSignal=0}:Props){
 const panelId=useId(),panelRoot=useRef<HTMLElement>(null);
 useEffect(()=>{if(!openSignal)return;requestAnimationFrame(()=>panelRoot.current?.querySelector('.concept-item.is-current, .concept-item')?.scrollIntoView?.({block:'start',behavior:'smooth'}))},[openSignal]);
 if(!topics.length)return null;
 const safe=(t:ConceptTopic)=>t.sources.filter(source=>/^https:\/\//i.test(source.url));
 return <section ref={panelRoot} className="concept-panel concept-read" aria-labelledby={panelId+'-title'}>
  <h2 id={panelId+'-title'} className="concept-eyebrow">한눈에 이해하는 개념</h2>
  <ol className="concept-list">{topics.map((topic,index)=><li key={topic.id} className={'concept-item'+(topic.id===currentId?' is-current':'')} aria-current={topic.id===currentId?'true':undefined}>
   <div className="concept-item-head"><span className="concept-num">{String(index+1).padStart(2,'0')}</span><h3>{topic.title}</h3>{topic.id===currentId&&<span className="concept-now">지금 보는 내용</span>}</div>
   <p className="concept-definition">{topic.definition}</p>
   <dl className="concept-facts">
    <div><dt>원리</dt><dd>{topic.principle}</dd></div>
    <div><dt>장면 연결</dt><dd>{topic.connection}</dd></div>
    <div className="concept-caution"><dt>헷갈리는 점</dt><dd>{topic.misconception}</dd></div>
   </dl>
   {safe(topic).length>0&&<p className="concept-refs">{safe(topic).map((source,k)=><a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<Icon name="box-arrow-up-right" className="trail"/><span className="concept-sr-only"> (새 창)</span>{k<safe(topic).length-1?'':''}</a>)}</p>}
  </li>)}</ol>
  {onNotes&&<button type="button" className="concept-notes" onClick={onNotes}>내 메모에 정리하기<Icon name="journal-text" className="trail"/></button>}
 </section>;
}
