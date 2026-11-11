import {useId} from 'react';
import './fallback.css';
import {ffuParts} from './ffuParts';

type WaferProps={stage:number;progress:number;selected:number;onSelect:(n:number)=>void};
type EquipmentProps={kind:'gown'|'ffu';selected:number;onSelect:(n:number)=>void;step:number};
const waferLabels=['다이','스크라이브 레인','가장자리','노치'];
const stageLabels=['준비된 잉곳','와이어로 얇은 원판 분리','가장자리 다듬기','평탄도 다듬기','가공 손상층 감소','표면 연마','회로 없는 빈 웨이퍼','여러 후속 공정에서 회로 형성','회로 형성 이후의 패턴 웨이퍼'];
function ModeNotice(){return <p className="learning-fallback-mode"><span aria-hidden="true">◇</span> 2D 학습 모드 <small>이 브라우저에서 3D를 사용할 수 없어 개념 그림으로 보여드려요.</small></p>}
export function WaferFallback({stage,progress,selected,onSelect}:WaferProps){
 const id=useId().replace(/:/g,'');const amount=Math.max(0,Math.min(100,progress))/100;
 return <div className="learning-fallback wafer-fallback"><ModeNotice/><svg className="learning-fallback-figure" viewBox="0 0 420 210" role="img" aria-label={stageLabels[stage]||'웨이퍼 개념 그림'}>
  <defs><linearGradient id={id+'metal'} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dce2e8"/><stop offset=".5" stopColor="#8c9aa8"/><stop offset="1" stopColor="#e9eef3"/></linearGradient><clipPath id={id+'wafer'}><ellipse cx="210" cy="102" rx="100" ry="67"/></clipPath></defs>
  {stage<=1?<g><path d="M105 66 L285 66 A38 63 0 0 1 285 192 L105 192Z" transform="translate(0 -23)" fill={'url(#'+id+'metal)'} stroke="#71808e" strokeWidth="2"/><ellipse cx="105" cy="106" rx="36" ry="63" fill="#a6b2bf" stroke="#71808e" strokeWidth="2"/><ellipse cx="285" cy="106" rx="36" ry="63" fill="#d5dce3" stroke="#71808e" strokeWidth="2"/>{stage===1&&<><path d={`M258 30V${38+amount*138}`} stroke="#f58a27" strokeWidth="4"/><path d="M258 30V176" stroke="#f58a27" strokeDasharray="4 5" fill="none" opacity=".35"/>{amount>.75&&<ellipse cx={285+(amount-.75)*80} cy="106" rx="8" ry="63" fill="#dce3e9" stroke="#71808e" strokeWidth="2"/>}</>}<text x="210" y="199" textAnchor="middle">{stageLabels[stage]}</text></g>:<g>
   <ellipse cx="210" cy="110" rx="100" ry="67" fill="#7b8e9e"/>
   <ellipse cx="210" cy="102" rx="100" ry="67" fill={'url(#'+id+'metal)'} stroke={stage===8&&selected===2?'#ed7b19':'#738594'} strokeWidth={stage===8&&selected===2?5:2}/>
   {stage>=2&&stage<=5&&<><ellipse cx="210" cy="102" rx="90" ry="58" fill="none" stroke="#f9e6d2" strokeWidth={stage===2?6:2} strokeDasharray={stage<5?'5 7':undefined} opacity={1-amount*.6}/><g transform={`translate(${stage===2?279:165+amount*88} ${stage===2?130:85})`}><ellipse rx="23" ry="14" fill="#ffb46b" stroke="#cc7527" strokeWidth="2"/><path d="M-18 -2L18 -2" stroke="#fff4e8" strokeWidth="3"/></g></>}
   {stage===8&&<><g clipPath={'url(#'+id+'wafer)'}>{Array.from({length:7},(_,row)=>Array.from({length:9},(_,col)=><rect key={row+'-'+col} x={113+col*22} y={38+row*19} width="18" height="15" rx="1" fill={selected===0&&row===3&&col===4?'#ffab5c':'#8298b2'} stroke="#c8d6e2" strokeWidth=".7"/>))}{selected===1&&<path d="M209 30V173M110 94H312" stroke="#ff9c42" strokeWidth="4"/>}</g><path d="M200 168L210 156L220 168" fill="#f7f7f7" stroke={selected===3?'#ed7b19':'#738594'} strokeWidth={selected===3?4:2}/></>}
   <text x="210" y="199" textAnchor="middle">{stageLabels[stage]}</text>
  </g>}
 </svg>{stage===8?<div className="learning-fallback-choices" aria-label="그림에서 웨이퍼 구조 선택">{waferLabels.map((label,i)=><button key={label} type="button" className={selected===i?'selected':''} aria-pressed={selected===i} aria-label={'그림에서 '+label+' 선택'} onClick={()=>onSelect(i)}>{label}</button>)}</div>:<p className="learning-fallback-caption">{stage>=1&&stage<=5?'아래 진행 버튼으로 단계별 변화를 확인하세요.':'개념을 단순화한 그림 · 실제 치수나 작업 조건이 아닙니다.'}</p>}</div>;
}
export function EquipmentFallback({kind,selected,onSelect,step}:EquipmentProps){
 const id=useId().replace(/:/g,'');const names=['팬','필터','하우징','흡입 그릴','EC 모터','프레임·밀봉부','제어 모듈','여재 보호망'];
 return <div className="learning-fallback equipment-fallback"><ModeNotice/>{kind==='ffu'?<><svg className="learning-fallback-figure" viewBox="0 0 420 210" role="img" aria-label="FFU 개념 단면도. 흡입 그릴, 팬, EC 모터, 하우징, 제어 모듈, 필터 프레임과 밀봉부, 주름 여재, 여재 보호망을 구분한 그림">
  <defs><pattern id={id+'filter'} width="12" height="14" patternUnits="userSpaceOnUse"><path d="M0 14L6 0L12 14" fill="none" stroke="#7893a5" strokeWidth="2"/></pattern><pattern id={id+'mesh'} width="9" height="8" patternUnits="userSpaceOnUse"><path d="M0 0L9 8M9 0L0 8" fill="none" stroke={selected===7?'#e4822f':'#8499aa'} strokeWidth=".8"/></pattern></defs>
  <rect x="96" y="37" width="228" height="145" rx="10" fill="#e9edf0" stroke={selected===2?'#ed7b19':'#899ba9'} strokeWidth={selected===2?5:3}/>
  <rect x="111" y="48" width="198" height="116" rx="5" fill="#fafcfd"/>
  <g stroke={selected===3?'#ed7b19':'#7c909f'} strokeWidth={selected===3?3:2}><rect x="167" y="20" width="86" height="14" rx="4" fill="#edf2f6"/>{Array.from({length:8},(_,i)=><path key={i} d={`M${174+i*10} 21V33`}/>)}</g>
  <circle cx="210" cy="83" r="34" fill="#e4ebf0" stroke={selected===0?'#ed7b19':'#748b9e'} strokeWidth={selected===0?4:2}/>
  <g transform="translate(210 83)">{Array.from({length:12},(_,i)=><path key={i} d="M12 0Q26 -4 28 -14L31 -10Q28 0 14 5Z" transform={`rotate(${i*30})`} fill={selected===0?'#e9a666':'#879caa'} stroke="#708796" strokeWidth=".6"/>)}<circle r="12" fill={selected===4?'#ffbd7b':'#697f90'} stroke={selected===4?'#ed7b19':'#536b7e'} strokeWidth={selected===4?4:2}/><circle r="4" fill="#d5e0e8"/></g>
  <path d="M224 83H267V69H331" fill="none" stroke="#758898" strokeWidth="2"/>
  <rect x="332" y="57" width="44" height="44" rx="4" fill={selected===6?'#fff0dc':'#d9e2e8'} stroke={selected===6?'#ed7b19':'#748b9e'} strokeWidth={selected===6?4:2}/><rect x="340" y="64" width="27" height="13" rx="2" fill="#748f9c"/><circle cx="345" cy="88" r="3" fill="#a4ba9f"/><path d="M354 88H366" stroke="#748b9e" strokeWidth="2"/>
  <rect x="113" y="124" width="194" height="39" rx="3" fill="#dbe4e9" stroke={selected===5?'#ed7b19':'#8093a1'} strokeWidth={selected===5?5:2}/><path d="M117 128H303" stroke={selected===5?'#c16517':'#4b626a'} strokeWidth="3"/>
  <rect x="121" y="133" width="178" height="24" fill={'url(#'+id+'filter)'} stroke={selected===1?'#ed7b19':'#7893a5'} strokeWidth={selected===1?4:1}/>
  <rect x="116" y="169" width="188" height="10" rx="1" fill={'url(#'+id+'mesh)'} stroke={selected===7?'#ed7b19':'#8499aa'} strokeWidth={selected===7?3:1}/>
  <path d="M146 185V200M210 185V200M274 185V200M140 193L146 200L152 193M204 193L210 200L216 193M268 193L274 200L280 193" fill="none" stroke="#d08c51" strokeWidth="2"/>
  <text x="82" y="88" textAnchor="end">팬·모터</text><text x="82" y="149" textAnchor="end">여재</text><text x="354" y="117" textAnchor="middle">제어부</text>
 </svg><div className="learning-fallback-choices ffu-fallback-choices" aria-label="그림에서 FFU 구성 요소 선택">{names.map((name,i)=><button key={name} type="button" className={selected===i?'selected':''} aria-pressed={selected===i} aria-label={'그림에서 '+name+' 선택'} title={ffuParts[i].name} onClick={()=>onSelect(i)}>{name}</button>)}</div><p className="learning-fallback-caption">{selected>=0&&selected<ffuParts.length?<><strong>{ffuParts[selected].name}</strong><br/></>:null}개념 단면도 · 실제 설계·유동 해석이 아닙니다.</p></>:<><svg className="learning-fallback-figure" viewBox="0 0 420 210" role="img" aria-label="클린룸 복장의 후드, 방진복, 장갑, 신발 덮개 구성 요소 그림. 착용 순서 안내가 아닙니다.">
  <g fill="#edf1f5" stroke="#8798a6" strokeWidth="2">
   <path d="M61 83V63C61 24 119 24 119 63V83L105 94H75Z" stroke={step===1?'#ed7b19':undefined}/><ellipse cx="90" cy="62" rx="17" ry="23" fill="#fafafa"/>
   <path d="M176 37L157 52L136 100L155 108L173 75V121H247V75L265 108L284 100L263 52L244 37L227 49H193Z" stroke={step===2?'#ed7b19':undefined}/><path d="M173 121L170 185H199L210 138L221 185H250L247 121Z"/><path d="M210 52V120" fill="none" strokeDasharray="4 3"/>
   <path d="M318 89V57Q323 49 328 57V37Q333 29 338 37V54V31Q343 25 348 31V54V36Q353 30 358 36V64L364 57Q372 54 373 62L361 96Q348 111 334 103Z" stroke={step===3?'#ed7b19':undefined}/>
   <path d="M70 136H96V159L113 166Q124 175 117 181H64V157Z"/><path d="M320 143H346V166L363 173Q374 182 367 188H314V164Z"/>
  </g><g><text x="90" y="113" textAnchor="middle">후드</text><text x="210" y="204" textAnchor="middle">방진복</text><text x="345" y="125" textAnchor="middle">장갑</text><text x="90" y="204" textAnchor="middle">신발 덮개</text></g>
 </svg><p className="learning-fallback-caption">복장 구성 요소를 살펴보는 그림입니다.<br/>착용 순서·적합성은 시설의 승인된 절차로 확인하세요.</p></>}</div>;
}
