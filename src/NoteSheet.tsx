import type {Ref} from 'react';

/* iOS 메모처럼 입력하는 즉시 저장되는 메모 시트.
   저장 버튼·예시 문구 없이, 위쪽에 마지막으로 고친 시각만 보여 줍니다. */
const stamp=(iso?:string|null)=>{if(!iso)return '';const d=new Date(iso);if(Number.isNaN(d.getTime()))return '';return new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'2-digit'}).format(d)};

export function NoteSheet({label,value,updated,failed,onChange,inputRef}:{label:string;value:string;updated?:string|null;failed?:boolean;onChange:(text:string)=>void;inputRef?:Ref<HTMLTextAreaElement>}){
 const when=stamp(updated);
 return <div className="note-sheet">
  {when&&<time className="note-sheet-time" dateTime={updated||undefined}>{when}</time>}
  <textarea ref={inputRef} aria-label={label} maxLength={5000} value={value} placeholder="메모" onChange={e=>onChange(e.target.value)}/>
  {failed&&<p className="note-sheet-error" role="status">저장하지 못했어요. 내용을 복사해 두세요.</p>}
 </div>;
}
