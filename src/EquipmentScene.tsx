import {EquipmentFallback} from './LearningFallback';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
type Props={kind:'gown'|'ffu';step:number;playing:boolean;exploded:boolean;flow:boolean;selected:number;onSelect:(n:number)=>void;reset:number};
export function Scene(props:Props){
 const {kind,reset}=props,host=useRef<HTMLDivElement>(null),current=useRef(props);
 const [error,setError]=useState(false);
 useEffect(()=>{current.current=props},[props]);
 const [contextLost,setContextLost]=useState(false);
 useEffect(()=>{setContextLost(false)},[kind,reset]);
 useEffect(()=>{
  if(contextLost)return;
  const root=host.current;if(!root)return;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true})}catch{setError(true);return}
  setError(false);renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  root.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-label',kind==='gown'?'회전 가능한 3D 방진복 캐릭터':'회전 가능한 3D FFU 개념 모형');
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(36,1,.1,100);
  camera.position.set(kind==='gown'?3.5:4.6,kind==='gown'?2.8:4.1,6);
  const control=new OrbitControls(camera,renderer.domElement);control.target.set(0,1.3,0);
  control.enableDamping=true;control.minDistance=3.5;control.maxDistance=10;control.maxPolarAngle=Math.PI*.52;control.enablePan=false;
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),environment=pmrem.fromScene(room,.04);
  scene.environment=environment.texture;scene.environmentIntensity=.65;room.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff,0x66717d,.8));
  const sun=new THREE.DirectionalLight(0xffffff,3);sun.position.set(-3,7,5);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);
  Object.assign(sun.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:15});sun.shadow.bias=-.0003;sun.shadow.normalBias=.02;scene.add(sun);
  const fill=new THREE.DirectionalLight(0xdbe8ff,.6);fill.position.set(4,3,-3);scene.add(fill);
  const textures:THREE.Texture[]=[],allocatedMaterials=new Set<THREE.Material>();
  const mat=(color:number,metalness=0,roughness=.5)=>{const m=new THREE.MeshStandardMaterial({color,metalness,roughness});allocatedMaterials.add(m);return m};
  const mesh=(g:THREE.BufferGeometry,m:THREE.Material,parent:THREE.Object3D,x=0,y=0,z=0)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o};
  const tube=(points:THREE.Vector3[],radius:number,m:THREE.Material,parent:THREE.Object3D)=>mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),24,radius,5,false),m,parent);
  const metal=mat(0xb4bdc7,.8,.27),dark=mat(0x303b46,.6,.32),rubber=mat(0x242c33,.05,.8);
  if(kind==='ffu'){
   // Fine directional brushing only on FFU metal; fabric and filter media are unchanged.
   metal.metalness=.94;metal.roughness=.29;metal.envMapIntensity=1.18;
   const canvas=document.createElement('canvas');canvas.width=canvas.height=256;
   const ctx=canvas.getContext('2d');
   if(ctx){
    for(let y=0;y<256;y++){const value=218+Math.round(8*Math.sin(y*2.37)+4*Math.sin(y*.41));ctx.fillStyle=`rgb(${value},${value},${value})`;ctx.fillRect(0,y,256,1)}
    const grain=new THREE.CanvasTexture(canvas);grain.wrapS=grain.wrapT=THREE.RepeatWrapping;grain.repeat.set(1,3);
    grain.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());textures.push(grain);
    metal.roughnessMap=grain;metal.bumpMap=grain;metal.bumpScale=.0012;
   }
  }
  mesh(new THREE.CylinderGeometry(2.25,2.3,.12,80),mat(0xdfe2e5,.1,.65),scene,0,-.06);
  const groups:THREE.Group[]=[],pick:THREE.Object3D[]=[],dots:THREE.Mesh[]=[];
  const clothing:THREE.Mesh[]=[],details:THREE.Object3D[]=[],gloves:THREE.Group[]=[],boots:THREE.Group[]=[],arms:THREE.Group[]=[];
  let hood:THREE.Group|null=null,fan:THREE.Group|null=null,cloth:THREE.MeshStandardMaterial|null=null,under:THREE.MeshStandardMaterial|null=null;
  if(kind==='gown'){
   // Original subtle textile grid: an illustrative fabric finish, not a certified material specification.
   const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const ctx=canvas.getContext('2d');
   if(ctx){ctx.fillStyle='#e3e8ed';ctx.fillRect(0,0,256,256);for(let i=0;i<256;i+=4){ctx.fillStyle=i%8?'#dfe4e9':'#e9edf1';ctx.fillRect(i,0,1,256);ctx.fillRect(0,i,256,1)}ctx.strokeStyle='#a5b0ba';ctx.lineWidth=1;for(let i=0;i<=256;i+=64){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,256);ctx.moveTo(0,i);ctx.lineTo(256,i);ctx.stroke()}}
   const weave=new THREE.CanvasTexture(canvas);weave.colorSpace=THREE.SRGBColorSpace;weave.wrapS=weave.wrapT=THREE.RepeatWrapping;weave.repeat.set(3,3);weave.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());textures.push(weave);
   cloth=new THREE.MeshStandardMaterial({color:0xe8edf2,map:weave,roughness:.87});under=mat(0x647483,0,.95);
   const seam=mat(0xaab8c5,0,.95),skin=mat(0xb5aa9c,0,.78),gloveMat=mat(0xd7e0e6,0,.67);
   const body=new THREE.Group();scene.add(body);
   const profile=[new THREE.Vector2(.23,1.12),new THREE.Vector2(.28,1.22),new THREE.Vector2(.245,1.38),new THREE.Vector2(.27,1.65),new THREE.Vector2(.34,1.86),new THREE.Vector2(.32,1.98),new THREE.Vector2(.13,2.08)];
   const torso=mesh(new THREE.LatheGeometry(profile,48),under,body);torso.scale.z=.67;clothing.push(torso);
   mesh(new THREE.CapsuleGeometry(.095,.12,6,20),skin,body,0,2.15);
   const head=mesh(new THREE.SphereGeometry(.205,40,32),skin,body,0,2.39);head.scale.set(.85,1.2,.95);
   const nose=mesh(new THREE.SphereGeometry(.035,16,12),skin,body,0,2.39,.19);nose.scale.set(.7,1.1,1.1);
   for(const side of [-1,1]){
    const leg=mesh(new THREE.CapsuleGeometry(.13,.77,10,28),under,body,side*.155,.69);leg.scale.z=.92;clothing.push(leg);
    const shoe=mesh(new THREE.SphereGeometry(.16,24,18),rubber,body,side*.155,.105,.075);shoe.scale.set(.83,.63,1.55);
    const boot=new THREE.Group();body.add(boot);boots.push(boot);
    mesh(new THREE.CapsuleGeometry(.139,.28,8,24),cloth,boot,side*.155,.3);
    const foot=mesh(new THREE.SphereGeometry(.17,24,18),cloth,boot,side*.155,.12,.08);foot.scale.set(.87,.66,1.55);
    const sole=mesh(new THREE.SphereGeometry(.17,24,16),mat(0x8998a5,.05,.85),boot,side*.155,.055,.085);sole.scale.set(.9,.18,1.58);
    const ankle=mesh(new THREE.TorusGeometry(.14,.012,6,24),seam,boot,side*.155,.43);ankle.rotation.x=Math.PI/2;
    const arm=new THREE.Group();arm.position.set(side*.32,1.95,0);body.add(arm);arms.push(arm);
    const upper=mesh(new THREE.CapsuleGeometry(.105,.28,8,24),under,arm,side*.035,-.2);clothing.push(upper);
    const lower=mesh(new THREE.CapsuleGeometry(.085,.25,8,24),under,arm,side*.05,-.52,.025);clothing.push(lower);
    const cuff=mesh(new THREE.CylinderGeometry(.082,.076,.055,24),seam,arm,side*.05,-.695,.025);details.push(cuff);
    const hand=mesh(new THREE.SphereGeometry(.083,24,18),skin,arm,side*.05,-.79,.025);hand.scale.set(.8,1.35,.55);
    const glove=new THREE.Group();arm.add(glove);gloves.push(glove);
    const palm=mesh(new THREE.SphereGeometry(.087,24,18),gloveMat,glove,side*.05,-.79,.025);palm.scale.set(.82,1.4,.58);
    const thumb=mesh(new THREE.CapsuleGeometry(.025,.065,6,12),gloveMat,glove,side*-.015,-.77,.035);thumb.rotation.z=side*.5;
    for(let f=0;f<3;f++)tube([new THREE.Vector3(side*.05+(f-1)*.026,-.81,.07),new THREE.Vector3(side*.05+(f-1)*.023,-.87,.067)],.002,seam,glove);
    for(let j=0;j<3;j++){const fold=mesh(new THREE.TorusGeometry(.105-j*.003,.006,5,24,Math.PI*1.45),seam,arm,side*.035,-.29-j*.035,.005);fold.rotation.x=Math.PI/2;details.push(fold)}
    const legSeam=tube([new THREE.Vector3(side*.25,.3,.045),new THREE.Vector3(side*.27,.7,.045),new THREE.Vector3(side*.26,1.16,.05)],.004,seam,body);details.push(legSeam);
   }
   const zipper=tube([new THREE.Vector3(0,1.2,.19),new THREE.Vector3(0,1.55,.185),new THREE.Vector3(0,1.85,.225),new THREE.Vector3(0,2.02,.12)],.012,seam,body);details.push(zipper);
   const zipPull=mesh(new THREE.BoxGeometry(.025,.045,.009),metal,body,0,1.94,.194);details.push(zipPull);
   for(const side of [-1,1])details.push(tube([new THREE.Vector3(side*.1,1.25,.17),new THREE.Vector3(side*.18,1.29,.165),new THREE.Vector3(side*.23,1.32,.12)],.005,seam,body));
   hood=new THREE.Group();body.add(hood);
   const shell=mesh(new THREE.SphereGeometry(.226,40,32,0,Math.PI*2,.72,Math.PI-.72),cloth,hood,0,2.39);shell.rotation.x=Math.PI/2;shell.scale.set(.88,1,1.16);
   const rim=mesh(new THREE.TorusGeometry(.147,.012,8,48),seam,hood,0,2.39,.175);rim.scale.set(.93,1.16,1);
   const bib=mesh(new THREE.CylinderGeometry(.13,.24,.17,32,1,true),cloth,hood,0,2.12);bib.scale.z=.75;
  }else{
   // Original exploded teaching assembly, not a manufacturer's CAD or service procedure.
   for(let i=0;i<8;i++){const g=new THREE.Group();scene.add(g);groups.push(g)}
   const satin=mat(0xd9dfe3,.72,.37),bladeMetal=mat(0x7f8f9d,.82,.24),whitePaint=mat(0xe6eaeb,.18,.46),filterLight=mat(0xe7e3d7,0,.96),filterShade=mat(0xc5c3b7,0,.98),seal=mat(0x303a3e,0,.92),wire=mat(0xc2cbd0,.85,.28);
   satin.roughnessMap=metal.roughnessMap;satin.bumpMap=metal.bumpMap;satin.bumpScale=.001;
   const partMesh=(index:number,g:THREE.BufferGeometry,m:THREE.Material,x=0,y=0,z=0)=>mesh(g,m,groups[index],x,y,z);
   const ringShape=(outer:number,inner:number)=>{const shape=new THREE.Shape();shape.absarc(0,0,outer,0,Math.PI*2,false);const hole=new THREE.Path();hole.absarc(0,0,inner,0,Math.PI*2,true);shape.holes.push(hole);return shape};
   const flatRing=(index:number,outer:number,inner:number,thickness:number,m:THREE.Material,y:number)=>{const o=partMesh(index,new THREE.ExtrudeGeometry(ringShape(outer,inner),{depth:thickness,bevelEnabled:false,curveSegments:64}),m,0,y);o.rotation.x=-Math.PI/2;return o};
   const frame=(index:number,width:number,depth:number,height:number,rail:number,m:THREE.Material,y=0)=>{
    for(const [x,z,w,d]of [[0,-depth/2,width,rail],[0,depth/2,width,rail],[-width/2,0,rail,depth],[width/2,0,rail,depth]])partMesh(index,new THREE.BoxGeometry(w,height,d),m,x,y,z);
   };
   // Backward-curved vertical blades between two shallow shrouds, instead of a flat flower rotor.
   fan=new THREE.Group();groups[0].add(fan);
   const lower=mesh(new THREE.CylinderGeometry(.58,.58,.035,64),bladeMetal,fan,0,-.12);
   const hub=mesh(new THREE.CylinderGeometry(.17,.23,.22,40),dark,fan,0,-.015);
   const topRing=mesh(new THREE.ExtrudeGeometry(ringShape(.57,.29),{depth:.025,bevelEnabled:false,curveSegments:64}),satin,fan,0,.12);topRing.rotation.x=-Math.PI/2;
   for(let i=0;i<12;i++){
    const shape=new THREE.Shape();shape.moveTo(.28,0);shape.bezierCurveTo(.35,-.05,.5,-.17,.57,-.2);shape.lineTo(.575,-.18);shape.bezierCurveTo(.5,-.14,.36,-.025,.29,.018);shape.closePath();
    const blade=mesh(new THREE.ExtrudeGeometry(shape,{depth:.21,bevelEnabled:true,bevelSize:.003,bevelThickness:.003,bevelSegments:1,steps:1}).rotateX(-Math.PI/2),bladeMetal,fan,0,-.1);blade.rotation.y=i*Math.PI*2/12;
   }
   // Deep pleated media: alternating shaded faces preserve readable folds at normal viewing distance.
   const pleatsA:number[]=[],pleatsB:number[]=[];const count=96;
   for(let i=0;i<count;i++){
    const x=-.86+i*1.72/count,nx=x+1.72/count,y=i%2?.085:-.085,ny=-y,v=i%2?pleatsA:pleatsB;
    v.push(x,y,-.86,nx,ny,-.86,nx,ny,.86,x,y,-.86,nx,ny,.86,x,y,.86);
   }
   [pleatsA,pleatsB].forEach((vertices,i)=>{const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.computeVertexNormals();const material=i?filterShade:filterLight;material.side=THREE.DoubleSide;partMesh(1,g,material)});
   // Folded outer shell, inner lining, shallow top lip and discrete seams.
   const housing=groups[2];
   frame(2,2.12,2.12,.5,.035,satin);
   frame(2,2.16,2.16,.035,.055,metal,.245);frame(2,2.16,2.16,.04,.065,metal,-.245);
   const panel=new THREE.Shape();panel.moveTo(-1.065,-1.065);panel.lineTo(1.065,-1.065);panel.lineTo(1.065,1.065);panel.lineTo(-1.065,1.065);panel.closePath();const hole=new THREE.Path();hole.absarc(0,0,.64,0,Math.PI*2,true);panel.holes.push(hole);
   const top=partMesh(2,new THREE.ExtrudeGeometry(panel,{depth:.022,bevelEnabled:false,curveSegments:64}),whitePaint,0,.25);top.rotation.x=-Math.PI/2;
   flatRing(2,.66,.605,.035,metal,.275);
   for(const x of [-.99,.99])for(const z of [-.99,.99]){partMesh(2,new THREE.CylinderGeometry(.022,.022,.014,12),dark,x,.282,z);partMesh(2,new THREE.BoxGeometry(.025,.004,.005),metal,x,.291,z)}
   for(const z of [-1.083,1.083]){partMesh(2,new THREE.BoxGeometry(2.02,.009,.005),dark,0,.16,z);partMesh(2,new THREE.BoxGeometry(2.02,.009,.005),dark,0,-.16,z)}
   // Lift handles and fastened corner brackets add scale without copied branding.
   for(const x of [-.88,.88]){
    for(const z of [-.62,.62]){partMesh(2,new THREE.BoxGeometry(.08,.08,.12),metal,x,.3,z);partMesh(2,new THREE.CylinderGeometry(.012,.012,.015,10),dark,x,.348,z)}
    const bar=partMesh(2,new THREE.CylinderGeometry(.025,.025,1.24,12),rubber,x,.36);bar.rotation.x=Math.PI/2;
   }
   // Intake grille: closely spaced concentric wires, supporting spokes and rim feet.
   for(let n=0;n<7;n++){const r=.12+n*.075;const ring=partMesh(3,new THREE.TorusGeometry(r,.007,6,64),wire,0,.015);ring.rotation.x=Math.PI/2}
   for(let i=0;i<4;i++){const bar=partMesh(3,new THREE.CylinderGeometry(.009,.009,1.19,8),wire);bar.rotation.z=Math.PI/2;bar.rotation.y=i*Math.PI/4}
   flatRing(3,.62,.595,.024,satin,-.015);
   for(let i=0;i<4;i++){const a=i*Math.PI/2;partMesh(3,new THREE.CylinderGeometry(.017,.017,.1,10),metal,Math.sin(a)*.61,-.05,Math.cos(a)*.61)}
   // Compact motor with heat-sink fins and a covered electrical lead.
   partMesh(4,new THREE.CylinderGeometry(.18,.18,.21,40),dark,0,.03);
   for(let n=0;n<7;n++){const ring=partMesh(4,new THREE.TorusGeometry(.18,.008,5,32),metal,0,-.06+n*.027);ring.rotation.x=Math.PI/2}
   partMesh(4,new THREE.CylinderGeometry(.07,.07,.14,24),metal,0,-.15);
   partMesh(4,new THREE.CylinderGeometry(.16,.16,.02,40),satin,0,.15);
   tube([new THREE.Vector3(.16,.07,0),new THREE.Vector3(.24,.1,.08),new THREE.Vector3(.3,.04,.14)],.012,rubber,groups[4]);
   // Separate filter carrier and continuous perimeter seal.
   frame(5,1.86,1.86,.22,.06,satin);frame(5,1.77,1.77,.028,.035,seal,.13);
   for(const x of [-.9,.9])for(const z of [-.82,.82])partMesh(5,new THREE.BoxGeometry(.075,.025,.11),metal,x,-.125,z);
   // Controller lives beside the plenum, not within the moving rotor.
   partMesh(6,new THREE.BoxGeometry(.39,.23,.1),dark,.65,0,1.1);
   partMesh(6,new THREE.BoxGeometry(.35,.19,.012),satin,.65,0,1.157);
   partMesh(6,new THREE.BoxGeometry(.2,.074,.01),mat(0x25444b,.25,.25),.615,.035,1.168);
   for(let i=0;i<3;i++)partMesh(6,new THREE.BoxGeometry(.045,.009,.007),mat(0x94bdb8,.05,.45),.55+i*.06,.035,1.176);
   const knob=partMesh(6,new THREE.CylinderGeometry(.025,.025,.02,20),rubber,.76,-.055,1.175);knob.rotation.x=Math.PI/2;
   for(const x of [.5,.8])for(const y of [-.075,.075]){const screw=partMesh(6,new THREE.CylinderGeometry(.009,.009,.005,10),dark,x,y,1.17);screw.rotation.x=Math.PI/2}
   // Open protective grid stays distinct from the particle-capturing media.
   frame(7,1.78,1.78,.022,.025,metal);
   const wireGeo=new THREE.CylinderGeometry(.0035,.0035,1.73,5),wireMat=wire;
   for(let i=0;i<19;i++){
    const q=-.84+i*1.68/18;const a=partMesh(7,wireGeo,wireMat,q,0,0);a.rotation.x=Math.PI/2;
    const b=partMesh(7,wireGeo,wireMat,0,.006,q);b.rotation.z=Math.PI/2;
   }
   const assembled=[1.68,1.13,1.5,1.81,1.77,1.13,1.5,1.01],separated=[2.35,1.02,1.6,3.02,2.76,.7,1.6,.42];
   groups.forEach((g,i)=>{g.position.y=(current.current.exploded?separated:assembled)[i];g.traverse(o=>{if(o instanceof THREE.Mesh){o.material=(o.material as THREE.Material).clone();o.userData.part=i;pick.push(o)}})});
   const air=mat(0x90b8c5,.05,.65);for(let i=0;i<24;i++)dots.push(mesh(new THREE.SphereGeometry(.012,6,6),air,scene,(i%4-1.5)*.35,1,(Math.floor(i/4)%3-1)*.4));

  }
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();let down:{id:number;x:number;y:number;moved:boolean}|null=null;
  renderer.domElement.onpointerdown=e=>{if(down||e.button!==0||e.isPrimary===false)return;down={id:e.pointerId,x:e.clientX,y:e.clientY,moved:false}};
  renderer.domElement.onpointermove=e=>{if(down?.id===e.pointerId&&Math.hypot(e.clientX-down.x,e.clientY-down.y)>6)down.moved=true};
  renderer.domElement.onpointercancel=e=>{if(down?.id===e.pointerId)down=null};
  renderer.domElement.onpointerup=e=>{if(!down||down.id!==e.pointerId)return;const start=down;down=null;if(kind!=='ffu'||start.moved||Math.hypot(e.clientX-start.x,e.clientY-start.y)>6)return;const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(pick)[0];if(hit)current.current.onSelect(hit.object.userData.part)};
  const clearPointer=()=>{down=null};
  const endPointer=(e:PointerEvent)=>{if(down?.id===e.pointerId)down=null};
  const hidePointer=()=>{if(document.hidden)clearPointer()};
  renderer.domElement.addEventListener('lostpointercapture',clearPointer);
  document.addEventListener('pointerup',endPointer);
  document.addEventListener('pointercancel',endPointer);
  window.addEventListener('blur',clearPointer);
  document.addEventListener('visibilitychange',hidePointer);
  const resize=()=>{const w=Math.max(1,root.clientWidth),h=Math.max(1,root.clientHeight);renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};
  const ro=new ResizeObserver(resize);ro.observe(root);resize();let frame=0,elapsed=0,last=performance.now(),lastStep=-1,sceneTime=0;
  const tick=(now:number)=>{
   frame=requestAnimationFrame(tick);const delta=Math.min((now-last)/1000,.05);last=now;const c=current.current;
   if(c.step!==lastStep){lastStep=c.step;sceneTime=0}if(c.playing){elapsed+=delta;sceneTime+=delta}
   if(kind==='gown'){
    const suited=c.step===2||c.step===4;clothing.forEach(o=>o.material=suited?cloth!:under!);details.forEach(o=>o.visible=suited);
    hood!.visible=c.step===1||c.step===4;gloves.forEach(g=>g.visible=c.step===3||c.step===4);boots.forEach(b=>b.visible=c.step===4);
    if(c.playing){hood!.position.y=c.step===1?Math.max(0,.2-sceneTime*.14):0;arms.forEach((a,i)=>{const sign=i===0?1:-1,target=c.step===1?sign*2.4:c.step===2?sign*.85:c.step===3?sign*1.12:sign*.1;a.rotation.z=THREE.MathUtils.lerp(a.rotation.z,target+Math.sin(elapsed*1.8)*.025,.065)})}
   }else{
    const assembled=[1.68,1.13,1.5,1.81,1.77,1.13,1.5,1.01],separated=[2.35,1.02,1.6,3.02,2.76,.7,1.6,.42];groups.forEach((g,i)=>{g.position.y=THREE.MathUtils.lerp(g.position.y,(c.exploded?separated:assembled)[i],.08)});
    if(c.playing)fan!.rotation.y+=delta*2;
    groups.forEach((g,i)=>g.traverse(o=>{if(o instanceof THREE.Mesh)(o.material as THREE.MeshStandardMaterial).emissive.set(i===c.selected?0x21170d:0)}));
    dots.forEach((d,i)=>{d.visible=c.flow;d.position.y=3.2-((elapsed*.6+i*.113)%2.9)})
   }
   control.update();renderer.render(scene,camera);
  };
  const onContextLost=(event:Event)=>{event.preventDefault();cancelAnimationFrame(frame);setError(true);setContextLost(true)};
  renderer.domElement.addEventListener('webglcontextlost',onContextLost);
  frame=requestAnimationFrame(tick);
  return()=>{cancelAnimationFrame(frame);renderer.domElement.removeEventListener('webglcontextlost',onContextLost);renderer.domElement.removeEventListener('lostpointercapture',clearPointer);document.removeEventListener('pointerup',endPointer);document.removeEventListener('pointercancel',endPointer);window.removeEventListener('blur',clearPointer);document.removeEventListener('visibilitychange',hidePointer);clearPointer();ro.disconnect();control.dispose();const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();scene.traverse(o=>{if(o instanceof THREE.Mesh){geometries.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m))}});allocatedMaterials.forEach(m=>materials.add(m));if(cloth)materials.add(cloth);if(under)materials.add(under);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());environment.dispose();sun.shadow.dispose();renderer.dispose();renderer.domElement.remove()};
 },[kind,reset,contextLost]);
 return <div className={'scene'+(error?' is-fallback':'')} ref={host}>{error&&<EquipmentFallback kind={props.kind} selected={props.selected} onSelect={props.onSelect} step={props.step}/>}</div>;
}
