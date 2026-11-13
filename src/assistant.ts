import {waferConcepts,ffuConcepts,cleanroomConcepts,gowningConcepts} from './conceptTopics';
import {ffuParts} from './ffuParts';
import {mosParts} from './mosfetModel';

/* AI 어시스턴스 — API 연결 전 임시 챗봇.
   이 앱의 학습 자료(개념 카드·구성 요소 설명)에서 질문과 가장 가까운 내용을 찾아 답해요.
   나중에 API를 붙일 때는 replyTo()만 바꾸면 돼요. 화면(StudyHub)은 그대로 씁니다.

   replyTo(question, lesson, variant) → {text, sources, followUps}
   - text: 가벼운 마크다운(**굵게**, '- ' 목록, 빈 줄로 문단)
   - variant: '다시 답하기'를 누를 때마다 1씩 늘려 다음으로 가까운 자료로 답해요 */
export type Reply={text:string;sources:string[];followUps:string[]};
type Doc={id:string;lesson:string[];title:string;body:string;answer:()=>string;question:string};

const concept=(lesson:string[])=>(t:typeof waferConcepts[number]):Doc=>({id:t.id,lesson,title:t.title,question:t.title.endsWith('?')?t.title:`${t.title}, 쉽게 설명해 줘`,
 body:[t.title,t.definition,t.principle,t.connection,t.misconception].join(' '),
 answer:()=>`**${t.title}**\n\n${t.definition}\n\n- **원리** ${t.principle}\n- **지금 장면과 연결** ${t.connection}\n- **헷갈리기 쉬운 점** ${t.misconception}`});
const part=(lesson:string[],name:string,desc:string,id:string):Doc=>({id,lesson,title:name,question:`${name.split(' · ')[0]}은 무슨 역할을 해?`,body:`${name} ${desc}`,answer:()=>`**${name}**\n\n${desc}`});
const photo:Doc[]=[
 {id:'photo-coat',title:'도포 · 스핀 코팅',body:'도포 PR 감광액 포토레지스트 스핀 코팅 회전 얇은 막 균일',answer:()=>'**도포 · 스핀 코팅**\n\nPR(감광액)은 빛에 반응하는 재료예요. 웨이퍼를 빠르게 돌리면서 PR을 떨어뜨리면 원심력으로 퍼져 얇고 고른 막이 돼요.\n\n- 막이 고르지 않으면 이후 노광·현상 결과도 고르지 않아요.'},
 {id:'photo-softbake',title:'소프트베이크',body:'소프트베이크 노광 전 가열 용매 잔류 용매 줄이기 막 안정',answer:()=>'**소프트베이크**\n\n도포한 PR에 남은 용매를 줄여 막을 안정시키는 단계예요. 노광 전에 거쳐요.\n\n- 이 체험에서는 온도·시간 같은 조건을 조작하지 않고 개념만 확인해요.'},
 {id:'photo-expose',title:'노광 · 마스크',body:'노광 빛 마스크 차광부 패턴 전사 빛을 쬐다 노출',answer:()=>'**노광 · 마스크**\n\n마스크의 어두운 부분(차광부)은 빛을 막고, 열린 부분으로만 빛이 PR에 닿아요. 그래서 마스크의 무늬가 PR에 옮겨져요.\n\n- 빛을 받은 PR은 성질이 바뀌지만, 현상 전까지는 눈에 띄는 모양 변화가 없어요.'},
 {id:'photo-develop',title:'현상',body:'현상 현상액 녹이다 노광된 PR 제거 패턴 남는 PR 포지티브',answer:()=>'**현상**\n\n현상액이 성질이 바뀐 PR을 녹여 내요. 이 체험(포지티브 PR 예시)에서는 빛을 받은 부분이 사라지고, 가려졌던 부분의 PR이 남아 패턴이 돼요.\n\n- 남은 PR은 다음 공정에서 아래층을 지키는 가림막 역할을 해요.'},
].map(d=>({...d,lesson:['photo'],question:`${d.title.split(' · ')[0]}는 뭐야?`}));
const docs:Doc[]=[
 ...waferConcepts.map(concept(['wafer'])),
 ...ffuConcepts.map(concept(['ffu'])),
 ...cleanroomConcepts.map(concept(['tour','ffu','gown','gowning'])),
 ...gowningConcepts.map(concept(['gown','gowning'])),
 ...ffuParts.map((p,i)=>part(['ffu'],p.name,p.desc,'ffu-part-'+i)),
 ...Object.entries(mosParts).map(([k,p])=>part(['mosfet'],p.name,p.description,'mos-'+k)),
 ...photo,
];

