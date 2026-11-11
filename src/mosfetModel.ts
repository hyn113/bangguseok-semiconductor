// Ideal long-channel enhancement NMOS. Voltages are source-referenced; body = source.
export type MosPart='gate'|'oxide'|'source'|'drain'|'body';
export const THRESHOLD=1;
export const KPRIME=0.2; // illustrative mu_n*Cox, mA/V^2 (not a process specification)
export function mosfet(vgs:number,vds:number,ratio=5){
 if(!Number.isFinite(vgs)||!Number.isFinite(vds)||!Number.isFinite(ratio)||vgs<0||vds<0||ratio<=0)throw new RangeError('Nonnegative voltages and positive W/L required');
 const overdrive=Math.max(0,vgs-THRESHOLD),beta=KPRIME*ratio;
 const region=overdrive===0?'cutoff':vds<overdrive?'triode':'saturation';
 const current=region==='cutoff'?0:region==='triode'?beta*(overdrive*vds-vds*vds/2):beta*overdrive*overdrive/2;
 return {overdrive,beta,current,region,channel:overdrive>0} as const;
}
export const mosParts:Record<MosPart,{name:string;color:string;description:string}>={
 gate:{name:'게이트 G',color:'#f09942',description:'절연막 너머의 전기장으로 표면 전하를 조절해요. 이 이상 모델에서 게이트의 정상상태 DC 전류는 0이에요. 실제 스위칭에서는 게이트 용량을 충전·방전하는 전류가 필요해요.'},
 oxide:{name:'게이트 절연막',color:'#7ac9d7',description:'게이트와 반도체 사이를 전기적으로 절연하는 얇은 층이에요. 그림에서는 보이도록 두께를 크게 그렸어요. 실제 두께·재료 선택은 누설과 신뢰성에도 영향을 줘요.'},
 source:{name:'소스 S · n+',color:'#678ed7',description:'이 예시에서는 0 V로 고정된 전자 공급 쪽이에요. VGS와 VDS는 모두 소스를 기준으로 정의해요. 전자는 채널을 통해 소스에서 드레인으로 이동해요.'},
 drain:{name:'드레인 D · n+',color:'#9479cb',description:'소스보다 높은 전압을 주면 전자가 드레인 쪽으로 이동해요. 관습적 전류 ID의 양의 방향은 전자와 반대인 드레인 → 소스예요.'},
 body:{name:'바디 B · p형',color:'#a5b4be',description:'n채널이 형성되는 p형 반도체 바탕이에요. 여기서는 바디를 소스와 함께 0 V로 고정해 바디 효과를 제외했어요. 실제 바디 전압이 달라지면 문턱전압도 달라질 수 있어요.'}
};
