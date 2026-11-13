/* 블렌더로 만든 단계별 3D 모형(.glb) 학습 내용.
   - 모형 파일: public/models/<학습>/  (원본 설명: docs/3d-assets/)
   - 문구: 각 학습의 'UI 설명 문구' PDF를 바탕으로 정리했어요.
   - play: once = 한 번 재생 후 마지막 장면 유지 · loop = 되풀이(팬 회전 등) · none = 움직임 없음
   - parts: 3D에서 누른 부품 이름(블렌더 오브젝트 이름)을 아래 규칙으로 찾아 한국어 이름과 설명을 보여줘요.
     이름은 소문자 · 밑줄은 띄어쓰기로 바꿔 비교해요. 가까운(안쪽) 오브젝트부터 맞는 규칙을 찾아요. */
export type GlbLessonId='wafer'|'oxidation'|'ffu'|'rie'|'mosfet'|'circuit';
export type Interaction='switch'|'signal'|'and';
export type GlbStage={file:string;title:string;body:string;key?:string;terms?:[string,string][];hint?:string;note?:string;play:'once'|'loop'|'none';interact?:Interaction};
export type GlbTrack={id:string;label:string;sub:string;stages:GlbStage[]};
export type GlbPart={name:string;desc:string;match:RegExp};
export type GlbLessonDef={id:GlbLessonId;title:string;area:'8대 공정'|'장비'|'설계';dir:string;intro:string;goals:string[];tracks:GlbTrack[];parts:GlbPart[];done:string;caution:string;refs:{title:string;url?:string}[]};

const wafer:GlbLessonDef={id:'wafer',title:'제1공정 · 웨이퍼 제조',area:'8대 공정',dir:'wafer',
 intro:'반도체 회로는 어떤 바탕 위에 만들어질까요? 실리콘을 결정으로 키우고, 얇게 자르고, 표면을 다듬으며 웨이퍼가 완성되는 과정을 살펴보세요.',
 goals:['용융 실리콘에서 단결정 잉곳이 자라는 원리를 알아요.','잉곳이 얇은 원판으로 나뉘는 과정을 따라가요.','연마 전후 표면과 완성된 베어 웨이퍼를 비교해요.'],
 tracks:[{id:'main',label:'웨이퍼 제조',sub:'',stages:[
  {file:'01_01_CZ_growth.glb',title:'잉곳 만들기',play:'once',body:'고순도 실리콘을 녹인 뒤 작은 종자결정을 액체 표면에 닿게 해요. 종자결정을 회전하며 천천히 끌어올리면, 그 결정 배열을 따라 실리콘이 굳으며 긴 기둥 모양의 잉곳이 자라요.',
   terms:[['종자결정','결정 성장의 출발점인 작은 단결정'],['단결정','결정 배열이 하나의 방향성을 유지하며 이어진 구조'],['용융 실리콘','물이 아니라 고온에서 액체가 된 실리콘이에요. 담는 내열 용기는 도가니예요.']],
   hint:'용융 실리콘과 결정이 만나는 부분을 확대해 보세요.',note:'성장 애니메이션은 설명용 크기 변화예요. 용융액 수위·열전달·결정 결함은 계산하지 않아요.'},
  {file:'02_02_as_grown_ingot.glb',title:'성장 직후의 잉곳',play:'none',body:'성장을 마친 잉곳은 위쪽에 목과 어깨, 아래쪽에 가늘어진 꼬리가 있는 긴 기둥이에요. 지름이 고른 몸통 부분만 웨이퍼로 쓸 수 있어요.',
   terms:[['잉곳','웨이퍼로 자르기 전의 실리콘 결정 기둥']],hint:'잉곳을 돌려 보며 목·어깨·몸통·꼬리를 찾아보세요.'},
  {file:'03_03_crop_and_grind.glb',title:'끝부분 잘라내기',play:'once',body:'웨이퍼로 쓰지 않는 어깨·목과 꼬리를 잘라내고, 몸통의 바깥 지름을 고르게 정리해요. 가공한 잉곳의 지름이 웨이퍼의 지름이 돼요.',
   hint:'잘려 나가는 두 부분이 어디인지 확인해 보세요.',note:'외경을 갈아내는 장비와 연삭 동작은 표현하지 않았어요.'},
  {file:'04_04_wire_slicing.glb',title:'얇게 절단하기',play:'once',body:'정리한 잉곳을 얇은 원판으로 잘라요. 이렇게 하나의 잉곳에서 여러 장의 웨이퍼를 얻어요. 절단 직후에는 표면이 거칠어 추가 가공이 필요해요.',
   terms:[['슬라이싱','잉곳을 얇은 원판으로 절단하는 과정'],['웨이퍼','이후 반도체 회로를 만드는 바탕이 되는 기판']],
   hint:'잉곳에서 얇은 원판이 하나씩 분리되는 모습을 확인해 보세요.',note:'관찰하기 쉽게 원판 두께와 간격을 키웠어요. 와이어는 개념 표시예요.'},
  {file:'05_05_polishing_comparison.glb',title:'표면 연마하기',play:'none',body:'잘라낸 웨이퍼의 표면을 여러 단계에 걸쳐 다듬고 연마해요. 절단 흔적과 손상을 줄여, 정밀한 회로를 만들 평탄한 표면을 준비해요.',
   terms:[['연마','표면을 평탄하고 매끄럽게 다듬는 과정'],['세정','남아 있는 입자와 오염물을 제거하는 과정']],
   hint:'절단 직후의 거친 면과 연마한 매끄러운 면을 비교해 보세요.',note:'실제로는 래핑 · 식각 · 폴리싱 · 세정 · 검사로 더 세분화돼요. 거칠기는 과장했어요.'},
  {file:'06_06_finished_blank_wafer.glb',title:'완성된 베어 웨이퍼',play:'none',body:'세정과 검사를 마치면 반도체 공정에 쓸 웨이퍼가 완성돼요. 아직 회로나 다이 격자가 없는 깨끗한 원판이에요.',
   terms:[['베어 웨이퍼','아직 회로를 형성하지 않은 웨이퍼'],['노치','웨이퍼의 방향을 알려 주는 가장자리의 작은 홈']],
   hint:'웨이퍼를 돌려 가장자리의 노치를 찾아보세요.'},
 ]}],
 parts:[
  {match:/^quartz crucible|^cutaway-free/,name:'석영 도가니',desc:'용융 실리콘을 담는 내열 용기예요.'},
  {match:/^molten silicon/,name:'용융 실리콘',desc:'고온에서 액체가 된 실리콘이에요. 물이나 물에 녹인 실리콘이 아니에요.'},
  {match:/^hot zone/,name:'가열 영역',desc:'도가니를 둘러싸 실리콘이 녹은 상태를 유지하도록 열을 주는 영역이에요(개념 표현).'},
  {match:/^growing single crystal/,name:'자라는 단결정',desc:'종자결정의 원자 배열을 이어받아 굳어 가는 실리콘 결정이에요.'},
  {match:/^seed crystal/,name:'종자결정 · 인상 막대',desc:'결정 성장의 출발점이에요. 회전하며 천천히 끌어올려요.'},
  {match:/^single crystal ingot/,name:'잉곳',desc:'성장 직후의 실리콘 결정 기둥이에요. 목·어깨·몸통·꼬리로 이뤄져요.'},
  {match:/^display pedestal|^wafer support/,name:'받침대',desc:'관찰용 받침대예요. 공정 장비는 아니에요.'},
  {match:/^usable cylindrical ingot/,name:'몸통 잉곳',desc:'끝부분을 잘라낸 뒤 웨이퍼로 자를 원기둥 부분이에요.'},
  {match:/^removed shoulder/,name:'잘라낸 어깨 · 목',desc:'지름이 고르지 않아 웨이퍼로 쓰지 않는 윗부분이에요.'},
  {match:/^removed tail/,name:'잘라낸 꼬리',desc:'성장 마지막에 가늘어진 아랫부분이에요.'},
  {match:/^illustrative cutting wire/,name:'절단 와이어(개념)',desc:'와이어 톱을 나타내는 개념 표시예요. 실제 다중 와이어 구조와는 달라요.'},
  {match:/^wafer slice|^sliced ingot/,name:'잘린 원판',desc:'잉곳에서 분리된 얇은 원판이에요. 두께와 간격은 보기 쉽게 키웠어요.'},
  {match:/^as-cut/,name:'절단 직후 웨이퍼',desc:'절단 흔적이 남아 표면이 거칠어요(거칠기를 과장했어요).'},
  {match:/^polished wafer/,name:'연마한 웨이퍼',desc:'평탄하고 매끄럽게 다듬은 표면이에요.'},
  {match:/^finished blank wafer/,name:'베어 웨이퍼',desc:'회로를 만들기 전의 웨이퍼예요. 가장자리의 노치가 방향을 알려 줘요.'},
 ],
 done:'잉곳에서 웨이퍼까지 따라왔어요! 이제 웨이퍼 위에 회로를 만드는 공정을 배울 차례예요.',
 caution:'교육용 개념 모델이에요. 공정 시간, 원판 두께·간격, 표면 거칠기는 이해하기 쉽게 과장했어요.',
 refs:[{title:'삼성전자 반도체 뉴스룸 · 웨이퍼란 무엇일까요',url:'https://news.samsungsemiconductor.com/kr/반도체-8대-공정-1탄-웨이퍼란-무엇일까요/'},{title:'SUMCO · 웨이퍼 제조 과정',url:'https://www.sumcosi.com/english/products/process/'}]};