/* 한국어는 형태소 분석 없이도 잘 맞도록 글자 두 개씩(bigram) 비교해요 */
const norm=(s:string)=>s.toLowerCase().replace(/[^0-9a-z가-힣\s]/g,' ').replace(/\s+/g,' ').trim();
const grams=(s:string)=>{const out=new Set<string>();for(const w of norm(s).split(' ')){if(w.length===1)out.add(w);for(let i=0;i<w.length-1;i++)out.add(w.slice(i,i+2))}return out};
const STOP=new Set(['뭐야','무엇','알려','설명','해줘','어떻','어떤','이유','왜요','인가','에요','있어','하는','는데','이야','무슨','역할']);
const gramCache=new Map<string,Set<string>>();
function rank(question:string,lesson:string){
 const q=[...grams(question)].filter(g=>!STOP.has(g));
 return docs.map(d=>{
  let g=gramCache.get(d.id);if(!g){g=grams(d.title+' '+d.title+' '+d.body);gramCache.set(d.id,g)}
  const t=grams(d.title);let score=0;
  for(const x of q){if(g.has(x))score+=1;if(t.has(x))score+=1.5}
  if(d.lesson.includes(lesson))score*=1.35;
  return {d,score:q.length?score/Math.sqrt(q.length):0};
 }).sort((a,b)=>b.score-a.score);
}
const lessonDocs=(lesson:string)=>docs.filter(d=>d.lesson.includes(lesson));
/** 이 학습 화면에서 먼저 물어보기 좋은 질문 */
export function starterQuestions(lesson:string,n=3){const list=lessonDocs(lesson);return (list.length?list:docs).slice(0,n).map(d=>d.question)}

export function replyTo(question:string,lesson:string,variant=0):Reply{
 const q=question.trim();
 if(/^(안녕|하이|hello|hi)\b|^안녕하세요/i.test(q)){
  return {text:'안녕하세요! 지금 보고 있는 장비나 공정에서 궁금한 점을 물어보세요. 메모에서 글을 드래그해 바로 물어볼 수도 있어요.',sources:[],followUps:starterQuestions(lesson)};
 }
 if(/고마|감사|thank/i.test(q)&&q.length<20)return {text:'도움이 됐다니 다행이에요. 더 궁금한 게 생기면 언제든 물어보세요.',sources:[],followUps:starterQuestions(lesson,2)};
 const ranked=rank(q,lesson).filter(r=>r.score>=0.9);
 if(!ranked.length){
  const sug=starterQuestions(lesson);
  return {text:'그 질문에 딱 맞는 학습 자료를 찾지 못했어요. 장비나 부품 이름을 넣어 다시 물어보시거나, 아래 질문으로 시작해 보세요.',sources:[],followUps:sug};
 }
 const top=ranked[variant%ranked.length],pick=top.d;
 /* 부품 설명이 짧으면 가까운 개념 카드를 덧붙여 더 풍부하게 */
 const extra=pick.id.includes('-part-')||pick.id.startsWith('mos-')?ranked.find(r=>r.d!==pick&&!r.d.id.includes('-part-')&&!r.d.id.startsWith('mos-')&&r.score>=top.score*.55)?.d:undefined;
 const others=ranked.filter(r=>r.d.id!==pick.id).slice(0,2).map(r=>r.d.question);
 const quoted=/^[“"]/.test(q);
 const lead=quoted?'고르신 메모와 가장 가까운 내용을 정리했어요.\n\n':'';
 const more=extra?`\n\n**함께 보면 좋아요 · ${extra.title}**\n${extra.answer().split('\n\n').slice(1).join('\n\n')}`:'';
 return {text:lead+pick.answer()+more,sources:[pick.title,...(extra?[extra.title]:[])],followUps:others.filter(q=>q!==extra?.question).concat(extra?[]:[]).slice(0,2)};
}

/** 글자를 조금씩 내보내 타이핑처럼 보여 줘요. signal로 멈출 수 있어요. */
export async function streamText(text:string,onChunk:(soFar:string)=>void,signal:{stopped:boolean}){
 const reduce=typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce){onChunk(text);return text}
 await new Promise(r=>setTimeout(r,380));
 let i=0;
 while(i<text.length){
  if(signal.stopped)return text.slice(0,i);
  i=Math.min(text.length,i+2+Math.floor(Math.random()*3));
  onChunk(text.slice(0,i));
  await new Promise(r=>setTimeout(r,16));
 }
 return text;
}
