/* 학습 화면마다 다른 곳에 저장된 '기본 메모'를 한 방식으로 읽고 써요(퀴즈 미션의 메모 탭에서 사용). */
export type LessonNote={text:string;updated:string|null;failed:boolean};
const keyOf=(lesson:string):[string,string]|null=>lesson==='wafer'?['semilab.v03.wafer-note','semilab.v03.wafer-note-updated']:['photo','mosfet','gowning'].includes(lesson)?[`semilab.${lesson}.note`,`semilab.${lesson}.note.updated`]:null;
const LIST='semilab.v02.notes';/* FFU·복장 탐색은 [{kind,text,updated}] 목록 */
export function readLessonNote(lesson:string):LessonNote{
 try{
  const k=keyOf(lesson);
  if(k)return {text:localStorage.getItem(k[0])||'',updated:localStorage.getItem(k[1]),failed:false};
  const list=JSON.parse(localStorage.getItem(LIST)||'[]');const n=Array.isArray(list)?list.find((x:{kind:string})=>x&&x.kind===lesson):null;
  return {text:n?.text||'',updated:n?.updated||null,failed:false};
 }catch{return {text:'',updated:null,failed:false}}
}
export function writeLessonNote(lesson:string,text:string):LessonNote{
 const now=new Date().toISOString();
 try{
  const k=keyOf(lesson);
  if(k){localStorage.setItem(k[0],text);localStorage.setItem(k[1],now)}
  else{const list=JSON.parse(localStorage.getItem(LIST)||'[]');const next=[...(Array.isArray(list)?list.filter((x:{kind:string})=>x&&x.kind!==lesson):[]),{kind:lesson,text,updated:now}];localStorage.setItem(LIST,JSON.stringify(next))}
  return {text,updated:now,failed:false};
 }catch{return {text,updated:now,failed:true}}
}
