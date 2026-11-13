# 전자회로 실습대 GLB — v1

## 파일
1. `circuit_01_voltage_current_switch.glb`: 전압·전류·스위치
2. `circuit_02_binary_signal.glb`: 0과 1
3. `circuit_03_and_input_output.glb`: A/B 입력과 AND 출력

각 파일은 독립적인 실습대이며 메시·색·금속성·거칠기·발광 재질과 약 3.967초 상태 예시 애니메이션 1개가 들어 있습니다. 조명·카메라·스튜디오 배경은 제외했습니다. 웹에서는 환경광과 조명을 설정하세요.

## 장면별 상태
- 1번: 0초 OFF → 1.3초 ON → 약 2.967초 OFF. 회로가 열리면 표시등과 전류 방향 화살표는 scale 0으로 감춥니다. 화살표는 흐름 속도 시뮬레이션이 아니라 관습적 전류 방향 표시입니다.
- 2번: 0초 LOW → 1.3초 HIGH → 약 2.967초 LOW. 0V/3.3V는 예시로만 제시하며 실제 LOW/HIGH는 회로별 전압 범위입니다.
- 3번: 0초 A=0,B=0,Y=0 / 1초 0,1,0 / 2초 1,0,0 / 3초 1,1,1. Y=A AND B입니다.

이 움직임은 연속적인 물리 시뮬레이션이 아닌 상태 전환 예시입니다. 스위치의 실제 접점 동작 시간과 전자 이동 속도를 표현하지 않습니다.

## 개발 연결
GLB를 불러오는 것만으로 사용자 클릭이 활성화되지는 않습니다. Three.js 등의 raycast로 부품 선택을 처리하고 상태 갱신 코드를 붙여야 합니다. 이 파일에 웹 클릭 코드는 들어 있지 않습니다.

- 1번: `switch_A_lever`를 입력으로, `lamp_glow`, `current_arrow_0`~`4`를 출력으로 사용합니다.
- 2번: `signal_switch_lever`를 입력으로, `signal_LOW`, `signal_HIGH`를 표시로 사용합니다.
- 3번: `input_A_lever`, `input_B_lever`를 입력으로, `output_Y_glow`, `truth_highlight_0`~`3`를 표시로 사용합니다.
- lever는 빈 부모 노드이고 handle/contact_bar는 자식 메시입니다. 클릭은 자식 메시를 선택한 후 부모 입력에 매핑하세요.
- 실제 사용자 조작 모드에서는 자동 시연 클립을 정지하고 상태를 직접 제어하거나, 시연 전용 모드와 분리하세요. Mixer가 계속 재생 중이면 직접 바꾼 값을 덮어쓸 수 있습니다.
- ON 스위치 quaternion은 [0,0,0,1], OFF는 [0,0,0.3193088,0.9476507]입니다(이 GLB의 로컬 좌표 기준). Blender의 Y회전을 GLB Z축 회전에 그대로 적용하면 안 됩니다.
- 표시/숨김은 해당 노드 scale을 (1,1,1)/(0,0,0)으로 바꿉니다. 글자는 메시로 변환되었으므로 한국어 설명/큰 상태 표시는 웹 HTML로 별도 표시하는 것을 권장합니다.

## 교육 범위
1번은 간단한 폐회로 개념입니다. 열린 회로에도 전압은 존재할 수 있습니다. 2·3번은 전원이 있는 신호·논리 모듈 개념이며 실제 IC 내부 구조나 상세 배선도는 아닙니다. 내부 전원, 접지, 입력 안정화, 표시등 구동·전류 제한 회로는 생략했습니다. 실제 전기 실험 조립 지침으로 사용하지 마세요.

## 검증과 한계
- 세 파일 모두 Three.js GLTFLoader 파싱 성공.
- 독립 장면, 메시 좌표, 재질, 각 1개 애니메이션 확인.
- AnimationMixer로 ON/OFF·LOW/HIGH·AND 4조합과 진리표 표시 확인.
- 1번과 3번을 Blender로 재수입해 렌더 확인.
- 실제 Mac/Safari/모바일 GPU 렌더링과 성능은 아직 검증하지 않았습니다. 압축·LOD·모바일 최적화도 미적용입니다.
- 기존 사이트나 GitHub에 반영하지 않았습니다.

## 출처·권리
형상·재질은 Blender로 자체 제작했습니다. 외부 3D·사진·텍스처 에셋과 특정 업체 로고를 사용하지 않았습니다. 모든 상업적 사용에 대한 법적 보장은 아닙니다.
- 개념 참고: Renesas, Elemental Digital Circuits
  https://www.renesas.com/en/support/engineer-school/digital-circuits-01-and-circuit-or-circuit-not-circuit
- Blender: https://www.blender.org/
- 검증 도구 Three.js: https://threejs.org/

## 변환 시 수정한 내용
초기 OFF(숨김) 화살표의 회전 정보가 사라지는 문제를 발견하여, 각 화살표에 고정 방향 부모 노드(`current_arrow_N_orientation`)를 추가했습니다. OFF에서 직접 표시하거나 애니메이션으로 ON으로 바뀔 때 모두 방향이 유지되는 것을 Three.js에서 검사했습니다. 화살표의 방향 부모는 수정하지 말고 자식의 scale만 바꾸세요.
