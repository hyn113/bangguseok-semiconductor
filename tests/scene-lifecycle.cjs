// Source-extracted handler/cleanup harness: no WebGL/GPU or browser rendering claim.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {transformSync}=require('esbuild');
function compile(code,scope){return Function(...Object.keys(scope),transformSync(code,{loader:'ts',target:'es2022'}).code)(...Object.values(scope))}
function target(){const handlers=new Map();return{hidden:false,handlers,addEventListener(k,f){handlers.set(k,f)},removeEventListener(k,f){if(handlers.get(k)===f)handlers.delete(k)},emit(k,e={}){handlers.get(k)?.(e)},getBoundingClientRect(){return{left:0,top:0,width:100,height:100}}}}
for(const file of ['EquipmentScene','WaferScene','CleanroomEnvironment']){
 const source=fs.readFileSync(`src/${file}.tsx`,'utf8');
 const canvas=target(),document=target(),window=target(),calls=[];
 const disposed=name=>({dispose(){calls.push(name)}});
 canvas.remove=()=>calls.push('canvas');
 const renderer={domElement:canvas,...disposed('renderer')};
 const flag=v=>calls.push(['fallback',v]);
 const scope={renderer,document,window,frame:42,raf:42,cancelAnimationFrame:id=>calls.push(['cancel',id]),setError:flag,setFailed:flag,setContextLost:v=>calls.push(['lost',v])};
 const handler=source.match(/  const onContextLost=.*\n/)[0];
 const onContextLost=compile(handler+'return onContextLost;',scope);
 canvas.addEventListener('webglcontextlost',onContextLost);
 canvas.emit('webglcontextlost',{preventDefault(){calls.push('prevent')}});
 assert.deepEqual(calls,['prevent',['cancel',42],['fallback',true],['lost',true]]);
 assert.match(source,/if\(contextLost\)return;/);
 assert.match(source,/\},\[(?:kind,)?reset,contextLost\]\);/);
 assert.match(source,/useEffect\(\(\)=>\{setContextLost\(false\)\},\[(?:kind,)?reset\]\)/);
 const cleanupStart=source.lastIndexOf('  return()=>{',source.indexOf(' },[',source.indexOf('const onContextLost')));
 const cleanupEnd=source.indexOf('\n },[',cleanupStart);
 const cleanupSource=source.slice(cleanupStart,cleanupEnd);
 const cleanup=compile(cleanupSource,{...scope,onContextLost,clearPointer(){},endPointer(){},hidePointer(){},moveTool:{current:()=>{}},ro:{disconnect(){calls.push('observer')}},observer:{disconnect(){calls.push('observer')}},control:disposed('controls'),controls:disposed('controls'),scene:{traverse(){}},THREE:{BufferGeometry:class{},Material:class{},Mesh:class{},InstancedMesh:class{}},allocatedMaterials:new Set(),cloth:null,under:null,textures:[disposed('texture')],environment:disposed('environment'),sun:{shadow:disposed('shadow')},key:{shadow:disposed('shadow')}});
 cleanup();
 for(const name of ['observer','texture','environment','shadow','renderer','canvas'])assert(calls.includes(name),`${file} disposes ${name}`);
 assert.equal(canvas.handlers.has('webglcontextlost'),false);
 if(file==='CleanroomEnvironment')continue;
 const selected=[];const props={stage:8,interactionBlocked:false,onSelect:n=>selected.push(n)};
 const start=source.indexOf('let down:');const end=source.indexOf('  const resize=',start);
 const api=compile(source.slice(start,end)+'return {clearPointer,endPointer,hidePointer,read:()=>down};',{renderer,document,window,kind:'ffu',state:{current:props},current:{current:props},pointer:{set(){}},ray:{setFromCamera(){},intersectObjects(){return[{object:{userData:{part:2}}}]}},camera:{},pick:[{visible:true}]});
 const event=(id=1,extra={})=>({pointerId:id,button:0,isPrimary:true,clientX:10,clientY:10,...extra});
 canvas.onpointerdown(event());document.emit('pointerup',event());assert.equal(api.read(),null,'outside release clears');
 canvas.onpointerdown(event());document.emit('pointerup',event(2));assert.equal(api.read().id,1,'other pointer cannot cancel');api.clearPointer();
 for(const type of ['blur','visibilitychange','lostpointercapture']){canvas.onpointerdown(event());document.hidden=true;(type==='blur'?window:type==='visibilitychange'?document:canvas).emit(type);assert.equal(api.read(),null,type)}
 canvas.onpointerdown(event(1,{isPrimary:false}));assert.equal(api.read(),null,'secondary pointer ignored');
 canvas.onpointerdown(event());canvas.onpointerup(event());assert.deepEqual(selected,[2],'normal selection retained');
 if(file==='WaferScene'){
  props.stage=3;canvas.onpointerdown(event());assert.equal(api.read(),null,'work stage never latches');
  props.stage=8;props.interactionBlocked=true;canvas.onpointerdown(event());assert.equal(api.read(),null,'modal blocks picking');
  assert.match(source,/if\(previousStage!==s.stage\|\|s.interactionBlocked\)clearPointer\(\)/);
  assert.match(source,/if\(state.current.interactionBlocked\)return 0/);
  assert.match(source,/<DirectWorkHandle disabled=\{props.interactionBlocked\?\?false\}/);
 }
}
console.log('PASS source-extracted scene lifecycle: loss cancels RAF + fallback; cleanup resources/listener; explicit reset dependency; outside/blur/hidden/capture/primary pointer guards; wafer stage and modal gates. Not a GPU rendering test.');
