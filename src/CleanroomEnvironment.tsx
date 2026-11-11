import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import './cleanroom-environment.css';

/* Original concept architecture. Visual references, not dimensional/SOP specifications:
 Intel Fab 52/cleanroom tour and Exyte RSE air-shower datasheet, reviewed 2026-11-02.
 https://virtualmuseum.intel.com/fabtour/cleanroom.html
 https://www.intel.com/content/www/us/en/newsroom/press-hub/press-kit/client-computing/press-kit-intel-technology-tour-2025.html
 https://exytetechnology.gmbh/wp-content/uploads/2024/10/Exyte_Datasheet_AirShower_RSE_E.pdf
 No manufacturer photographs, logos, CAD or textures are embedded. */
export function CleanroomEnvironment({tour,playing,motion,reset}:{tour:boolean;playing:boolean;motion:boolean;reset:number}){
 const host=useRef<HTMLDivElement>(null),state=useRef({tour,playing,motion});const[failed,setFailed]=useState(false);
 useEffect(()=>{state.current={tour,playing,motion}},[tour,playing,motion]);
 const [contextLost,setContextLost]=useState(false);
 useEffect(()=>{setContextLost(false)},[reset]);
 useEffect(()=>{
  if(contextLost)return;
  const root=host.current;if(!root)return;let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false})}catch{setFailed(true);return}setFailed(false);
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;/* All shadow casters are stationary cabinet volumes; sliding glass/details do not cast. */renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;root.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-label','중앙 통로와 장비 베이를 갖춘 독자 제작 클린룸 개념 공간');
  const scene=new THREE.Scene();scene.background=new THREE.Color(0xdbe5e7);scene.fog=new THREE.Fog(0xe2ebed,22,46);
  const camera=new THREE.PerspectiveCamera(58,1,.1,70);
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),environment=pmrem.fromScene(room,.045);scene.environment=environment.texture;scene.environmentIntensity=.7;room.dispose();pmrem.dispose();
  const textures:THREE.Texture[]=[];
  const texture=(draw:(c:CanvasRenderingContext2D)=>void,size=256)=>{const canvas=document.createElement('canvas');canvas.width=canvas.height=size;const c=canvas.getContext('2d');if(c)draw(c);const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;textures.push(t);return t};
  const floorMap=texture(c=>{c.fillStyle='#bdcbd0';c.fillRect(0,0,256,256);c.strokeStyle='#8e9fa6';c.lineWidth=2;c.strokeRect(1,1,254,254);for(let y=14;y<250;y+=12)for(let x=14;x<250;x+=12){c.fillStyle='#9cabb0';c.beginPath();c.arc(x,y,1.5,0,Math.PI*2);c.fill()}});floorMap.wrapS=floorMap.wrapT=THREE.RepeatWrapping;floorMap.repeat.set(12,24);
  const filterMap=texture(c=>{c.fillStyle='#e8edef';c.fillRect(0,0,256,256);c.strokeStyle='#b4c1c7';c.lineWidth=1;for(let i=4;i<256;i+=5){c.beginPath();c.moveTo(i,0);c.lineTo(i,256);c.stroke()}c.strokeStyle='#d1dbdf';for(let i=0;i<256;i+=16){c.beginPath();c.moveTo(0,i);c.lineTo(256,i);c.stroke()}});
  const mat=(color:number,metalness=0,roughness=.55)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
  const steel=mat(0xa9b9c2,.82,.28),white=mat(0xe6ecee,.15,.43),panel=mat(0xd1dce0,.32,.4),dark=mat(0x2e4652,.3,.42),seam=mat(0x8c9ea8,.48,.5),black=mat(0x24333a,.2,.6),orange=mat(0xc98347,.45,.38);
  const glass=new THREE.MeshPhysicalMaterial({color:0xc5dee5,metalness:.05,roughness:.07,transparent:true,opacity:.16,depthWrite:false});
  const lightMat=new THREE.MeshStandardMaterial({color:0xf7ffff,emissive:0xe8f6ff,emissiveIntensity:1.8});
  const filter=new THREE.MeshStandardMaterial({color:0xf1f4f5,map:filterMap,metalness:.15,roughness:.75});
  // Shared primitive buffers keep repeated seams, handles and cabinets inexpensive.
  const unitBox=new THREE.BoxGeometry(1,1,1),roundedCache=new Map<string,THREE.BufferGeometry>(),cylinderCache=new Map<string,THREE.BufferGeometry>();
  const box=(w:number,h:number,d:number,m:THREE.Material,parent:THREE.Object3D,x:number,y:number,z:number,round=0)=>{const cacheKey=`${w}/${h}/${d}/${round}`;let g:THREE.BufferGeometry=unitBox;if(round){if(!roundedCache.has(cacheKey))roundedCache.set(cacheKey,new RoundedBoxGeometry(w,h,d,2,round));g=roundedCache.get(cacheKey)!}const o=new THREE.Mesh(g,m);if(!round)o.scale.set(w,h,d);o.position.set(x,y,z);o.castShadow=w>.5&&h>.5&&d>.5&&m!==glass;o.receiveShadow=w*h*d>.03&&m!==glass;parent.add(o);return o};
  const instances=(positions:THREE.Vector3[],w:number,h:number,d:number,m:THREE.Material)=>{const batch=new THREE.InstancedMesh(unitBox,m,positions.length),matrix=new THREE.Matrix4(),scale=new THREE.Vector3(w,h,d),rotation=new THREE.Quaternion();positions.forEach((p,i)=>{matrix.compose(p,rotation,scale);batch.setMatrixAt(i,matrix)});batch.instanceMatrix.needsUpdate=true;batch.computeBoundingSphere();scene.add(batch);return batch};
  const cylinder=(radius:number,height:number,m:THREE.Material,parent:THREE.Object3D,x:number,y:number,z:number)=>{const cacheKey=`${radius}/${height}`;if(!cylinderCache.has(cacheKey))cylinderCache.set(cacheKey,new THREE.CylinderGeometry(radius,radius,height,12));const o=new THREE.Mesh(cylinderCache.get(cacheKey)!,m);o.position.set(x,y,z);parent.add(o);return o};
  const label=(text:string,w:number,h:number,parent:THREE.Object3D,x:number,y:number,z:number)=>{const t=texture(c=>{c.fillStyle='#dce5e8';c.fillRect(0,0,256,256);c.fillStyle='#365461';c.font='bold 48px sans-serif';c.textAlign='center';c.fillText(text,128,144)});return box(w,h,.012,new THREE.MeshStandardMaterial({map:t,roughness:.7}),parent,x,y,z)};
  scene.add(new THREE.HemisphereLight(0xf1f8ff,0x9da9ad,2));
  const key=new THREE.DirectionalLight(0xffffff,2.3);key.position.set(-3,8,6);key.castShadow=true;const shadowSize=root.clientWidth<768?1024:2048;key.shadow.mapSize.set(shadowSize,shadowSize);Object.assign(key.shadow.camera,{left:-9,right:9,top:10,bottom:-18,near:.1,far:40});key.shadow.bias=-.0003;scene.add(key);
  for(const z of [-1,-8,-15]){const fill=new THREE.PointLight(0xe8f7ff,18,11,2);fill.position.set(0,3.1,z);scene.add(fill)}
  const floor=new THREE.MeshStandardMaterial({color:0xe1e8eb,map:floorMap,metalness:.22,roughness:.42});
  box(12,.12,28,floor,scene,0,-.07,-6);box(12,3.7,.12,white,scene,0,1.85,-20);box(.16,3.7,28,white,scene,-6,1.85,-6);box(.16,3.7,28,white,scene,6,1.85,-6);box(12,.1,28,white,scene,0,3.65,-6);
  // Cove-like edge trims and low return panels make wall/floor boundaries legible.
  for(const side of [-1,1]){box(.14,.18,28,panel,scene,side*5.89,.09,-6,.04);for(let z=-17;z<2;z+=3){box(.035,.45,1.3,seam,scene,side*5.89,.42,z);for(let n=0;n<6;n++)box(.045,.012,1.18,dark,scene,side*5.86,.25+n*.065,z)}}
  // Dense modular ceiling: filter faces are flush; fan motors remain above the room.
  const ceilingPositions:THREE.Vector3[]=[],filterPositions:THREE.Vector3[]=[],lightFrames:THREE.Vector3[]=[],lightFaces:THREE.Vector3[]=[];
  for(let z=-18;z<7;z+=1.6)for(let x=-5.2;x<6;x+=1.6){ceilingPositions.push(new THREE.Vector3(x,3.56,z));filterPositions.push(new THREE.Vector3(x,3.535,z))}
  for(const x of [-2.0,2.0])for(let z=-17.2;z<7;z+=3.2){lightFrames.push(new THREE.Vector3(x,3.49,z));lightFaces.push(new THREE.Vector3(x,3.455,z))}
  // Four draw calls for the entire ceiling; no ceiling/detail shadow casters.
  instances(ceilingPositions,1.55,.035,1.55,steel);instances(filterPositions,1.43,.025,1.43,filter);instances(lightFrames,.22,.055,2.85,steel);instances(lightFaces,.16,.015,2.72,lightMat);
  // Glazed air-shower vestibule. No cleaning-cycle efficacy or operating recipe is claimed.
  for(const side of [-1,1]){const x=side*1.82;for(const z of [1.82,5.08])box(.18,3.35,.12,white,scene,x,1.675,z);box(.2,.72,3.2,panel,scene,x,.4,3.45);box(.035,2.05,3.1,glass,scene,x,1.9,3.45);box(.24,.17,3.35,steel,scene,x,3.25,3.45);for(let z=2.3;z<5;z+=.65)for(const y of [.95,1.55,2.15]){const nozzle=cylinder(.055,.035,steel,scene,x-side*.12,y,z);nozzle.rotation.z=Math.PI/2}for(let n=0;n<5;n++)box(.025,.018,2.6,dark,scene,x-side*.14,.2+n*.065,3.45)}
  box(3.85,.38,3.4,white,scene,0,3.45,3.45);box(3.35,.03,2.8,filter,scene,0,3.24,3.45);box(3.5,.03,3.25,panel,scene,0,.013,3.45);
  const doors:THREE.Group[]=[];
  for(const side of [-1,1]){const g=new THREE.Group();scene.add(g);g.position.set(side*.86,0,1.78);doors.push(g);box(1.65,2.92,.035,glass,g,0,1.55,0);for(const x of [-.82,.82])box(.055,3.1,.07,steel,g,x,1.55,0);for(const y of [.1,3.05])box(1.68,.07,.07,steel,g,0,y,0);box(.04,.48,.055,steel,g,-side*.55,1.45,.065);box(1.59,.018,.045,white,g,0,1.15,.025)}
  box(.24,.4,.09,dark,scene,-2.04,1.4,5.13,.015);box(.14,.17,.025,lightMat,scene,-2.04,1.47,5.19);const readyMat=new THREE.MeshStandardMaterial({color:0x77bfa3,emissive:0x2a755a,emissiveIntensity:.5});box(.08,.05,.025,readyMat,scene,-2.04,1.29,5.19);
  label('AIR',.55,.2,scene,-1.3,3.45,5.18);
  // Full-height process bays face the clear center aisle; service volumes remain behind.
  const statusLights:THREE.MeshStandardMaterial[]=[];
  for(const side of [-1,1])for(let row=0;row<5;row++){
   const g=new THREE.Group();g.position.set(side*2.65,0,-1.8-row*3.4);g.rotation.y=side===-1?Math.PI/2:-Math.PI/2;scene.add(g);
   const height=row%3===1?2.45:2.72;
   box(2.8,height,1.75,white,g,0,height/2,.0,.025);box(2.75,.16,1.7,dark,g,0,.12,0);box(2.72,.045,1.7,steel,g,0,height+.015,0);
   box(2.65,height-.25,.04,seam,g,0,height/2+.05,.9);
   for(const x of [-.88,0,.88]){box(.855,height-.31,.035,panel,g,x,height/2+.06,.93);box(.018,.42,.04,steel,g,x+.32,1.05,.965)}
   box(1.42,.82,.04,black,g,-.44,1.78,.98,.015);box(1.25,.65,.02,glass,g,-.44,1.78,1.01);box(.62,.7,.09,dark,g,.91,1.83,1.025,.02);
   const screen=texture(c=>{c.fillStyle='#1a3743';c.fillRect(0,0,256,256);c.fillStyle='#82b8bd';c.fillRect(18,20,220,12);c.fillStyle='#335560';for(let i=0;i<4;i++)c.fillRect(20,62+i*36,215,24);c.fillStyle='#99d2c0';for(let i=0;i<4;i++)c.fillRect(25,68+i*36,50+i*25,10);c.fillStyle='#e4b47d';c.fillRect(185,210,50,18)});
   box(.5,.5,.012,new THREE.MeshStandardMaterial({map:screen,emissive:0x1d4552,emissiveIntensity:.35}),g,.91,1.85,1.08);box(.45,.035,.25,steel,g,.91,1.44,1.1);
   for(const x of [-.8,.12]){box(.69,.16,.5,steel,g,x,.95,1.16,.025);box(.58,.45,.32,black,g,x,1.18,1.15,.035);for(let n=0;n<6;n++)box(.5,.013,.013,seam,g,x,1.03+n*.05,1.32)}
   label(`${side<0?'A':'B'}${row+1}`, .33,.16,g,-1.05,height-.18,.965);
   const indicator=new THREE.MeshStandardMaterial({color:0x8bcdb4,emissive:0x4c9476,emissiveIntensity:.4});statusLights.push(indicator);box(.065,.11,.065,indicator,g,1.16,height+.095,.7);
   for(const x of [-1.12,1.12])for(const y of [.32,height-.2]){const screw=cylinder(.015,.01,steel,g,x,y,.962);screw.rotation.x=Math.PI/2}
  }
  // A quiet, original maintenance marking keeps the palette restrained.
  for(const side of [-1,1])box(.035,.003,19,orange,scene,side*1.3,.002,-8.5);
  label('LAB 01',1.1,.33,scene,0,2.55,-19.9);box(1.45,2.3,.035,glass,scene,0,1.3,-19.9);
  // Batch repeated static cabinet hardware as well. Keep moving doors independent.
  scene.updateMatrixWorld(true);
  const batches=new Map<string,THREE.Mesh[]>();
  scene.traverse(o=>{if(!(o instanceof THREE.Mesh)||o instanceof THREE.InstancedMesh||Array.isArray(o.material))return;let ancestor:THREE.Object3D|null=o;while(ancestor){if(doors.includes(ancestor as THREE.Group))return;ancestor=ancestor.parent}const key=`${o.geometry.id}/${o.material.id}/${o.castShadow}/${o.receiveShadow}`;const group=batches.get(key)||[];group.push(o);batches.set(key,group)});
  for(const group of batches.values()){if(group.length<2)continue;const first=group[0],batch=new THREE.InstancedMesh(first.geometry,first.material,group.length);batch.castShadow=first.castShadow;batch.receiveShadow=first.receiveShadow;group.forEach((o,i)=>{batch.setMatrixAt(i,o.matrixWorld);o.removeFromParent()});batch.instanceMatrix.needsUpdate=true;batch.computeBoundingSphere();scene.add(batch)}
  let needsRender=true;
  const resize=()=>{const w=Math.max(1,root.clientWidth),h=Math.max(1,root.clientHeight);renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();needsRender=true};const observer=new ResizeObserver(resize);observer.observe(root);resize();
  let raf=0,last=performance.now(),elapsed=0,travel=0,priorTour=false,priorPlaying=playing,priorMotion=motion;const look=new THREE.Vector3();
  const tick=(now:number)=>{raf=requestAnimationFrame(tick);const dt=Math.min(.05,(now-last)/1000);last=now;const s=state.current;if(s.tour!==priorTour){travel=0;priorTour=s.tour;needsRender=true}if(s.playing!==priorPlaying||s.motion!==priorMotion){needsRender=true;priorPlaying=s.playing;priorMotion=s.motion}if(s.playing&&s.motion){elapsed+=dt;if(s.tour)travel=Math.min(1,travel+dt/4)}if(s.tour&&!s.motion)travel=1;
   const t=travel*travel*(3-2*travel);if(s.tour){camera.position.set(0,1.65,THREE.MathUtils.lerp(6.4,-3.6,t));look.set(.5*t,1.6,-16)}else{camera.position.set(-.45,1.72,7.6);look.set(.1,1.65,-11)}camera.lookAt(look);
   doors.forEach((d,i)=>{const x=(i===0?-1:1)*(.86+(s.tour?Math.min(1,travel*5):1)*1.52);if(d.position.x!==x){d.position.x=x;needsRender=true}});statusLights.forEach((m,i)=>m.emissiveIntensity=.4+(s.playing&&s.motion?Math.sin(elapsed*.5+i)*.035:0));if(needsRender||(s.playing&&s.motion)){renderer.render(scene,camera);needsRender=false}};
  const onContextLost=(event:Event)=>{event.preventDefault();cancelAnimationFrame(raf);setFailed(true);setContextLost(true)};
  renderer.domElement.addEventListener('webglcontextlost',onContextLost);
  raf=requestAnimationFrame(tick);
  return()=>{cancelAnimationFrame(raf);renderer.domElement.removeEventListener('webglcontextlost',onContextLost);observer.disconnect();const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();scene.traverse(o=>{if(o instanceof THREE.Mesh){if(o instanceof THREE.InstancedMesh)o.dispose();geometries.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m))}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());environment.dispose();key.shadow.dispose();renderer.dispose();renderer.domElement.remove()};
 },[reset,contextLost]);
 return <div className="entry-world" ref={host} aria-hidden="true">{failed&&<CleanroomIllustration tour={tour}/>}</div>;
}

