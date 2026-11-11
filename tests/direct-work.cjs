const {JSDOM}=require('jsdom');const {build}=require('esbuild');const assert=require('node:assert/strict');
(async()=>{
 const dom=new JSDOM('<div id="root"></div>');global.window=dom.window;global.document=dom.window.document;global.navigator=dom.window.navigator;
 dom.window.PointerEvent=class extends dom.window.MouseEvent{constructor(type,init){super(type,init);this.pointerId=init.pointerId||1}};
 await build({entryPoints:['src/DirectWorkHandle.tsx'],bundle:true,platform:'node',format:'esm',packages:'external',outfile:'tests/direct-test.mjs'});
 const React=require('react');const {createRoot}=require('react-dom/client');const {flushSync}=require('react-dom');const {fireEvent,getByRole}=require('@testing-library/dom');const {DirectWorkHandle,surfaceTravel,createSurfaceTracker}=await import('./direct-test.mjs?'+Date.now());
 assert.equal(surfaceTravel(3,{x:9,z:0},{x:0,z:0}),null);assert.equal(surfaceTravel(3,{x:NaN,z:0},{x:0,z:0}),null);assert.equal(surfaceTravel(2,{x:0,z:0},{x:1.7,z:0}),null);assert.equal(surfaceTravel(3,{x:1.7,z:0},{x:1.35,z:0}).distance,0);assert.equal(surfaceTravel(3,{x:.6,z:0},{x:0,z:0}).distance,.6);assert.equal(surfaceTravel(2,{x:0,z:1},{x:0,z:1.7}).distance,0);
 // Real surface-segment logic, including gaps that the mocked DOM movement cannot represent.
 const tracker=createSurfaceTracker();
 assert.equal(tracker.move(3,{x:.6,z:0},{x:0,z:0}).distance,.6);
 assert.equal(tracker.move(3,{x:3,z:0},{x:.6,z:0}),null);
 assert.equal(tracker.move(3,{x:-1,z:0},{x:.6,z:0}).distance,0,'re-entry must not credit the off-surface chord');
 assert.ok(Math.abs(tracker.move(3,{x:-.9,z:0},{x:-1,z:0}).distance-.1)<1e-9);
 assert.equal(tracker.move(3,null,{x:-.9,z:0}),null);
 assert.equal(tracker.move(3,{x:.8,z:0},{x:-.9,z:0}).distance,0,'missing plane hit also breaks the work segment');
 tracker.reset();assert.equal(tracker.move(3,{x:.6,z:0},{x:0,z:0}).distance,.6);
 assert.equal(tracker.move(2,{x:0,z:0},{x:1.7,z:0}),null);
 assert.equal(tracker.move(2,{x:-1,z:0},{x:1.7,z:0}).distance,0,'edge-tool re-entry must not credit a diameter');
 const root=createRoot(document.getElementById('root'));let progress=0,stage=1,reset=0,disabled=false;const handle={current:null},guide={current:null},path={current:{x:0,y:150}};let validDistance=0;const moveTool={current:()=>validDistance};
 const render=()=>flushSync(()=>root.render(React.createElement(DirectWorkHandle,{stage,progress,reset,disabled,handle,guide,path,moveTool,onWorkProgress:n=>{progress=Math.max(progress,n);render()}})));const wait=()=>new Promise(r=>setTimeout(r,20));render();await wait();const button=()=>getByRole(document.body,'button');
 const down=(id=1,y=0,buttonCode=0)=>fireEvent.pointerDown(button(),{pointerId:id,clientX:0,clientY:y,button:buttonCode});const move=(id=1,y=0)=>fireEvent.pointerMove(button(),{pointerId:id,clientX:0,clientY:y});
 down(1,0,2);move(1,100);await wait();assert.equal(progress,0);
 down();await wait();assert.equal(progress,0);move(1,-100);await wait();assert.equal(progress,0);move(2,100);await wait();assert.equal(progress,0);
 down(2);fireEvent.pointerUp(button(),{pointerId:2});move(1,75);await wait();assert.equal(progress,50);
 fireEvent.keyDown(button(),{key:'Enter'});await wait();assert.equal(progress,50);
 fireEvent.pointerCancel(button(),{pointerId:1});move(1,150);await wait();assert.equal(progress,50);
 down(1,75);move(1,150);await wait();assert.equal(progress,100);move(1,1000);await wait();assert.equal(progress,100);
 stage=3;progress=0;render();await wait();down();validDistance=0;move(1,200);await wait();assert.equal(progress,0,'outside wafer must not progress');validDistance=1.2;move(1,210);await wait();assert.equal(progress,20);
 fireEvent.lostPointerCapture(button(),{pointerId:1});move(1,220);await wait();assert.equal(progress,20);
 down();reset++;render();await wait();move(1,230);await wait();assert.equal(progress,20);
 fireEvent.keyDown(button(),{key:'ArrowRight'});await wait();assert.equal(progress,40);
 down();progress=60;render();await wait();move(1,240);await wait();assert.equal(progress,80,'parallel button update must not regress');fireEvent.pointerUp(button(),{pointerId:1});
 stage=5;progress=0;render();await wait();down();validDistance=99;move(1,250);await wait();assert.equal(progress,100);
 // Off-center grab: a one-pixel move must move the tool one pixel, not snap it to the finger.
 stage=3;progress=0;reset++;render();await wait();
 let toolX=100,toolY=200,mapped=[];
 button().getBoundingClientRect=()=>({left:toolX-26,top:toolY-26,width:52,height:52});
 moveTool.current=(x,y)=>{mapped.push([x,y]);const distance=Math.hypot(x-toolX,y-toolY)/100;toolX=x;toolY=y;return distance};
 fireEvent.pointerDown(button(),{pointerId:7,clientX:120,clientY:215,button:0});
 fireEvent.pointerMove(button(),{pointerId:7,clientX:120,clientY:215});await wait();
 assert.equal(mapped.length,0,'stationary off-center grab must not perform work');assert.equal(progress,0);
 fireEvent.pointerMove(button(),{pointerId:7,clientX:121,clientY:215});await wait();
 assert.deepEqual(mapped.at(-1),[101,200]);assert.ok(Math.abs(progress-1/6)<1e-9);
 fireEvent.pointerUp(button(),{pointerId:7});
 fireEvent.pointerDown(button(),{pointerId:8,clientX:91,clientY:190,button:0});
 fireEvent.pointerMove(button(),{pointerId:8,clientX:92,clientY:190});await wait();
 assert.deepEqual(mapped.at(-1),[102,200]);assert.ok(Math.abs(progress-1/3)<1e-9,'re-grabbing must preserve tool position');
 fireEvent.pointerCancel(button(),{pointerId:8});
 stage=1;progress=20;reset++;render();await wait();let captured=false,releases=0;button().setPointerCapture=()=>{captured=true};button().hasPointerCapture=()=>captured;button().releasePointerCapture=()=>{captured=false;releases++};
 for(const interrupt of [()=>window.dispatchEvent(new window.Event('blur')),()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new window.Event('visibilitychange'))},()=>{disabled=true;render()}]){down(11,0);await wait();assert.ok(captured);interrupt();await wait();assert.equal(captured,false);const saved=progress;move(11,150);await wait();assert.equal(progress,saved,'stale pointer after interruption');assert.equal(button().classList.contains('is-dragging'),false);disabled=false;Object.defineProperty(document,'hidden',{configurable:true,value:false});render();await wait()}
 disabled=true;render();down(12,0);move(12,150);fireEvent.keyDown(button(),{key:'Enter'});await wait();assert.equal(progress,20,'blocked pointer and keyboard');disabled=false;render();down(13,0);move(13,15);await wait();assert.equal(progress,30,'fresh gesture works');root.unmount();assert.equal(captured,false);assert.ok(releases>=4);

 console.log('PASS direct handle: movement only, direction, primary-button and pointer ownership, cancel/lost capture, reset, repeated drag, valid-surface distance, clamp, keyboard, parallel progress, off-center stationary/tiny moves and re-grab, off-surface re-entry segmentation. No WebGL rendering asserted.');
})().catch(e=>{console.error(e);process.exit(1)});
