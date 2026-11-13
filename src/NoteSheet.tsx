import type {Ref} from 'react';

/* iOS 메모처럼 입력하는 즉시 저장되는 메모 시트.
   저장 버튼·예시 문구 없이, 위쪽에 마지막으로 고친 시각만 보여 줍니다. */
const stamp=(iso?:string|null)=>{if(!iso)return '';const d=new Date(iso);if(Number.isNaN(d.getTime()))return '';return new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'2-digit'}).format(d)};

/** onSelection: 글을 드래그해 고르면 고른 글과 포인터 위치(키보드 선택이면 없음)를 알려 줘요 */
export function NoteSheet({label,value,updated,failed,onChange,inputRef,onSelection,placeholder='메모'}:{label:string;value:string;updated?:string|null;failed?:boolean;onChange:(text:string)=>void;inputRef?:Ref<HTMLTextAreaElement>;onSelection?:(text:string,point?:{x:number;y:number})=>void;placeholder?:string}){
 const report=(t:HTMLTextAreaElement,point?:{x:number;y:number})=>{if(!onSelection)return;onSelection(t.value.slice(t.selectionStart,t.selectionEnd).trim(),point)};
 const when=stamp(updated);
 return <div className="note-sheet">
  {when&&<time className="note-sheet-time" dateTime={updated||undefined}>{when}</time>}
  <textarea ref={inputRef} aria-label={label} maxLength={5000} value={value} placeholder={placeholder} onChange={e=>onChange(e.target.value)} onMouseUp={e=>report(e.currentTarget,{x:e.clientX,y:e.clientY})} onKeyUp={e=>{if(e.shiftKey||e.key.startsWith('Arrow')||e.key==='a')report(e.currentTarget)}} onBlur={()=>onSelection?.('')}/>
  {failed&&<p className="note-sheet-error" role="status">저장하지 못했어요. 내용을 복사해 두세요.</p>}
 </div>;
}
