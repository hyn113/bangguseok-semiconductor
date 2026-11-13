/* 학습 화면 왼쪽 패널의 이미지·영상 자리.
   파일을 public/media/ 에 넣고 아래 목록에 경로를 적으면 해당 화면에 나타나요.
   등록하지 않은 곳은 아무것도 보이지 않아요.

   키 규칙: '화면' 또는 '화면:구성요소번호'
     화면 = ffu | gown | gowning | wafer | photo | mosfet
     예) 'ffu'      → FFU 화면 전체에 쓰는 영상
         'ffu:0'    → FFU 1번 구성 요소(팬)를 골랐을 때만 쓰는 이미지 (번호는 0부터)
         'photo:1'  → 포토공정 2단계(노광)

   예시)
     'photo':{type:'video',src:'/media/photo-spin-coating.mp4',poster:'/media/photo-spin-coating.jpg',alt:'스핀 코터가 웨이퍼에 PR을 도포하는 모습'},
     'ffu:1':{type:'image',src:'/media/ffu-filter.jpg',alt:'주름 여재 필터 단면'},
*/
export type LessonMediaItem={type:'image'|'video';src:string;alt:string;poster?:string};
export const lessonMedia:Record<string,LessonMediaItem>={
};

export function LessonMedia({module,part}:{module:string;part?:number}){
 const item=(part!==undefined?lessonMedia[`${module}:${part}`]:undefined)??lessonMedia[module];
 if(!item)return null;
 return <figure className="lesson-media">{item.type==='video'?<video src={item.src} poster={item.poster} controls playsInline preload="metadata" aria-label={item.alt}/>:<img src={item.src} alt={item.alt} loading="lazy"/>}</figure>;
}