const oxiStages=(kind:'dry'|'wet'):GlbStage[]=>kind==='dry'?[
 {file:'dry_01_prepare.glb',title:'준비하기',play:'none',body:'웨이퍼와 산화 장치의 구조를 살펴봐요. 이번 공정은 산소(O₂)를 사용하는 건식 산화예요.',key:'산화로는 고온에서 반응이 일어나도록 돕는 장치예요.',hint:'웨이퍼 보트와 반응관을 눌러 이름을 확인해 보세요.'},
 {file:'dry_02_load.glb',title:'웨이퍼 투입하기',play:'once',body:'웨이퍼를 담은 보트가 산화로 안으로 이동해요. 웨이퍼가 반응할 공간에 놓이는 모습을 관찰해요.',key:'보트는 여러 장의 웨이퍼를 지지하는 홀더예요.',hint:'보트의 이동 경로와 웨이퍼의 배치를 살펴보세요.'},
 {file:'dry_03_oxidize.glb',title:'산화하기',play:'loop',body:'고온에서 산소가 실리콘과 반응해 이산화규소 막을 만들어요. 반응식은 Si + O₂ → SiO₂예요.',key:'건식 산화는 일반적으로 습식보다 느리지만 치밀한 산화막을 얻는 데 유리해요.',hint:'O₂ 표식을 따라 산화가 일어나는 위치를 찾아보세요.',note:'기체 표식은 방향을 보여주는 그래픽이에요. 유동 해석 결과가 아니에요.'},
 {file:'dry_04_unload.glb',title:'냉각 후 꺼내기',play:'once',body:'학습 화면에서는 냉각을 확인한 뒤 웨이퍼를 꺼내요. 실제 반출 방법과 시점은 장비 지침을 따라야 해요.',key:'냉각과 반출은 학습용으로 단순화한 순서예요.',hint:'보트가 반응관 밖으로 나오는 모습을 보세요.'},
 {file:'dry_05_growth_detail.glb',title:'산화막 성장 확대',play:'once',body:'산화막 아래의 실리콘이 반응에 사용돼요. 막은 단순히 위에 얹히는 것이 아니라 실리콘과 산화막의 경계에서 자라요.',key:'열산화는 실리콘을 소모하는 과정이에요.',hint:'원래 표면과 반응 후 경계의 위치를 비교해 보세요.'},
]:[
 {file:'wet_01_prepare.glb',title:'준비하기',play:'none',body:'이번 공정은 수증기(H₂O)를 사용하는 습식 산화예요. 웨이퍼를 물에 담그는 과정은 아니에요.',key:'수증기는 기체 상태의 물이에요.',hint:'H₂O 표시와 반응관을 확인해 보세요.'},
 {file:'wet_02_load.glb',title:'웨이퍼 투입하기',play:'once',body:'웨이퍼를 담은 보트가 산화로 안으로 이동해요. 투입 장면을 보며 웨이퍼가 놓이는 위치를 확인해요.',key:'장면의 기본 구조는 건식과 같고, 산화에 사용하는 기체가 달라요.',hint:'건식 장면과 비교해 공통 구조를 찾아보세요.'},
 {file:'wet_03_oxidize.glb',title:'산화하기',play:'loop',body:'고온에서 수증기가 실리콘과 반응해 산화막을 만들어요. 반응식은 Si + 2H₂O → SiO₂ + 2H₂예요.',key:'다른 조건을 같게 두면 일반적으로 건식보다 빠르게 성장해요.',hint:'H₂O 표식을 따라 반응 위치를 찾아보세요.',note:'표식은 이해를 돕는 그래픽이에요. 실제 기체가 눈에 보인다는 뜻은 아니에요.'},
 {file:'wet_04_unload.glb',title:'냉각 후 꺼내기',play:'once',body:'학습 화면에서는 냉각을 확인한 뒤 웨이퍼를 꺼내요. 실제 가스 전환과 반출 조건은 장비마다 달라요.',key:'애니메이션 시간은 실제 처리 시간을 뜻하지 않아요.',hint:'반출 장면을 순서대로 살펴보세요.'},
 {file:'wet_05_growth_detail.glb',title:'산화막 성장 확대',play:'once',body:'수증기가 산화막을 통과해 실리콘과 만나는 경계에서 반응해요. 실리콘이 소모되면서 산화막이 두꺼워져요.',key:'습식도 건식처럼 계면에서 성장하는 열산화예요.',hint:'실리콘 영역이 줄어들고 산화막이 자라는 모습을 확인해 보세요.'},
];
const oxidation:GlbLessonDef={id:'oxidation',title:'제2공정 · 산화',area:'8대 공정',dir:'oxidation',
 intro:'실리콘 웨이퍼를 산화시키면 표면에 이산화규소(SiO₂) 막이 생겨요. 산소를 쓰는 건식 산화와 수증기를 쓰는 습식 산화의 차이를 살펴보세요.',
 goals:['산화로의 구조와 웨이퍼 보트의 역할을 알아요.','건식(O₂)과 습식(H₂O) 산화의 차이를 비교해요.','산화막이 실리콘을 소모하며 계면에서 자란다는 것을 이해해요.'],
 tracks:[{id:'dry',label:'건식 산화',sub:'산소 O₂',stages:oxiStages('dry')},{id:'wet',label:'습식 산화',sub:'수증기 H₂O',stages:oxiStages('wet')}],
 parts:[
  {match:/^silicon wafer/,name:'실리콘 웨이퍼',desc:'산화막을 키울 웨이퍼예요. 보트에 세워 한꺼번에 처리해요.'},
  {match:/^animated quartz boat|^boat slot|^quartz boat rail|^cantilever paddle|^tube end cap/,name:'석영 보트',desc:'여러 장의 웨이퍼를 세워 담는 홀더예요. 패들에 실려 반응관 안팎으로 움직여요.'},
  {match:/^quartz process tube/,name:'석영 반응관',desc:'웨이퍼가 놓여 고온에서 산화가 일어나는 관이에요. 안이 보이도록 절개해 표현했어요.'},
  {match:/^heater winding|^cutaway insulation|^cutaway metal shell/,name:'히터 · 단열층',desc:'반응관을 고온으로 가열하고 열이 빠져나가지 않게 막아요.'},
  {match:/^end flange|^flange bolt/,name:'끝단 플랜지',desc:'반응관 끝을 막고 고정하는 부분이에요.'},
  {match:/^load station|^load table leg|^loader rail/,name:'로딩 스테이션',desc:'보트를 반응관으로 밀어 넣고 꺼내는 자리예요.'},
  {match:/^control panel|^controller heading|^gas selection|^mode$|^mode|^control button/,name:'제어 패널',desc:'가스와 운전 모드를 표시하는 학습용 화면이에요. 실제 장치 제어가 아니에요.'},
  {match:/^gas source module|^source |^gas supply|^gauge/,name:'가스 공급부',desc:'산화에 쓰는 기체를 공급해요. 건식은 산소(O₂), 습식은 수증기(H₂O)예요.'},
  {match:/^teaching gas flow marker/,name:'기체 표식',desc:'기체가 향하는 방향을 보여주는 표식이에요. 실제 유동 계산은 아니에요.'},
  {match:/^silicon substrate/,name:'실리콘 기판',desc:'반응에 쓰이며 조금씩 줄어드는 실리콘이에요.'},
  {match:/^growing sio2/,name:'이산화규소(SiO₂) 막',desc:'실리콘과 산화막의 경계에서 자라는 막이에요.'},
  {match:/^furnace base cabinet|^service door|^service handle|^leveling foot/,name:'산화로 본체',desc:'반응관과 히터, 제어부를 받치는 장비 몸체예요.'},
 ],
 done:'건식은 O₂, 습식은 H₂O! 두 방식 모두 실리콘을 소모하며 계면에서 산화막이 자라요.',
 caution:'교육용 개념 모델이에요. 막 두께·입자 크기·성장 시간은 이해를 위해 강조했고, 실제 작업은 장비 교육과 승인된 절차를 따라야 해요.',
 refs:[{title:'UTEP · Oxidation Basics'},{title:'University of Alberta nanoFAB · Silicon thermal oxidation calculator'}]};

