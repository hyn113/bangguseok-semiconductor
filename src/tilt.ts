import type {PointerEvent} from 'react';

/* 마우스를 따라 살짝 기울고 빛이 비치는 카드 (react-bits Tilted Card 방식).
   마우스·펜에서만 동작하고, 동작 줄이기 설정에서는 꺼져요. */
const reduced=()=>typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export function tiltHandlers(amplitude=10){
 return {
  onPointerMove:(e:PointerEvent<HTMLElement>)=>{if(e.pointerType==='touch'||reduced())return;const el=e.currentTarget,r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
   el.style.setProperty('--tilt-rx',`${(0.5-y)*amplitude}deg`);el.style.setProperty('--tilt-ry',`${(x-0.5)*amplitude}deg`);el.style.setProperty('--tilt-mx',`${x*100}%`);el.style.setProperty('--tilt-my',`${y*100}%`);el.dataset.tilting='true'},
  onPointerLeave:(e:PointerEvent<HTMLElement>)=>{const el=e.currentTarget;el.style.setProperty('--tilt-rx','0deg');el.style.setProperty('--tilt-ry','0deg');delete el.dataset.tilting},
 };
}
