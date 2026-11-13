import {waferConcepts,ffuConcepts,cleanroomConcepts,gowningConcepts} from './conceptTopics';

/* 퀴즈 미션 문제 은행.
   - choice: 하나 고르기 · order: 카드를 올바른 순서로 놓기
   - 레벨 1은 앞의 3문제, 레벨 2는 5문제, 레벨 3은 전체를 풀어요.
   - 공정 수율 = 맞힌 문제 / 전체 문제. 목표는 95%예요. */
export type MissionQ=
 |{kind:'choice';q:string;sub?:string;options:string[];answer:number;why:string}
 |{kind:'order';q:string;sub?:string;items:string[];why:string};
export type MissionLesson='wafer'|'photo'|'ffu'|'gown'|'gowning'|'mosfet';
export const TARGET_YIELD=95;
export const levels=[{id:1,name:'Level 1',label:'입문',count:3},{id:2,name:'Level 2',label:'기본',count:5},{id:3,name:'Level 3',label:'심화',count:Infinity}] as const;

const fromConcept=(t:typeof waferConcepts[number]):MissionQ=>({kind:'choice',q:t.question.prompt,sub:t.title,options:t.question.options,answer:t.question.answer,why:t.question.explanation});
/* 개념 문제 사이사이에 순서 문제를 섞어 둬요 */
const mix=(choices:MissionQ[],orders:MissionQ[])=>{const out:MissionQ[]=[];let o=0;choices.forEach((c,i)=>{out.push(c);if(i%2===0&&o<orders.length)out.push(orders[o++])});while(o<orders.length)out.push(orders[o++]);return out};