const ffu:GlbLessonDef={id:'ffu',title:'FFU 장비 탐색',area:'장비',dir:'ffu',
 intro:'FFU는 팬과 필터가 함께 들어 있는 공기 공급 장치예요. 클린룸 천장에 설치된 FFU 안에서 공기가 어떻게 움직이고 여과되는지 살펴보세요.',
 goals:['각 부품의 이름과 역할을 연결해요.','팬의 송풍과 필터의 여과를 구분해요.','공기가 들어와 아래로 나가는 경로를 설명해요.'],
 tracks:[{id:'main',label:'FFU',sub:'',stages:[
  {file:'ffu_01_overview.glb',title:'외관 · 천장 위치',play:'none',body:'천장을 올려다보면 공기를 공급하는 FFU가 보여요. 먼저 전체 모양과 실내를 향한 출구 면을 찾아봐요.',key:'FFU는 천장에 설치할 수 있는 팬·필터 결합 장치예요.',hint:'시점을 돌려 천장 속 장치와 실내 쪽 출구를 비교해 보세요.'},
  {file:'ffu_02_exploded_components.glb',title:'가상으로 분해해서 보기',play:'once',body:'부품을 화면에서 띄워 보면 내부 구성이 드러나요. 부품을 눌러 각 부품이 맡은 일을 알아봐요.',key:'가상 분해는 위치 관계를 보여주는 학습 표현이에요.',hint:'하우징, 팬, 필터를 차례로 눌러 설명을 확인해 보세요.',note:'실제 장비를 분해하는 순서나 정비 방법이 아니에요.'},
  {file:'ffu_03_intake_and_blower.glb',title:'흡입 · 원심 블로워',play:'loop',body:'공기가 흡입구에서 팬 쪽으로 들어와요. 회전하는 원심 블로워가 공기를 바깥 방향으로 보내고, 내부 공간을 통해 필터 쪽으로 흐르게 해요.',key:'이 예시에서는 프리필터 → 블로워 → 분배 공간 순서로 관찰해요.',hint:'팬 회전을 멈추고 흡입 방향과 토출 방향을 비교해 보세요.'},
  {file:'ffu_04_hepa_filtration.glb',title:'HEPA 여과',play:'loop',body:'공기가 HEPA 필터를 통과하는 동안 입자가 필터 매체에 포집돼요. 팬의 송풍과 필터의 여과는 서로 다른 역할이에요.',key:'필터를 통과한 공기가 실내로 공급돼요.',hint:'필터 앞뒤의 공기 방향 표식을 살펴보세요.',note:'입자 포집이나 청정도는 계산하지 않아요. 100% 제거된다는 뜻도 아니에요.'},
  {file:'ffu_05_downward_supply.glb',title:'하향 공기 공급',play:'loop',body:'여과된 공기가 출구 면을 지나 아래쪽 공간으로 공급돼요. 여러 FFU와 클린룸 공조 구성이 함께 청정 환경을 유지해요.',key:'실제 흐름은 장비 배치, 장애물과 실내 조건의 영향을 받아요.',hint:'천장부터 작업 공간까지 화살표를 따라가 보세요.'},
  {file:'ffu_06_reassembly.glb',title:'가상 재조립하며 복습',play:'once',body:'띄워 두었던 부품을 원래 위치로 돌려놓아요. 조립된 모습에서도 흡입부터 여과와 공급까지의 경로를 다시 확인해요.',key:'공기 경로: 흡입 → 프리필터 → 팬·블로워 → 분배 공간 → HEPA → 출구 그릴 → 실내',hint:'부품의 이름과 역할을 떠올리며 재조립을 지켜보세요.'},
 ]}],
 parts:[
  {match:/^ec controller|^controller heat sink/,name:'제어부',desc:'팬 운전과 속도 등을 조절해요. 공기 경로의 한 단계가 아니라 팬 작동을 조절하는 부분이에요.'},
  {match:/^01 prefilter|^optional prefilter|^prefilter/,name:'프리필터 · 1차 필터',desc:'들어오는 공기의 비교적 큰 입자를 먼저 줄여요. 이 예시에서는 팬 앞쪽에 있어요.'},
  {match:/^02 cover/,name:'하우징 · 바깥 케이스',desc:'내부 부품을 지지하고 공기가 지나가는 공간을 만들어요.'},
  {match:/^03 blower|^animated centrifugal|^backward curved blade|^impeller|^motor/,name:'팬 · 모터',desc:'모터가 원심 블로워를 돌려 공기를 빨아들이고 밀어내요. 팬 자체가 미세 입자를 거르지는 않아요.'},
  {match:/^04 plenum/,name:'분배 공간',desc:'블로워에서 나온 공기가 필터 면으로 고르게 퍼지도록 하는 하우징 안쪽 공간이에요.'},
  {match:/^05 hepa/,name:'HEPA 필터',desc:'공기 중 입자를 필터 매체에서 포집해요. 필터 등급과 사양에 따라 성능이 달라요.'},
  {match:/^06 diffuser/,name:'그릴 · 디퓨저',desc:'출구 쪽 구조물로 필터 면을 보호하고 공기 공급을 도와요.'},
  {match:/^ceiling/,name:'천장 패널 · T그리드',desc:'FFU가 끼워지는 클린룸 천장 격자예요.'},
  {match:/^intake|^radial discharge|^downward supply|^flow to hepa/,name:'공기 방향 표식',desc:'공기가 향하는 방향을 보여주는 표식이에요. 실제 유동 해석 결과가 아니에요.'},
 ],
 done:'팬은 공기를 움직이고, 필터는 입자를 걸러줘요. 이제 FFU 안의 공기 흐름을 설명할 수 있어요!',
 caution:'교육용 예시 모델이에요. 부품 배치와 필터 구성은 제품마다 다르고, 분해·화살표는 실제 정비 절차나 유동 해석 결과가 아니에요.',
 refs:[{title:'Camfil · CamFFU 공식 제품 소개',url:'https://www.camfil.com/en-us/products/housings-frames--louvers/fan-filter-units/camffu'},{title:'Terra Universal · Filter/Fan Unit 안내서',url:'https://www.terrauniversal.com/media/asset-library/1/8/1800-34-CE-Fan-Filter-Unit-20260508.pdf'}]};

