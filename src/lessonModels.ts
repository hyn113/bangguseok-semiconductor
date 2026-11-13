/* 블렌더로 만든 3D 모형 등록표.
   여기에 등록한 화면은 기본 모형 대신 이 파일을 가운데 캔버스에 띄워요. 등록하지 않으면 지금 모형을 그대로 써요.

   ── 블렌더에서 내보내는 방법 ──
   1. 파일 → 내보내기 → glTF 2.0 (.glb/.gltf), 형식은 'glTF Binary (.glb)'
   2. 포함: 선택한 오브젝트 또는 보이는 오브젝트 / 변환: '+Y Up' 켜기
   3. 내보내기 전에 모든 오브젝트에 Ctrl+A → 'All Transforms' 적용
   4. '분해하기'는 맨 위 단계의 오브젝트(또는 빈 오브젝트 하나 아래의 자식들)를 부품 하나로 보고,
      모형 중심에서 바깥쪽으로 벌려요. 따로 벌어지길 원하는 부품은 별도 오브젝트로 나눠 두세요.
   5. 만든 파일은 public/models/ 에 넣고 아래에 경로를 적어요.

   키 = 화면: ffu | gown | gowning | wafer | photo | mosfet
   예)
     ffu:{src:'/models/ffu.glb',label:'FFU 3D 모형'},
     photo:{src:'/models/spin-coater.glb',label:'스핀 코터 3D 모형'},
*/
export type LessonModel={src:string;label:string};
export const lessonModels:Partial<Record<'ffu'|'gown'|'gowning'|'wafer'|'photo'|'mosfet',LessonModel>>={
};