const banks:Record<MissionLesson,MissionQ[]>={
 wafer:mix(waferConcepts.map(fromConcept),[
  {kind:'order',q:'잉곳에서 빈 웨이퍼가 되기까지, 올바른 순서로 배열해 보세요.',sub:'이 체험에서 따라간 가공 순서예요.',items:['얇게 절단하기','가장자리 다듬기','평탄하게 만들기','표면 연마하기'],why:'잉곳을 얇게 자른 뒤 가장자리를 다듬고, 두께를 고르게 만든 다음 마지막에 표면을 연마해요.'},
 ]),
 photo:mix([
  {kind:'choice',q:'양성 PR에서 현상 후 없어지는 부분은?',options:['빛을 받은 PR','빛을 가린 PR','실리콘 기판 전체'],answer:0,why:'이 예시의 양성 PR은 노광된 부분의 현상액에 대한 용해도가 증가해요. 현상에서 그 부분이 제거됩니다.'},
  {kind:'choice',q:'노광 직후, 현상 전의 PR은?',options:['빛을 받은 부분이 이미 뚫려 있다','막은 남아 있고 용해 특성이 달라졌다','금속 배선으로 바뀐다'],answer:1,why:'노광은 PR의 용해 특성을 바꿔요. 실제로 개구부가 생기는 단계는 현상입니다.'},
  {kind:'choice',q:'포토공정을 마치고 남은 것은 무엇일까요?',options:['완성된 반도체 회로','실리콘에 새긴 홈','기판 위의 PR 패턴'],answer:2,why:'포토공정은 PR 패턴까지 만들어요. 식각·이온주입 등은 이어지는 별도 공정이에요.'},
 ],[
  {kind:'order',q:'다음 공정을 올바른 순서로 배열해 보세요.',sub:'실리콘 웨이퍼에 패턴을 형성하는 과정이에요.',items:['산화','포토','식각','증착'],why:'산화막을 만든 뒤 포토로 패턴을 그리고, 식각으로 필요 없는 부분을 깎아낸 다음 증착으로 새 막을 쌓아요.'},
  {kind:'order',q:'포토공정 안의 단계를 순서대로 놓아 보세요.',sub:'도포부터 현상까지예요.',items:['도포','소프트베이크','노광','현상'],why:'PR을 도포하고 소프트베이크로 막을 안정시킨 뒤, 빛을 쬐고(노광) 현상해서 패턴을 드러내요.'},
 ]),
 ffu:mix([
  {kind:'choice',q:'FFU에서 공기를 이동시키는 구성 요소는 무엇일까요?',options:['팬','하우징','조명'],answer:0,why:'팬이 공기를 이동시키고, 필터가 그 흐름 속 입자를 걸러요.'},
  ...ffuConcepts.map(fromConcept),
 ],[
  {kind:'order',q:'FFU 안에서 공기가 지나가는 순서대로 배열해 보세요.',sub:'천장 위 공기가 클린룸으로 내려오기까지예요.',items:['흡입구 보호 그릴','팬','하우징 · 공기 분배 공간','필터 여재','여재 보호망'],why:'공기는 흡입구로 들어와 팬이 밀어내고, 하우징 안에서 고르게 퍼진 뒤 필터 여재를 지나 보호망을 거쳐 아래로 내려가요.'},
 ]),
 gown:[],gowning:[],
 mosfet:[
  {kind:'choice',q:'VGS가 문턱전압보다 높고 VDS = 0 V라면?',options:['채널이 있고 순 드레인 전류는 0이다','채널이 없고 전류도 0이다','최대 드레인 전류가 흐른다'],answer:0,why:'게이트 전압으로 채널은 생기지만, 드레인과 소스 사이 전압 차가 없으면 전류가 흐르지 않아요.'},
  {kind:'order',q:'MOSFET 단면을 위에서 아래로 쌓인 순서대로 놓아 보세요.',sub:'게이트 쪽에서 바디 쪽으로 내려가요.',items:['게이트','게이트 절연막','채널이 생기는 표면','p형 바디'],why:'게이트 아래에 얇은 절연막이 있고, 그 아래 반도체 표면에 채널이 생기며 가장 아래가 바디예요.'},
  {kind:'choice',q:'포화 영역에서 드레인 끝의 핀치오프는 무엇을 뜻할까요?',options:['전류가 완전히 끊어진다','게이트 절연막이 파괴된다','드레인 끝의 반전 전하가 줄지만 전류는 계속 흐른다'],answer:2,why:'핀치오프는 드레인 근처 채널이 얇아지는 현상이에요. 전류는 계속 흐르고 VDS에 덜 민감해져요.'},
  {kind:'choice',q:'다른 조건이 같을 때 W/L을 두 배로 하면 이 모델의 ID는?',options:['절반이 된다','두 배가 된다','문턱전압이 두 배가 된다'],answer:1,why:'이 단순 모델에서 드레인 전류는 W/L에 비례해요.'},
 ],
};
const gownBank=mix([...gowningConcepts.map(fromConcept),...cleanroomConcepts.map(fromConcept)],[
 {kind:'order',q:'방진복을 입는 마지막 네 단계를 순서대로 놓아 보세요.',sub:'이 체험의 시설 예시 순서 기준이에요.',items:['클린룸 후드','방진복','긴 부츠 커버','클린룸 장갑'],why:'후드를 먼저 쓰고 방진복을 입은 뒤 부츠 커버로 바짓단을 덮고, 마지막에 장갑을 껴요. 실제 순서는 시설 절차를 따라요.'},
]);
banks.gown=gownBank;banks.gowning=gownBank;

export const missionNames:Record<MissionLesson,string>={wafer:'제1공정 · 웨이퍼 제조',photo:'제3공정 · 포토',ffu:'FFU 장비 탐색',gown:'클린룸 복장 탐색',gowning:'클린룸 착의 체험',mosfet:'MOSFET 설계 기초'};
export function missionQuestions(lesson:MissionLesson,level:1|2|3){const all=banks[lesson];const n=levels.find(l=>l.id===level)!.count;return all.slice(0,Math.min(all.length,n))}
export const bankSize=(lesson:MissionLesson)=>banks[lesson].length;

/* 결과 기록 — 워크스페이스 '학습 기록'에 나타나요 */
export type MissionResult={id:string;lesson:MissionLesson;level:number;total:number;correct:number;wrong:number;yield:number;date:string};
const KEY='semilab.missions';
export const loadMissionResults=():MissionResult[]=>{try{const v=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(v)?v:[]}catch{return []}};
export const saveMissionResult=(r:MissionResult)=>{try{localStorage.setItem(KEY,JSON.stringify([r,...loadMissionResults()].slice(0,50)))}catch{}};