const rie:GlbLessonDef={id:'rie',title:'식각 장비 · RIE',area:'장비',dir:'rie',
 intro:'마스크가 열린 부분의 물질을 제거하면 패턴이 아래층으로 옮겨져요. 플라즈마의 화학 반응과 이온의 방향성이 함께 작용하는 RIE를 살펴보세요.',
 goals:['챔버, 가스 공급, 전극과 RF, 지지대, 배기의 역할을 구분해요.','이온의 방향성과 화학 반응이 식각에 기여함을 알아요.','마스크 보호 영역과 노출 영역의 변화를 비교해요.'],
 tracks:[{id:'main',label:'RIE',sub:'',stages:[
  {file:'rie_01_overview.glb',title:'외관 살펴보기',play:'none',body:'RIE 식각기의 전체 모습을 둘러봐요. 웨이퍼가 들어가는 챔버와 연결된 장치들이 어디에 있는지 찾아보세요.',key:'장비 외형만으로 반응 원리를 모두 볼 수는 없어요.',hint:'시점을 돌려 챔버, 가스 공급 경로, 배기 연결을 찾아보세요.'},
  {file:'rie_02_exploded_parts.glb',title:'부품 가상 분해',play:'once',body:'부품을 화면에서 띄워 내부 구성을 살펴봐요. 챔버와 전극, 웨이퍼 지지대, 가스·배기 경로의 관계를 확인해요.',key:'분해 장면은 부품의 위치를 설명하는 학습용 표현이에요.',hint:'부품을 눌러 담당하는 역할을 확인해 보세요.'},
  {file:'rie_03_wafer_load.glb',title:'웨이퍼 투입',play:'once',body:'패턴이 있는 마스크로 일부가 덮인 웨이퍼가 챔버 안으로 이동해요. 기판이 지지대에 놓이는 모습을 관찰해요.',key:'마스크가 열린 부분과 덮인 부분을 먼저 구분해요.',hint:'웨이퍼 표면을 확대해 보호 영역과 노출 영역을 찾아보세요.'},
  {file:'rie_04_evacuation.glb',title:'배기 살펴보기',play:'none',body:'챔버 안의 기체를 배출해 낮은 압력의 공정 환경을 준비해요. 기체가 배기 경로로 이동하는 방향을 관찰해요.',key:'실제 공정에서는 가스 공급과 배기를 함께 조절해요.',hint:'배기 방향 표시를 따라 기체가 나가는 경로를 찾아보세요.',note:'화면 속 표시나 시간이 실제 압력·배기 시간을 뜻하지 않아요.'},
  {file:'rie_05_gas_supply.glb',title:'가스 공급',play:'loop',body:'공정 가스가 챔버로 들어와요. 기체를 넣는 것과 플라즈마를 만드는 것은 같은 단계가 아니에요.',key:'가스 종류와 조합은 식각할 재료와 조건에 맞춰 정해져요.',hint:'가스 입구와 배기 출구를 함께 확인해 보세요.'},
  {file:'rie_06_plasma_etch.glb',title:'플라즈마 식각',play:'loop',body:'RF 에너지로 형성된 플라즈마에서 반응성 종과 이온이 식각에 기여해요. 화학 반응과 방향성 있는 이온의 작용으로 노출된 물질이 제거돼요.',key:'RIE는 물리적 작용과 화학 반응이 함께 관여하는 건식 식각이에요.',hint:'이온 방향 표시와 노출부를 번갈아 살펴보세요.',note:'이온 화살표는 개념 표현이에요. 모든 입자가 같은 방향으로 움직이는 것은 아니에요.'},
  {file:'rie_07_end_unload.glb',title:'웨이퍼 반출',play:'once',body:'식각이 끝난 웨이퍼가 장비 밖으로 이동하는 모습을 봐요. 실제 반출은 장비가 정한 종료·퍼지·압력 조건을 충족한 뒤 이뤄져요.',key:'화면은 공정 종료와 반출 사이의 절차를 단순화했어요.',hint:'반출된 웨이퍼를 확인하고 다음 단면 비교로 넘어가 보세요.'},
  {file:'rie_08_masked_etch_magnified.glb',title:'마스크 · 노출부 단면 비교',play:'once',body:'마스크가 덮인 곳과 열린 곳을 비교해요. 노출된 층이 제거되면서 마스크의 패턴이 아래 물질로 옮겨져요.',terms:[['선택비','재료별 식각 속도의 차이. 마스크도 조금씩 식각될 수 있어요.']],hint:'식각 전후 마스크와 대상층의 변화를 확인해 보세요.',note:'항상 완벽한 수직 벽이 만들어지는 것은 아니에요. 결과는 가스·재료·조건에 따라 달라요.'},
 ]}],
 parts:[
  {match:/^mask - finite|^label mask/,name:'마스크(보호막)',desc:'남길 영역을 덮어 보호해요. 마스크도 조금씩 식각될 수 있어요.'},
  {match:/^protected target film/,name:'보호된 대상막',desc:'마스크 아래에 있어 식각되지 않고 남는 부분이에요.'},
  {match:/^exposed target layer|^label target/,name:'노출된 대상막',desc:'마스크가 열린 곳이라 식각되며 얇아지는 층이에요.'},
  {match:/^substrate|^label substrate/,name:'기판',desc:'대상막 아래의 바탕 재료예요.'},
  {match:/^ion concept|^ion direction/,name:'이온 방향 표식',desc:'이온이 웨이퍼 쪽으로 향하는 방향성을 보여주는 개념 표시예요.'},
  {match:/^plasma concept marker|^label plasma/,name:'플라즈마 표식',desc:'RF 에너지로 만들어진 플라즈마를 나타내는 개념 표시예요.'},
  {match:/^wafer|^mask strip/,name:'웨이퍼 · 마스크',desc:'일부가 마스크로 덮인 웨이퍼예요. 열린 부분만 식각돼요.'},
  {match:/^grounded upper electrode/,name:'위 전극(접지)',desc:'아래 전극과 함께 전기장을 만들어 플라즈마 형성에 관여해요.'},
  {match:/^rf powered lower electrode|^ceramic rf isolator/,name:'아래 전극 · 웨이퍼 지지대',desc:'웨이퍼를 받치고 RF 전원과 연결되어 이온의 에너지와 방향에 관여해요.'},
  {match:/^rf generator|^rf cable|^label rf/,name:'RF 전원 · 매칭부',desc:'고주파 전력을 공급해요. RF는 가스가 흐르는 관이 아니에요.'},
  {match:/^gas supply pipe|^mass flow module|^label gas|^gas outlet|^gas direction/,name:'가스 공급부',desc:'식각에 필요한 기체가 챔버로 들어오는 경로예요. 가스는 제거할 재료와 공정에 따라 달라요.'},
  {match:/^exhaust|^vacuum pump|^label vacuum|^pump cooling fin|^evacuation|^exhaust direction/,name:'배기부',desc:'챔버의 기체와 반응 생성물을 내보내 압력과 공정 분위기를 유지해요.'},
  {match:/^chamber cutaway wall|^bottom chamber flange|^lid|^flange bolt/,name:'챔버',desc:'웨이퍼가 놓이고 공정 분위기가 만들어지는 반응 공간이에요. 안이 보이도록 절개했어요.'},
  {match:/^control console|^display|^control button|^label rie/,name:'제어 콘솔',desc:'공정 조건을 설정하고 상태를 보는 곳이에요(학습용 표현).'},
  {match:/^equipment cabinet|^service access panel|^handle|^vent slot/,name:'장비 본체',desc:'챔버와 전원·배관을 받치는 캐비닛이에요.'},
 ],
 done:'마스크는 남길 영역을 보호하고, 노출된 물질은 식각돼요. RIE의 이온 방향성과 화학 반응이 패턴 형성에 함께 작용해요!',
 caution:'교육용 개념 모델이에요. 실제 장비의 운전·정비·안전 절차가 아니며, 실제 작업은 해당 장비 교육과 승인된 절차를 따라야 해요.',
 refs:[{title:'Oxford Instruments · Reactive ion etching',url:'https://plasma.oxinst.com/technologies/rie'},{title:'EPFL CMi · Etch definitions'}]};

