import {Icon,type IconName} from './Icon';
import type React from 'react';
import {useEffect,useRef,useState} from 'react';
import type {KeyboardEvent,PointerEvent} from 'react';
import {Scene} from './EquipmentScene';
import {MosfetScene} from './MosfetScene';
import './selection-catalog.css';
export type CatalogModule='gown'|'ffu'|'wafer'|'mosfet'|'photo';
export type CatalogTab='all'|'process'|'equipment'|'design';
const modules={
 photo:{title:'제3공정 · 포토',sub:'도포부터 현상까지',copy:'양성 PR의 도포·노광·현상을 연결하고 빛으로 만든 패턴을 확인해요.',symbol:'▥',label:'포토공정 선택'},
 gown:{title:'클린룸 복장 탐색',copy:'착용품을 한 번 눌러 입고, 예시 순서와 역할을 확인해요.',symbol:'♧',label:'클린룸 선택'},
 ffu:{title:'FFU 장비 탐색',copy:'공기의 흐름과 장비 구성 요소를 눈으로 확인해요.',symbol:'▧',label:'FFU 선택'},
 wafer:{title:'제1공정 · 웨이퍼 제조',sub:'잉곳부터 웨이퍼까지',copy:'잉곳 절단부터 빈 웨이퍼와 회로 구조까지 탐색해요.',symbol:'◎',label:'웨이퍼 선택'},
 mosfet:{title:'MOSFET 설계 기초',copy:'구조를 살펴보고 전압과 W/L을 바꾸며 전류의 변화를 확인해요.',symbol:'▤',label:'MOSFET 선택'}
};
const glyph:Record<CatalogModule,IconName>={photo:'grid-3x3-gap',gown:'person-standing',ffu:'fan',wafer:'record-circle',mosfet:'boxes'};
const tabs:{id:CatalogTab;name:string;items:CatalogModule[]}[]=[{id:'process',name:'8대 공정',items:['wafer','photo']},{id:'equipment',name:'장비',items:['gown','ffu']},{id:'design',name:'설계',items:['mosfet']},{id:'all',name:'전체',items:['wafer','photo','gown','ffu','mosfet']}];

const area:Record<CatalogModule,string>={wafer:'8대 공정',photo:'8대 공정',gown:'장비',ffu:'장비',mosfet:'설계'};
/** 카드 앞면 그림. 3D 장면은 정면 카드에서 멈춰 있을 때만 그려요(WebGL 개수 절약) */
export function Preview({id,live,gid}:{id:CatalogModule;live:boolean;gid:string}){
 return <div className="selected-model catalog-preview" aria-hidden="true">{
  id==='photo'?<svg viewBox="0 0 400 280"><rect x="40" y="180" width="320" height="55" rx="5" fill="#819eb5"/>{[40,170,300].map(x=><rect key={x} x={x} y="150" width="60" height="30" fill="#ec9a44"/>)}<path d="M130 65v65m-8-10 8 10 8-10M260 65v65m-8-10 8 10 8-10" fill="none" stroke="#bd903e" strokeWidth="4"/><text x="200" y="260" textAnchor="middle" fill="#526a7c" fontSize="14">빛 → PR 패턴 · 양성 PR 예시</text></svg>:
  id==='wafer'?<svg viewBox="0 0 400 280"><defs><linearGradient id={gid} x1="0" x2="1"><stop stopColor="#9ab7c9"/><stop offset=".5" stopColor="#f2f8fb"/><stop offset="1" stopColor="#617e96"/></linearGradient></defs><ellipse cx="200" cy="154" rx="143" ry="82" fill={`url(#${gid})`} stroke="#577791" strokeWidth="5"/><ellipse cx="200" cy="145" rx="143" ry="82" fill="none" stroke="#b4ccd9" strokeWidth="3"/><path d="M84 133h232M76 155h248M92 178h216M118 199h164M118 112h164M145 82v126M180 67v151M215 65v153M250 72v139M285 87v111" stroke="#7895ab" strokeWidth="1"/><text x="200" y="253" textAnchor="middle" fill="#526a7c" fontSize="14">웨이퍼 구조 · 개념 이미지</text></svg>:
  live&&(id==='ffu'||id==='gown')?<Scene kind={id} step={id==='gown'?4:0} playing={false} exploded={true} flow={true} selected={-1} onSelect={()=>{}} reset={0}/>:
  live&&id==='mosfet'?<MosfetScene selected="gate" onSelect={()=>{}} channel={true} saturated={false} reset={0}/>:
  <span className="catalog-glyph"><Icon name={glyph[id]} size={48}/></span>}</div>;
}

