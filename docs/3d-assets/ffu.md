# FFU 단계별 웹용 GLB v1

Blender 확인용 FFU 모델에서 내보낸 6개 GLB입니다. 모델 형태·재질 및 필요한 움직임을 포함합니다. 웹 버튼이나 설명 문구는 자동으로 생성되지 않습니다.

## 파일과 움직임
1. `ffu_01_overview.glb`: 외관·천장 위치, 정적 모델.
2. `ffu_02_exploded_components.glb`: 조립 상태에서 부품이 분리되는 가상 분해.
3. `ffu_03_intake_and_blower.glb`: 흡입·원심 블로워. 팬 회전 포함. 화살표는 정적 개념 표시.
4. `ffu_04_hepa_filtration.glb`: HEPA 여과 영역·하향 공급. 팬 회전 포함. 미세 입자 포집을 계산하지 않음.
5. `ffu_05_downward_supply.glb`: 아래로 공급되는 공기 방향. 팬 회전 포함. 화살표는 실제 유동이 아님.
6. `ffu_06_reassembly.glb`: 분해 상태에서 조립 상태로 복귀.

애니메이션은 30fps 원본의 1~120프레임, 약 3.97초 클립입니다. 실제 운전 시간/속도가 아닙니다. 부품 분해 중에는 팬을 회전시키지 않습니다. 각 파일을 독립적으로 불러오는 방식으로 구성했습니다.

## 웹 적용
Three.js의 GLTFLoader 등 glTF 2.0 지원 뷰어로 불러옵니다. 움직임은 AnimationMixer로 해당 클립을 재생합니다. 분해·재조립은 한 번 재생 후 마지막 프레임 유지(LoopOnce, clampWhenFinished)가 적합합니다. 팬 회전은 반복 재생할 수 있습니다.

카메라·조명·스튜디오 바닥은 제외했습니다. 웹에서 환경광, 조명/HDR, 카메라와 회전 제어를 별도로 설정해야 합니다. 색과 금속성·거칠기는 포함되지만 화면은 조명·톤매핑에 따라 Blender 렌더와 다를 수 있습니다. 외부 이미지 텍스처 없이 자체 PBR 재질입니다.

## 범위·주의
산업설비 형태를 참고한 자체 교육용 모델이며 사진급 실사 완성본이나 제조사 CAD가 아닙니다. 제품별 구성은 다릅니다. FFU는 클린룸 여과 공기 공급 설비이고 에어샤워와 다릅니다. 분해는 가상 학습 장면이지 실제 유지보수 지침이 아닙니다. 기류, 압력, 입자 포집·청정도는 계산하지 않습니다.

GLB 구조와 로딩, 재질, 움직임을 코드로 검사했습니다. 실제 Mac/Safari/모바일 GPU 렌더링 및 성능은 미검증입니다. 모바일용 LOD나 압축은 미적용입니다. 기존 사이트/GitHub에는 반영하지 않았습니다.

## 참고·도구
- Camfil FFU: https://www.camfil.com/en-us/products/housings-frames--louvers/fan-filter-units/camffu
- Terra Universal FFU: https://www.terrauniversal.com/media/asset-library/1/8/1800-34-CE-Fan-Filter-Unit-20260508.pdf
- Blender: https://www.blender.org/
- Three.js: https://threejs.org/

네이버 제공 링크는 본문 접근이 불가능해 사용하지 않았습니다. 외부 사진·3D·텍스처 에셋 사용 없음.
