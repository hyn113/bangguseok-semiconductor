import {WaferFallback} from './LearningFallback';
import {useEffect, useRef, useState} from 'react';
import {DirectWorkHandle,createSurfaceTracker} from './DirectWorkHandle';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {createCameraRig} from './viewOptions';
import {createPartFrames,pickAt,createOutline} from './partFrames';

type Props={interactionBlocked?:boolean;stage:number;progress:number;selected:number;onSelect:(n:number)=>void;reset:number;playing:boolean;onWorkProgress:(n:number)=>void;names?:string[]};
/** Original illustrative geometry, not a dimensional manufacturing model. */
export function WaferScene(props:Props){
 const {reset}=props;
 const host=useRef<HTMLDivElement>(null),state=useRef(props);
 const [failed,setFailed]=useState(false);
 const handle=useRef<HTMLButtonElement>(null),guide=useRef<HTMLDivElement>(null);
 const path=useRef({x:0,y:150});
 const moveTool=useRef<((x:number,y:number)=>number)|null>(null);
 const toolPoint=useRef<{x:number;z:number}|null>(null);
 const surfaceTracker=useRef(createSurfaceTracker());
 useEffect(()=>{toolPoint.current=null;surfaceTracker.current.reset()},[props.stage,reset]);
 useEffect(()=>{state.current=props},[props]);
 const [contextLost,setContextLost]=useState(false);
 useEffect(()=>{setContextLost(false)},[reset]);
 useEffect(()=>{
  if(contextLost)return;
  const root=host.current;if(!root)return;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true})}catch{setFailed(true);return}
  setFailed(false);
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  root.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-label','잉곳과 웨이퍼 3D 개념 모형');
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(35,1,.1,80);
  camera.position.set(4,3.6,6);
  const controls=new OrbitControls(camera,renderer.domElement);
  controls.target.set(0,.4,0);controls.enableDamping=true;controls.enablePan=false;
  controls.minDistance=4;controls.maxDistance=10;controls.maxPolarAngle=Math.PI*.48;
  const homeCam=camera.position.clone(),rig=createCameraRig(camera,controls.target,()=>homeCam);let orbiting=false;
  controls.addEventListener('start',()=>{orbiting=true});controls.addEventListener('end',()=>{orbiting=false});controls.addEventListener('change',()=>{if(orbiting)rig.cancel()});
  const frames=createPartFrames(root),outline=createOutline(0xf2862b,.008);let hovered=-1;
  // Locally generated studio reflections; no downloaded HDR or manufacturer assets.
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();
  const environment=pmrem.fromScene(room,.04);
  scene.environment=environment.texture;scene.environmentIntensity=.7;
  room.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff,0x656c76,.8));
  const key=new THREE.DirectionalLight(0xffffff,3.2);key.position.set(-3,6,4);
  key.castShadow=true;key.shadow.mapSize.set(1024,1024);
  Object.assign(key.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:15});
  key.shadow.bias=-.0003;key.shadow.normalBias=.025;scene.add(key);
  const fill=new THREE.DirectionalLight(0xdce7ff,.8);fill.position.set(4,2,-4);scene.add(fill);
  const mat=(color:number,metalness=0,roughness=.4)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
  const mesh=(geo:THREE.BufferGeometry,m:THREE.Material|THREE.Material[],parent:THREE.Object3D,x=0,y=0,z=0)=>{
   const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;
  };
  const textures:THREE.Texture[]=[];
  const texture=(draw:(c:CanvasRenderingContext2D)=>void)=>{
   const canvas=document.createElement('canvas');canvas.width=canvas.height=256;
   const c=canvas.getContext('2d');if(!c)return null;draw(c);
   const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;
   t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());textures.push(t);return t;
  };
  const cutMap=texture(c=>{c.fillStyle='#92979d';c.fillRect(0,0,256,256);for(let i=0;i<256;i+=2){c.strokeStyle=`rgba(224,228,232,${.025+(i%7)*.006})`;c.beginPath();c.moveTo(0,i);c.lineTo(256,i);c.stroke()}});
  const face=mat(0xc0c4cb,.65,.32);face.map=cutMap;
  const side=mat(0x525a66,.78,.24);
  mesh(new THREE.CylinderGeometry(2.65,2.7,.1,96),mat(0xd8dce1,.15,.65),scene,0,-.26,0);
  const ingot=new THREE.Group();scene.add(ingot);ingot.position.set(0,.72,0);
  const cylinder=mesh(new THREE.CylinderGeometry(.7,.7,2.8,128),[side,face,face],ingot);
  cylinder.rotation.z=Math.PI/2;
  const slice=mesh(new THREE.CylinderGeometry(.7,.7,.025,128),[side,face,face],scene,1.39,.72,0);
  slice.rotation.z=Math.PI/2;
  // A restrained generic support assembly, deliberately not a replica of any vendor machine.
  const support=new THREE.Group();scene.add(support);
  for(const x of [-.9,.75]){
   mesh(new THREE.BoxGeometry(.2,.16,1.1),mat(0x777e86,.65),support,x,-.08,0);
   for(const z of [-.42,.42]){const roller=mesh(new THREE.CylinderGeometry(.14,.14,.22,24),mat(0x535b65,.5),support,x,.08,z);roller.rotation.z=Math.PI/2}
  }
  const wire=new THREE.Group();scene.add(wire);
  const line=mesh(new THREE.CylinderGeometry(.006,.006,2.3,8),mat(0xb5bdc6,.9,.2),wire,1.32,1.6,0);line.rotation.x=Math.PI/2;
  for(const z of [-1.2,1.2]){
   mesh(new THREE.BoxGeometry(.12,.12,.2),mat(0x3d4650,.6),wire,1.32,1.6,z);
   mesh(new THREE.BoxGeometry(.08,1.65,.08),mat(0x9099a4,.7),support,1.32,.68,z);
  }
  const wafer=new THREE.Group();scene.add(wafer);wafer.position.y=.12;
  mesh(new THREE.CylinderGeometry(1.1,1.16,.24,64),mat(0x515b65,.65,.3),wafer,0,-.123,0);
  const r=1.72,shape=new THREE.Shape(),start=-Math.PI/2+.033,end=Math.PI*1.5-.033;
  shape.moveTo(Math.cos(start)*r,Math.sin(start)*r);shape.absarc(0,0,r,start,end,false);shape.lineTo(0,-r+.075);shape.closePath();
  const baseMat=new THREE.MeshPhysicalMaterial({color:0x636d7b,metalness:.72,roughness:.12,clearcoat:.75,clearcoatRoughness:.08});
  const disk=mesh(new THREE.ExtrudeGeometry(shape,{depth:.015,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.004,bevelThickness:.003,curveSegments:128}),baseMat,wafer);
  disk.rotation.x=-Math.PI/2;disk.userData.part=1;
  const edge=mesh(new THREE.TorusGeometry(1.69,.009,8,128,Math.PI*2-.07).rotateZ(-Math.PI/2+.035),mat(0x9ea8b5,.85,.18),wafer,0,.02,0);
  edge.rotation.x=-Math.PI/2;edge.userData.part=2;
  // Subtle selectable guide at the notch, not a raised feature of the wafer itself.
  const notch=mesh(new THREE.SphereGeometry(.055,16,12),mat(0xffa14c,.2),wafer,0,.022,1.67);
  notch.scale.y=.08;notch.userData.part=3;
  const dieMap=texture(c=>{
   c.fillStyle='#778294';c.fillRect(0,0,256,256);
   c.strokeStyle='#acb2bb';c.lineWidth=1;
   for(let j=7;j<250;j+=6){c.beginPath();c.moveTo(8,j);c.lineTo(248,j);c.stroke()}
   c.fillStyle='#4c596f';c.fillRect(18,18,96,116);c.fillRect(132,18,103,50);
   c.fillRect(132,84,103,49);c.fillRect(18,151,217,86);
   c.strokeStyle='#9ba8b9';
   for(let i=24;i<235;i+=5){c.beginPath();c.moveTo(i,158);c.lineTo(i,230);c.stroke()}
   for(let i=24;i<112;i+=7){c.beginPath();c.moveTo(i,25);c.lineTo(i,127);c.stroke()}
   c.strokeStyle='#c2b19b';c.strokeRect(8,8,240,240);
  });
  const dieMaterial=new THREE.MeshPhysicalMaterial({color:0xb4b8cd,map:dieMap,metalness:.65,roughness:.19,clearcoat:.8,clearcoatRoughness:.07,iridescence:.28,iridescenceIOR:1.35,iridescenceThicknessRange:[180,360]});
  const centers:THREE.Vector3[]=[];
  for(let x=-1.54;x<=1.54;x+=.145)for(let z=-1.54;z<=1.54;z+=.145){
   if(Math.hypot(Math.abs(x)+.068,Math.abs(z)+.068)<1.64)centers.push(new THREE.Vector3(x,.019,z));
  }
  const dies=new THREE.InstancedMesh(new THREE.PlaneGeometry(.137,.137),dieMaterial,centers.length);
  const dummy=new THREE.Object3D();dummy.rotation.x=-Math.PI/2;
  centers.forEach((center,i)=>{dummy.position.copy(center);dummy.updateMatrix();dies.setMatrixAt(i,dummy.matrix)});
  dies.instanceMatrix.needsUpdate=true;dies.userData.part=0;dies.receiveShadow=true;wafer.add(dies);
  const pick:THREE.Object3D[]=[disk,edge,notch,dies];
  const tool=mesh(new THREE.CylinderGeometry(.48,.48,.1,64),mat(0x9ca3ad,.75,.23),scene,0,.26,0);
  const pad=mesh(new THREE.CylinderGeometry(.49,.49,.015,64),mat(0xd7c8b7,.05,.8),tool,0,-.057);
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();
  moveTool.current=(x,y)=>{
   if(state.current.interactionBlocked)return 0;
   const b=renderer.domElement.getBoundingClientRect();pointer.set((x-b.left)/b.width*2-1,-(y-b.top)/b.height*2+1);ray.setFromCamera(pointer,camera);
   const point=ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),-.21),new THREE.Vector3());
   const result=surfaceTracker.current.move(state.current.stage,point,toolPoint.current??{x:tool.position.x,z:tool.position.z});
   if(!result)return 0;toolPoint.current=result.next;return result.distance;
  };
  let down:{id:number;x:number;y:number;moved:boolean}|null=null;
  renderer.domElement.onpointerdown=e=>{if(state.current.interactionBlocked||state.current.stage!==8||down||e.button!==0||e.isPrimary===false)return;down={id:e.pointerId,x:e.clientX,y:e.clientY,moved:false}};
  renderer.domElement.onpointermove=e=>{if(down&&down.id===e.pointerId&&Math.hypot(e.clientX-down.x,e.clientY-down.y)>6)down.moved=true;if(down||state.current.stage!==8||state.current.interactionBlocked){hovered=-1;return}const hit=pickAt(e,renderer.domElement,camera,pick);hovered=hit?hit.object.userData.part:-1;renderer.domElement.style.cursor=hovered>=0?'pointer':''};
  renderer.domElement.onpointerleave=()=>{hovered=-1;renderer.domElement.style.cursor=''};
  renderer.domElement.onpointercancel=e=>{if(down?.id===e.pointerId)down=null};
  renderer.domElement.onpointerup=e=>{
   if(!down||down.id!==e.pointerId)return;const ended=down;down=null;
   if(state.current.interactionBlocked||state.current.stage!==8||ended.moved||Math.hypot(e.clientX-ended.x,e.clientY-ended.y)>6)return;
   const b=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1);ray.setFromCamera(pointer,camera);
   const hit=ray.intersectObjects(pick.filter(o=>o.visible))[0];if(hit)state.current.onSelect(hit.object.userData.part);
  };
  const clearPointer=()=>{down=null};
  const endPointer=(e:PointerEvent)=>{if(down?.id===e.pointerId)down=null};
  const hidePointer=()=>{if(document.hidden)clearPointer()};
  renderer.domElement.addEventListener('lostpointercapture',clearPointer);
  document.addEventListener('pointerup',endPointer);
  document.addEventListener('pointercancel',endPointer);
  window.addEventListener('blur',clearPointer);
  document.addEventListener('visibilitychange',hidePointer);
  const resize=()=>{const w=Math.max(1,root.clientWidth),h=Math.max(1,root.clientHeight);renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};
  const observer=new ResizeObserver(resize);observer.observe(root);resize();let frame=0;
  let previousStage=-1;
  const tick=()=>{
   frame=requestAnimationFrame(tick);const s=state.current,p=s.progress/100;
   if(s.stage>=1&&s.stage<=5&&previousStage!==s.stage){camera.position.set(4,3.6,6);controls.target.set(0,.4,0)}
   if(previousStage!==s.stage||s.interactionBlocked)clearPointer();
   controls.enabled=!s.interactionBlocked&&!(s.stage>=1&&s.stage<=5);previousStage=s.stage;
   ingot.visible=s.stage<2;slice.visible=s.stage<2;support.visible=s.stage<2;wire.visible=s.stage===1;wire.position.y=-p*1.55;
   const cutDone=s.stage===1&&p>=1,targetX=1.39+(cutDone?.6:0),targetY=.72-(cutDone?.2:0);
   slice.position.x=s.playing?THREE.MathUtils.lerp(slice.position.x,targetX,.09):targetX;
   slice.position.y=s.playing?THREE.MathUtils.lerp(slice.position.y,targetY,.09):targetY;cylinder.scale.y=cutDone?.98:1;
   wafer.visible=s.stage>=2;dies.visible=s.stage===8;edge.visible=s.stage>=2;notch.visible=s.stage===8;
   tool.visible=s.stage>=2&&s.stage<=5;tool.position.set(Math.sin(p*8)*.8,.21,Math.cos(p*8)*.6);tool.rotation.y=p*12;pad.visible=s.stage!==4;
   if(s.stage===2){tool.position.set(Math.cos(p*6.28)*1.7,.15,Math.sin(p*6.28)*1.7);tool.scale.set(.4,.7,.4)}else tool.scale.set(1,1,1);
   if(toolPoint.current&&s.stage>=2&&s.stage<=5)tool.position.set(toolPoint.current.x,.21,toolPoint.current.z);
   baseMat.roughness=s.stage<5?.36:s.stage===5?.36-p*.28:.08;
   baseMat.color.set(s.stage===4?0x7a8592:0x636d7b);
   dieMaterial.emissive.set(s.stage===8&&s.selected===0?0x4a2a0c:0);
   (edge.material as THREE.MeshStandardMaterial).emissive.set(s.stage===8&&s.selected===2?0x3a3f45:0);
   (notch.material as THREE.MeshStandardMaterial).emissive.set(s.selected===3?0x3a3f45:0);
   baseMat.emissive.set(s.stage===8&&s.selected===1?0x26292d:0);
   if(controls.enabled)rig.update();controls.update();
   if(s.stage>=1&&s.stage<=5&&handle.current&&guide.current){
    camera.updateMatrixWorld();
    const start=new THREE.Vector3(1.32,1.6,0).project(camera),end=new THREE.Vector3(1.32,.05,0).project(camera);
    const w=root.clientWidth,h=root.clientHeight,sx=(start.x+1)*w/2,sy=(1-start.y)*h/2;
    const dx=(end.x-start.x)*w/2,dy=(start.y-end.y)*h/2;path.current={x:dx,y:dy};
    const anchor=s.stage===1?new THREE.Vector3(1.32,1.6-1.55*p,0):new THREE.Vector3(tool.position.x,.21,tool.position.z);anchor.project(camera);
    handle.current.style.left=`${(anchor.x+1)*w/2}px`;handle.current.style.top=`${(1-anchor.y)*h/2}px`;
    Object.assign(guide.current.style,{left:`${sx}px`,top:`${sy}px`,height:`${Math.hypot(dx,dy)}px`,transform:`rotate(${Math.atan2(-dx,dy)}rad)`});
   }
   renderer.render(scene,camera);
   const names=s.names??[],at=(i:number)=>i>=0&&s.stage===8?{target:pick.find(o=>o.userData.part===i),name:names[i]??''}:null;
   if(s.stage!==8)hovered=-1;frames.update(camera,at(hovered),at(s.selected));
   outline.set(s.stage===8&&s.selected>0?pick.find(o=>o.userData.part===s.selected):null);
  };
  const onContextLost=(event:Event)=>{event.preventDefault();cancelAnimationFrame(frame);setFailed(true);setContextLost(true)};
  renderer.domElement.addEventListener('webglcontextlost',onContextLost);
  frame=requestAnimationFrame(tick);
  return()=>{
   cancelAnimationFrame(frame);frames.dispose();outline.dispose();renderer.domElement.removeEventListener('webglcontextlost',onContextLost);renderer.domElement.removeEventListener('lostpointercapture',clearPointer);document.removeEventListener('pointerup',endPointer);document.removeEventListener('pointercancel',endPointer);window.removeEventListener('blur',clearPointer);document.removeEventListener('visibilitychange',hidePointer);clearPointer();moveTool.current=null;observer.disconnect();controls.dispose();
   const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();
   scene.traverse(o=>{if(o instanceof THREE.Mesh){geometries.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));if(o instanceof THREE.InstancedMesh)o.dispose()}});
   geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());environment.dispose();key.shadow.dispose();renderer.dispose();renderer.domElement.remove();
  };
 },[reset,contextLost]);
 return <div className={'wafer-scene'+(failed?' is-fallback':'')} ref={host}>
 {!failed&&props.stage>=1&&props.stage<=5&&<DirectWorkHandle disabled={props.interactionBlocked??false} stage={props.stage} progress={props.progress} reset={reset} onWorkProgress={props.onWorkProgress} handle={handle} guide={guide} path={path} moveTool={moveTool}/>}
{failed&&<WaferFallback stage={props.stage} progress={props.progress} selected={props.selected} onSelect={props.onSelect}/>}</div>;
}