/** Perspective-rendered original SVG; a useful static illustration, not a 3D simulation. */
function CleanroomIllustration({tour}:{tour:boolean}){
 type Point=[number,number,number];type Face={points:Point[];fill:string;opacity?:number};
 const faces:Face[]=[];const add=(points:Point[],fill:string,opacity=1)=>faces.push({points,fill,opacity});
 const cube=(x:number,y:number,z:number,w:number,h:number,d:number,front:string,side='#a7bbc5',top='#edf5f7')=>{const a=x-w/2,b=x+w/2,c=z-d/2,e=z+d/2,l=y-h/2,u=y+h/2;add([[a,l,e],[b,l,e],[b,u,e],[a,u,e]],front);add([[(x<0?b:a),l,c],[(x<0?b:a),l,e],[(x<0?b:a),u,e],[(x<0?b:a),u,c]],side);add([[a,u,c],[b,u,c],[b,u,e],[a,u,e]],top)};
 const camZ=tour?3.8:7.6;const project=([x,y,z]:Point)=>`${800+x*850/(camZ-z)},${430-(y-1.65)*850/(camZ-z)}`;
 add([[-6,0,-20],[6,0,-20],[6,0,3],[-6,0,3]],'url(#crFloor)');add([[-6,3.6,-20],[6,3.6,-20],[6,3.6,3],[-6,3.6,3]],'#dfe9ed');add([[-6,0,-20],[-6,3.6,-20],[-6,3.6,3],[-6,0,3]],'#e5edf0');add([[6,0,-20],[6,3.6,-20],[6,3.6,3],[6,0,3]],'#d0dee5');add([[-6,0,-20],[6,0,-20],[6,3.6,-20],[-6,3.6,-20]],'#c5d7df');
 const backdrop=faces.splice(0);
 for(let z=-19;z<2.5;z+=1.6)for(let x=-5.2;x<6;x+=1.6){add([[x-.74,3.58,z-.74],[x+.74,3.58,z-.74],[x+.74,3.58,z+.74],[x-.74,3.58,z+.74]],'url(#crFilter)');}
 for(const x of [-2,2])for(let z=-18;z<2;z+=3.2)add([[x-.09,3.5,z-1.4],[x+.09,3.5,z-1.4],[x+.09,3.5,z+1.4],[x-.09,3.5,z+1.4]],'#fbffff');
 for(let z=-19;z<3;z+=1.2)for(let x=-5.4;x<6;x+=1.2)add([[x-.57,.006,z-.57],[x+.57,.006,z-.57],[x+.57,.006,z+.57],[x-.57,.006,z+.57]],'url(#crTile)');
 for(const s of [-1,1])for(let row=0;row<5;row++){const x=s*2.65,z=-1.8-row*3.4,h=row%3===1?2.45:2.72;cube(x,h/2,z,1.8,h,2.8,'#cedde4','#bbcdd6');cube(x,1.8,z+1.43,1.55,.68,.05,'#466470');cube(x+.42,1.8,z+1.47,.4,.42,.05,'#90bbc5');cube(x-.45,.95,z+1.65,.7,.15,.4,'#98adb8');cube(x-.45,1.17,z+1.65,.52,.4,.28,'#344d59');for(const y of [.25,h-.2])cube(x,y,z+1.43,1.65,.018,.025,'#a3b8c3');cube(x+.73,1.05,z+1.47,.025,.35,.025,'#7d98a8');cube(x+.65,h+.07,z+.9,.055,.12,.055,'#7fbca8');const inner=x-s*.91;add([[inner,1.4,z-.95],[inner,1.4,z+.25],[inner,2.2,z+.25],[inner,2.2,z-.95]],'#49636f');add([[inner-s*.01,1.6,z+.48],[inner-s*.01,1.6,z+1.0],[inner-s*.01,2.04,z+1.0],[inner-s*.01,2.04,z+.48]],'#8ab4bf');for(const offset of [-.6,.45])add([[inner-s*.02,.95,z+offset],[inner-s*.02,.95,z+offset+.04],[inner-s*.02,1.28,z+offset+.04],[inner-s*.02,1.28,z+offset]],'#7894a3')}
 for(const s of [-1,1])add([[s*1.3,.015,-18],[s*1.34,.015,-18],[s*1.34,.015,2],[s*1.3,.015,2]],'#c59d71');
 // Tall glazed bays frame the image without blocking the central sightline.
 if(!tour)for(const s of [-1,1]){cube(s*2.55,1.7,2.3,.08,3.4,.1,'#9eb5c1');add([[s*2.6,.12,2.25],[s*5.8,.12,2.25],[s*5.8,3.38,2.25],[s*2.6,3.38,2.25]],'#c1dce6',.2)}
 faces.sort((a,b)=>a.points.reduce((n,p)=>n+p[2],0)/a.points.length-b.points.reduce((n,p)=>n+p[2],0)/b.points.length);
 return <div className="cleanroom-static"><svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="crFloor" x2="0" y2="1"><stop stopColor="#b2c6d0"/><stop offset="1" stopColor="#e3edf1"/></linearGradient><pattern id="crFilter" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="#e3ecf0"/><path d="M0 0V4" stroke="#bccdd5" strokeWidth=".5"/></pattern><pattern id="crTile" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="#c8d8df"/><circle cx="3" cy="3" r=".55" fill="#a3bac6"/></pattern><linearGradient id="crHaze" x2="0" y2="1"><stop stopColor="#dceef5" stopOpacity=".1"/><stop offset="1" stopColor="#7c9daf" stopOpacity=".08"/></linearGradient></defs><rect width="1600" height="900" fill="#dce7ec"/>{[...backdrop,...faces].map((f,i)=><polygon key={i} points={f.points.map(project).join(' ')} fill={f.fill} opacity={f.opacity} stroke="#7795a5" strokeOpacity=".17" strokeWidth=".7"/>)}<rect width="1600" height="900" fill="url(#crHaze)"/></svg><div className="cleanroom-static-label">2D 공간 안내 · 3D를 지원하지 않는 환경에서도 학습할 수 있어요.</div></div>;
}