const mosfet:GlbLessonDef={id:'mosfet',title:'MOSFET 설계 기초',area:'설계',dir:'nmos',
 intro:'게이트 아래에는 아주 얇은 절연막이 있어요. 게이트 전압을 바꾸면 반도체 표면에 전자가 모여 통로를 만들 수 있어요. 통로가 생기는 조건과 전류가 흐르는 조건을 나누어 살펴봐요.',
 goals:['NMOS의 게이트 · 절연막 · 소스 · 드레인 · 바디를 구분해요.','채널 형성과 전류가 흐르는 조건을 나눠서 이해해요.','VGS, 채널 폭 W, 길이 L이 전류에 주는 경향을 비교해요.'],
 tracks:[{id:'main',label:'NMOS',sub:'',stages:[
  {file:'nmos_01_structure.glb',title:'NMOS 구조 살펴보기',play:'once',body:'소스와 드레인 사이, 게이트 아래의 표면을 찾아보세요. 게이트는 절연막을 사이에 두고 이 표면의 전하 상태를 조절해요.',
   terms:[['게이트 G','통로를 조절하는 전극. 소스에 대한 게이트 전압 VGS가 중요해요.'],['게이트 절연막','전극과 반도체를 분리하면서 전기장의 영향을 전달해요.'],['n+ 소스 · 드레인','불순물을 많이 넣은 n형 영역. +는 높은 도핑 농도를 뜻해요.'],['p형 바디 B','소자가 만들어진 바탕. 이 모델에서는 소스에 연결했어요.']],
   hint:'옆에서 절연막을 찾고, 위에서 소스와 드레인 사이를 확인해 보세요.',note:'게이트와 절연막이 분리됐다가 다시 붙는 움직임은 구조를 보여주기 위한 표현이에요.'},
  {file:'nmos_02_channel_flow.glb',title:'채널과 전류는 구분해요',play:'once',body:'VGS를 충분히 높이면 게이트 아래 표면에 전자가 모여 n형처럼 동작하는 반전 채널이 생겨요. 여기에 드레인과 소스 사이 전압 VDS가 있으면 전자가 한쪽으로 이동할 수 있어요.',
   terms:[['낮은 VGS','강한 반전 채널이 아직 없어요.'],['충분한 VGS','게이트 아래에 전자가 모인 통로가 생겨요. VDS=0이면 순전류는 없어요.'],['채널 + VDS > 0','전자는 소스 S → 드레인 D, 관례적 전류는 드레인 D → 소스 S로 흘러요.']],
   hint:'파란 표식(전자)과 주황 표식(전류)의 방향을 비교해 보세요.',note:'문턱 아래에서도 작은 전류가 흐를 수 있어요. 실제 동작은 매끄럽게 변해요.'},
  {file:'nmos_03_width_length.glb',title:'전압과 크기를 비교해요',play:'once',body:'전류는 게이트 전압뿐 아니라 채널의 폭과 길이에도 영향을 받아요. 다른 조건을 같게 두고 한 가지씩 바꾸며 차이를 살펴봐요.',
   terms:[['VGS','문턱보다 높은 범위에서 높이면 전류가 커지는 경향이 있어요.'],['W · 채널 폭','전류 방향에 수직인 너비. 넓히면 전류가 커지는 경향이 있어요.'],['L · 채널 길이','소스에서 드레인 방향의 거리. 길게 하면 전류가 작아지는 경향이 있어요.']],
   hint:'위에서 내려다보며 S↔D 방향의 L과, 그에 직각인 W 표시를 찾아보세요.',note:'단순 장채널 모델의 경향이에요. 실제 미세 소자에서는 단채널 효과 등이 중요해요.'},
 ]}],
 parts:[
  {match:/^gate electrode/,name:'게이트 G',desc:'절연막을 사이에 두고 아래 표면의 전하 상태를 조절하는 전극이에요. 소스와 드레인을 직접 잇는 다리는 아니에요.'},
  {match:/^gate oxide/,name:'게이트 절연막(SiO₂)',desc:'게이트와 반도체를 분리해요. 전하가 직접 통과하는 것을 막으면서 전기장의 영향을 전달해요.'},
  {match:/^source/,name:'n+ 소스 S',desc:'전자가 출발하는 n형 영역이에요. +는 도핑 농도가 높다는 뜻이에요.'},
  {match:/^drain/,name:'n+ 드레인 D',desc:'전자가 도착하는 n형 영역이에요. 이 예시에서는 소스보다 높은 전압이에요.'},
  {match:/^inversion channel/,name:'반전 채널',desc:'p형 바디 표면에 전자가 모여 n형처럼 동작하는 얇은 통로예요.'},
  {match:/^surface/,name:'반도체 표면',desc:'게이트 아래 채널이 생기는 p형 표면이에요.'},
  {match:/^body/,name:'p형 바디 B',desc:'정공이 다수 운반자인 바탕 영역이에요. 이 모델에서는 소스에 연결했어요.'},
  {match:/^electron s to d|^electron legend/,name:'전자 이동 표식',desc:'전자가 소스에서 드레인으로 이동하는 방향이에요.'},
  {match:/^current d to s|^current legend/,name:'전류 방향 표식',desc:'관례적 전류는 드레인에서 소스로 흘러요. 전자 이동과 반대예요.'},
  {match:/^dimension l|^label l/,name:'채널 길이 L',desc:'소스에서 드레인으로 이어지는 방향의 거리예요. 길수록 전류가 작아지는 경향이 있어요.'},
  {match:/^dimension w|^label w/,name:'채널 폭 W',desc:'전류 방향에 수직인 너비예요. 넓을수록 전류가 커지는 경향이 있어요.'},
  {match:/^bias/,name:'전압 조건 표시',desc:'지금 장면의 VGS · VDS 조건을 보여주는 표시예요.'},
 ],
 done:'게이트 전압으로 채널을 만들고, VDS로 전류를 흐르게 해요. W와 L도 전류의 크기에 영향을 줘요!',
 caution:'층 두께와 전자 표시는 눈에 잘 보이게 과장했어요. 실제 전하 분포·전류 계산이나 소자 물리 시뮬레이션이 아니에요.',
 refs:[{title:'Toshiba · How do n-channel MOSFETs work',url:'https://toshiba.semicon-storage.com/us/semiconductor/knowledge/faq/mosfet/how-do-n-channel-mosfets-work.html'},{title:'TU Graz · n-channel MOSFET',url:'https://lampz.tugraz.at/~hadley/psd/L10/nmosfet.html'}]};