/* 학습 카드 캐러셀
   카드 3장 이상: 원기둥 캐러셀 — 카드를 원기둥 둘레에 세우고 마우스로 돌려 봐요.
   카드 2장 이하: 평평한 카드 넘기기 — 두 장만 나란히 두고 좌우로 넘겨요(끝에서 살짝 버팀, 되풀이 없음).
   - 원기둥에서는 둘레를 채우려고 같은 카드를 되풀이해요(최소 10칸)
   - 정면과 바로 옆 두 장, 모두 3장만 또렷하게 보이고 나머지는 흐려져요
   - 끌면 손을 따라 돌고, 놓으면 속도만큼 더 돌다가 가장 가까운 카드에서 멈춰요
   - 옆 카드를 누르면 그 카드가 정면으로 와요 */
export function SelectionCatalog({selected,tab,onSelect,onTab,onOpen}:{selected:CatalogModule;tab:CatalogTab;onSelect:(id:CatalogModule)=>void;onTab:(id:CatalogTab)=>void;onOpen:(id:CatalogModule,concepts?:boolean)=>void}){
 const items=tabs.find(t=>t.id===tab)!.items,n=items.length,index=Math.max(0,items.indexOf(selected)),current=items[index],info=modules[current];
 const flat=n<3,GAP=24;
 const slots=flat?n:n*Math.ceil(10/n),step=flat?1:360/slots;
 const surface=useRef<HTMLDivElement>(null),tabRefs=useRef<(HTMLButtonElement|null)[]>([]);
 const[vh,setVh]=useState(()=>typeof window==='undefined'?900:window.innerHeight),[width,setWidth]=useState(1000),[rot,setRot]=useState(-index*step),[dragging,setDragging]=useState(false);
 const rotRef=useRef(rot);rotRef.current=rot;
 const justDragged=useRef(false),gesture=useRef<{id:number;x:number;y:number;start:number;moved:boolean;samples:{t:number;r:number}[]}|null>(null);
 useEffect(()=>{const el=surface.current;if(!el||typeof ResizeObserver==='undefined')return;const ro=new ResizeObserver(()=>setWidth(el.clientWidth||1000));ro.observe(el);setWidth(el.clientWidth||1000);return()=>ro.disconnect()},[]);
 useEffect(()=>{const on=()=>setVh(window.innerHeight);window.addEventListener('resize',on);return()=>window.removeEventListener('resize',on)},[]);
 /* 카드 크기는 화면 높이에 맞춰요: 제목·탭·설명·버튼이 차지하는 높이(약 450px)를 빼고 남는 만큼, 200~330px */
 const cardH=Math.round(Math.max(200,Math.min(330,vh-468,width*.22*1.25))),cardW=Math.round(cardH/1.25);
 const radius=slots<2?0:Math.round(cardW/2/Math.tan(Math.PI/slots)*1.12);
 const clampF=(v:number)=>Math.min(0,Math.max(-(n-1),v));
 const frontSlot=(r:number)=>flat?-clampF(Math.round(r)):((Math.round(-r/step)%slots)+slots)%slots;
 /* 바깥에서 고른 카드(점·화살표·탭)로 가장 짧게 돌아가기 */
 const turnTo=(k:number,from=rotRef.current)=>{if(flat)return -k;const now=frontSlot(from);let best=now,dist=Infinity;for(let s=0;s<slots;s++){if(s%n!==k)continue;let d=s-now;d=((d%slots)+slots)%slots;if(d>slots/2)d-=slots;if(Math.abs(d)<Math.abs(dist)){dist=d;best=s}}void best;return Math.round(from/step)*step-dist*step};
 useEffect(()=>{if(gesture.current)return;if(n<2){setRot(0);return}if(flat){setRot(-index);return}if(frontSlot(rotRef.current)%n!==index)setRot(turnTo(index))},[index,tab]);
 useEffect(()=>{setRot(n<2?0:-index*step)},[tab]);
 const settle=(r:number)=>{const snapped=flat?clampF(Math.round(r)):Math.round(r/step)*step;setRot(snapped);const k=frontSlot(snapped)%n;if(k!==index)onSelect(items[k])};
 const cancel=()=>{const g=gesture.current;gesture.current=null;setDragging(false);if(g){if(surface.current?.hasPointerCapture?.(g.id))surface.current.releasePointerCapture(g.id);settle(rotRef.current)}};
 useEffect(()=>{const hidden=()=>{if(document.visibilityState==='hidden')cancel()};window.addEventListener('blur',cancel);document.addEventListener('visibilitychange',hidden);return()=>{window.removeEventListener('blur',cancel);document.removeEventListener('visibilitychange',hidden)}},[]);
 const chooseTab=(next:CatalogTab)=>{const nextItems=tabs.find(t=>t.id===next)!.items;onTab(next);if(!nextItems.includes(current))onSelect(nextItems[0])};
 const move=(amount:number)=>{if(n<2)return;const r=Math.round(rotRef.current/step)*step-amount*step;settle(r)};
 const rubber=(r:number)=>!flat?r:r>0?r*.3:r<-(n-1)?-(n-1)+(r+(n-1))*.3:r;
 const pick=(id:CatalogModule)=>{const k=items.indexOf(id);if(k<0)return;setRot(turnTo(k));onSelect(id)};
 const tabKey=(event:KeyboardEvent<HTMLButtonElement>,i:number)=>{let next=i;if(event.key==='ArrowRight')next=(i+1)%tabs.length;else if(event.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();chooseTab(tabs[next].id);tabRefs.current[next]?.focus()};
 const degPerPx=flat?1/(cardW+GAP):step/(cardW*.9);
 const down=(e:PointerEvent<HTMLDivElement>)=>{if(n<2||e.button!==0||e.isPrimary===false||gesture.current||(e.target as Element).closest('.catalog-cta,a,input'))return;gesture.current={id:e.pointerId,x:e.clientX,y:e.clientY,start:rotRef.current,moved:false,samples:[{t:performance.now(),r:rotRef.current}]};};
 const dragMove=(e:PointerEvent<HTMLDivElement>)=>{const g=gesture.current;if(!g||e.pointerId!==g.id)return;const dx=e.clientX-g.x;if(!g.moved){if(Math.abs(dx)<6)return;g.moved=true;setDragging(true);e.currentTarget.setPointerCapture?.(e.pointerId)}const r=rubber(g.start+dx*degPerPx);setRot(r);rotRef.current=r;g.samples.push({t:performance.now(),r});if(g.samples.length>6)g.samples.shift()};
 const up=(e:PointerEvent<HTMLDivElement>)=>{const g=gesture.current;if(!g||e.pointerId!==g.id)return;gesture.current=null;setDragging(false);if(!g.moved)return;justDragged.current=true;setTimeout(()=>{justDragged.current=false},0);
  const a=g.samples[0],b=g.samples[g.samples.length-1],v=(b.r-a.r)/Math.max(16,b.t-a.t);/* 도/ms */
  const projected=rotRef.current+Math.max(-step*2.5,Math.min(step*2.5,v*260));settle(projected)};
 /* 트랙패드·휠로 좌우 돌리기 — 멈추면 가까운 카드에 붙어요 */
 const wheelTimer=useRef<number|undefined>(undefined);
 const wheel=(e:React.WheelEvent<HTMLDivElement>)=>{if(n<2)return;const dx=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:0;if(!dx)return;setDragging(true);const r=rubber(rotRef.current-dx*degPerPx*.6);rotRef.current=r;setRot(r);window.clearTimeout(wheelTimer.current);wheelTimer.current=window.setTimeout(()=>{setDragging(false);settle(rotRef.current)},140)};
 const norm=(d:number)=>{d=((d+180)%360+360)%360-180;return d};
 const front=frontSlot(rot);
 return <div className="selection-catalog"><div className="catalog-tabs" role="tablist" aria-label="학습 분야">{tabs.map((t,i)=><button key={t.id} ref={el=>{tabRefs.current[i]=el}} id={`catalog-tab-${t.id}`} type="button" role="tab" aria-selected={tab===t.id} aria-controls="catalog-panel" tabIndex={tab===t.id?0:-1} onClick={()=>chooseTab(t.id)} onKeyDown={event=>tabKey(event,i)}>{t.name}<span>{t.items.length}</span></button>)}</div>
 <section id="catalog-panel" role="tabpanel" aria-labelledby={`catalog-tab-${tab}`}><span className="sr-only" role="status" aria-live="polite">{index+1} / {items.length} · {info.title}</span>
 <div className={'catalog-ring-stage catalog-track'+(n<2?' is-single':'')+(flat?' is-flat':'')} data-dragging={dragging||undefined} ref={surface} role="region" aria-roledescription="캐러셀" aria-label="학습 카드 둘러보기 · 끌어서 돌리기" tabIndex={0} style={{'--card-w':cardW+'px','--card-h':cardH+'px'} as React.CSSProperties}
  onKeyDown={event=>{if(event.target!==event.currentTarget)return;if(event.key==='ArrowRight'){event.preventDefault();move(1)}else if(event.key==='ArrowLeft'){event.preventDefault();move(-1)}}}
  onPointerDown={down} onPointerMove={dragMove} onPointerUp={up} onPointerCancel={cancel} onWheel={wheel}>
  {flat?<div key={tab} className="catalog-deck">
   {items.map((id,k)=>{const m=modules[id],d=k+rot,near=Math.min(1,Math.abs(d)),isFront=k===front&&!dragging;
    return <div key={id} className="ring-slot deck-slot" data-front={k===front||undefined} aria-hidden={k!==front} style={{transform:`translateX(${d*(cardW+GAP)}px) scale(${1-near*.08})`,filter:`brightness(${1-near*.42})`,zIndex:Math.round(100-near*10)} as React.CSSProperties}>
     <article className="ring-card" onClick={()=>{if(!justDragged.current&&k!==front)pick(id)}}>
      <Preview id={id} live={isFront} gid={'catalog-wafer-'+k}/>
      <div className="ring-card-foot"><strong>{m.title}</strong><span>{'sub' in m?m.sub:area[id]}</span></div>
     </article></div>})}
  </div>:
  <div key={tab} className="catalog-ring" style={{transform:`translateZ(${-radius}px) rotateY(${rot}deg)`}}>
   {Array.from({length:slots},(_,s)=>{const id=items[s%n],m=modules[id],d=norm(s*step+rot),near=Math.abs(d)/step,isFront=s===front&&!dragging;
    /* 정면 ±1칸까지 또렷하게, 그 너머는 빠르게 흐려짐 */
    const fade=near<=1?1:Math.max(0,1-(near-1)*1.6),light=1-Math.min(1,near)*.42;
    return <div key={s} className="ring-slot" data-front={s===front||undefined} aria-hidden={s!==front} style={{transform:`rotateY(${s*step}deg) translateZ(${radius+Math.max(0,1-near)*28}px)`,opacity:fade,filter:`brightness(${light})${near>1?` blur(${Math.min(6,(near-1)*8)}px)`:''}`,visibility:fade<=0.01?'hidden':undefined,zIndex:Math.round(100-near*10)} as React.CSSProperties}>
     <article className="ring-card" onClick={()=>{if(!justDragged.current&&s!==front)pick(id)}}>
      <Preview id={id} live={isFront} gid={'catalog-wafer-'+s}/>
      <div className="ring-card-foot"><strong>{m.title}</strong><span>{'sub' in m?m.sub:area[id]}</span></div>
     </article></div>})}
  </div>}
 </div>
 <div className="catalog-info" aria-hidden="true"><p>{info.copy}</p></div>
 <div className="catalog-paging" data-single={items.length<2||undefined}>{items.length>1&&<button type="button" className="catalog-arrow" aria-label="이전 학습 카드" disabled={flat&&index===0} onClick={()=>move(-1)}><Icon name="chevron-left"/></button>}<div className="selector-switch catalog-dots" aria-label="학습 카드 선택">{items.map(id=><button key={id} className={current===id?'selected':''} aria-label={modules[id].label} aria-pressed={current===id} onClick={()=>pick(id)}/>)}</div>{items.length>1&&<button type="button" className="catalog-arrow" aria-label="다음 학습 카드" disabled={flat&&index===n-1} onClick={()=>move(1)}><Icon name="chevron-left" className="flip"/></button>}</div><p className="catalog-hint">{items.length>1?'좌우로 넘기거나 화살표를 눌러 선택해요. 키보드 방향키로도 이동할 수 있어요.':'현재 설계 학습은 MOSFET 1개예요. 전체 탭에서 다른 학습도 함께 볼 수 있어요.'}</p>
 <div className="selector-actions catalog-actions"><button type="button" className="catalog-cta is-primary" onClick={()=>onOpen(current)}>공부하기<Icon name="arrow-right" className="trail"/></button>{(current==='ffu'||current==='gown')&&<button type="button" className="catalog-cta is-secondary" onClick={()=>onOpen(current,true)}>{current==='ffu'?'FFU 개념 확인':'클린룸 개념 확인'}</button>}</div></section></div>
}
