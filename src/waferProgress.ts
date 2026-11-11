export const WAFER_PROGRESS_KEY='semilab.v04.wafer-progress';
export type WaferProgress={version:1;stage:number;progress:number;selected:number;seen:number[];updated:string|null;completedAt:string|null};
export const freshWaferProgress=():WaferProgress=>({version:1,stage:0,progress:0,selected:0,seen:[0],updated:null,completedAt:null});
const date=(v:unknown)=>v===null||(typeof v==='string'&&Number.isFinite(Date.parse(v)));
export function validWaferProgress(v:unknown):v is WaferProgress{
 if(!v||typeof v!=='object')return false;const x=v as WaferProgress;
 return x.version===1&&Number.isInteger(x.stage)&&x.stage>=0&&x.stage<=8&&Number.isFinite(x.progress)&&x.progress>=0&&x.progress<=100&&(x.stage>=1&&x.stage<=5||x.progress===0)&&Number.isInteger(x.selected)&&x.selected>=0&&x.selected<4&&Array.isArray(x.seen)&&x.seen.length>=1&&x.seen.length<=4&&new Set(x.seen).size===x.seen.length&&x.seen.every(n=>Number.isInteger(n)&&n>=0&&n<4)&&x.seen.includes(x.selected)&&(x.stage===8||(x.selected===0&&x.seen.length===1&&x.seen[0]===0))&&date(x.updated)&&date(x.completedAt)&&(!x.completedAt||(x.stage===8&&x.seen.length===4));
}
// Only an unsaved write takes precedence over durable storage on the next resume.
// A successfully synced session is a fallback for blocked reads, not a permanent cache.
let session:WaferProgress|null=null;
let pending=false;
export function readWaferProgress(){
 if(pending&&session)return {data:session,failed:true};
 let raw:string|null;
 try{raw=localStorage.getItem(WAFER_PROGRESS_KEY)}catch{return {data:session??freshWaferProgress(),failed:true}}
 if(raw===null){session=null;return {data:freshWaferProgress(),failed:false}}
 try{const v:unknown=JSON.parse(raw);if(validWaferProgress(v)){session=v;return {data:v,failed:false}}}catch{/* Invalid JSON is not a blocked-storage read. */}
 // Do not silently resurrect a stale synced record after external corruption/removal.
 session=null;return {data:freshWaferProgress(),failed:true};
}
export function writeWaferProgress(data:WaferProgress){
 if(!validWaferProgress(data))return false;session=data;
 try{localStorage.setItem(WAFER_PROGRESS_KEY,JSON.stringify(data));pending=false;return true}catch{pending=true;return false}
}
export function readWaferNote(){try{const raw=localStorage.getItem('semilab.v03.wafer-note');const value=raw?JSON.parse(raw):'';return typeof value==='string'&&value.length<=5000?value:''}catch{return ''}}