const circuit:GlbLessonDef={id:'circuit',title:'전기 · 논리 기초',area:'설계',dir:'circuit',
 intro:'스위치를 열고 닫을 때 무엇이 달라질까요? 전압과 전류를 구분하고, 두 가지 신호로 조건을 판단하는 회로를 살펴봐요.',
 goals:['전압이 존재하는 것과 전류가 흐르는 것을 구분해요.','디지털 0과 1이 나타내는 신호 상태를 알아요.','네 가지 입력 조합으로 AND의 규칙을 확인해요.'],
 tracks:[{id:'main',label:'회로',sub:'',stages:[
  {file:'circuit_01_voltage_current_switch.glb',title:'전압 · 전류 · 스위치',play:'none',interact:'switch',body:'전압은 두 지점 사이의 전위차예요. 전류는 전하의 흐름이에요. 스위치를 닫으면 전류가 흐를 수 있는 길이 이어져 램프가 켜지고, 열면 길이 끊어져 램프가 꺼져요.',
   terms:[['전원','회로에 전위차를 줘요. 전압이 있다고 항상 전류가 흐르지는 않아요.'],['스위치','전류가 흐를 길을 잇거나 끊어요. 열린 스위치 양끝에도 전압은 있을 수 있어요.'],['저항','전류의 크기를 제한해요.'],['램프','켜짐과 꺼짐으로 회로 상태를 보여줘요.']],
   hint:'스위치를 눌러 열고 닫으며 램프와 전류 화살표를 비교해 보세요.',note:'화살표는 +극에서 -극으로 향하는 관례적 전류 방향이에요. 금속 안 전자의 이동과는 반대예요.'},
  {file:'circuit_02_binary_signal.glb',title:'0과 1은 신호 상태예요',play:'none',interact:'signal',body:'디지털 회로는 신호를 LOW와 HIGH로 구분해요. 이 학습에서는 LOW를 0, HIGH를 1로 나타내요. 0은 전자가 없다는 뜻이 아니고, 1은 전자가 있다는 뜻도 아니에요.',
   terms:[['0 · LOW','낮은 전압 범위로 판단하는 상태 (예: 0 V)'],['1 · HIGH','높은 전압 범위로 판단하는 상태 (예: 3.3 V)']],
   hint:'스위치를 눌러 LOW와 HIGH를 바꿔 보세요.',note:'0 V와 3.3 V는 설명을 위한 예시예요. 실제 판정 범위는 소자와 전원 전압에 따라 달라요.'},
  {file:'circuit_03_and_input_output.glb',title:'둘 다 1일 때만, AND',play:'none',interact:'and',body:'입력 A와 B를 살펴보세요. AND는 두 입력이 모두 1일 때만 출력 Y가 1이 돼요. 하나라도 0이면 출력은 0이에요.',
   hint:'A=0을 유지한 채 B를 바꾸고, 다음에는 A=1에서 B를 바꿔 보세요. 언제 Y가 달라지나요?',note:'AND 모듈은 입력과 출력의 관계를 보여주는 개념 블록이에요. 실제 칩 내부 구조는 아니에요.'},
 ]}],
 parts:[
  {match:/^switch a|^signal switch/,name:'스위치',desc:'전류가 흐를 길을 잇거나 끊어요. 눌러서 바꿔 보세요.'},
  {match:/^input a/,name:'입력 A',desc:'눌러서 0과 1을 바꿔요.'},
  {match:/^input b/,name:'입력 B',desc:'눌러서 0과 1을 바꿔요.'},
  {match:/^power|^polarity/,name:'전원',desc:'회로에 전위차를 줘요. 전압이 있다는 것만으로 항상 전류가 흐르는 것은 아니에요.'},
  {match:/^resistor/,name:'저항',desc:'전류의 크기를 제한해요. 전기 에너지 일부를 열로 바꿔요.'},
  {match:/^lamp/,name:'램프',desc:'전기 에너지를 빛과 열로 바꿔요. 여기서는 켜짐·꺼짐으로 회로 상태를 보여줘요.'},
  {match:/^current arrow|^current note/,name:'전류 방향 표식',desc:'관례적 전류 방향이에요. 속도는 실제 전자 속도가 아니에요.'},
  {match:/^positive to switch|^switch to resistor|^resistor to lamp|^return wire|^a to and|^b to and|^y output|^signal input|^signal output/,name:'도선',desc:'부품 사이를 이어 전류나 신호가 지나가는 길이에요.'},
  {match:/^signal low|^signal high|^signal display|^example levels|^level warning/,name:'신호 표시',desc:'지금 신호가 LOW(0)인지 HIGH(1)인지 보여줘요.'},
  {match:/^signal source|^signal module|^logic power/,name:'신호 모듈',desc:'스위치 상태를 LOW/HIGH 신호로 바꿔 보내는 개념 블록이에요.'},
  {match:/^and /,name:'AND 모듈',desc:'두 입력이 모두 1일 때만 1을 내보내는 논리 블록이에요.'},
  {match:/^output y/,name:'출력 Y 표시등',desc:'Y=1이면 켜지고, Y=0이면 꺼져요.'},
  {match:/^truth/,name:'진리표',desc:'네 가지 입력 조합과 출력 Y를 정리한 표예요. 지금 조합의 줄이 강조돼요.'},
  {match:/^logic dc supply|^module power|^supply caption/,name:'논리 전원',desc:'AND 모듈이 동작하도록 전원을 공급해요.'},
 ],
 done:'두 조건이 모두 참이어야 결과가 참이 되는 규칙, AND를 확인했어요!',
 caution:'교육용 개념 모델이에요. 전압·전류의 실제 계산이나 부품 특성을 검증하는 시뮬레이터가 아니며, 실제 배선·실험 안전 안내를 대신하지 않아요.',
 refs:[{title:'Renesas · Elemental Digital Circuits',url:'https://www.renesas.com/en/support/engineer-school/digital-circuits-01-and-circuit-or-circuit-not-circuit'}]};

export const glbLessons:Record<GlbLessonId,GlbLessonDef>={wafer,oxidation,ffu,rie,mosfet,circuit};
export const isGlbLesson=(id:string):id is GlbLessonId=>id in glbLessons;
export const normName=(n:string)=>n.replace(/_+/g,' ').trim().toLowerCase();
export const modelUrl=(def:GlbLessonDef,file:string)=>`models/${def.dir}/${file}`;
