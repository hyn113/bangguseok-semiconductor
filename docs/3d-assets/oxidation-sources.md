# 건식/습식 산화 퍼니스 Blender 초안 v2

## 파일과 장면
- `dry_oxidation_stages.blend`: 건식 산화만 포함합니다.
- `wet_oxidation_stages.blend`: 습식 산화만 포함합니다.
- Blender 상단 Scene 선택에서 다음 장면을 선택하세요.
  1. PREPARE: 보트와 웨이퍼 준비
  2. LOAD: 보트가 석영 튜브로 들어가는 중간 모습
  3. OXIDIZE: 내부 웨이퍼와 공급 방향을 관찰
  4. UNLOAD AFTER COOLING: 완료·냉각 뒤 반출하는 설명 장면
  5. MAGNIFIED_GROWTH: 해당 공정만 표시한 산화막 성장 확대 단면
- 퍼니스 장면은 1~180프레임입니다. 1~60은 투입, 60~150은 처리 구간의 개념 표현, 150~180은 반출입니다. 실제 시간·온도 레시피가 아닙니다. 냉각 세부 과정은 생략했습니다.
- 확대 성장 장면은 1~120프레임, 산화막의 바깥쪽 성장과 내부 실리콘 소모를 보여줍니다.

## 모델 구성
수평형 퍼니스, 절개된 외장과 단열재, 히터 형상, 석영 튜브, 세로로 정렬된 실리콘 웨이퍼와 보트, 로딩 트레이, 가스 공급 모듈, 배관·플랜지·볼트·컨트롤 패널을 기본 형상으로 자체 제작했습니다.
건식에는 O2, 습식에는 H2O VAPOR 공급 표식이 있습니다. 수증기는 물줄기나 액체 물로 표현하지 않았습니다. 주황/청록 화살표는 설명용 표식으로 실제 가스 색이나 유동 시뮬레이션이 아닙니다.

## 반드시 알아둘 한계
- 실제 설비 구성 원리를 참고한 자체 설계 교육 모델입니다. 특정 제조사의 치수/CAD를 복제한 모델이나 실제 설비 운전 시뮬레이터가 아닙니다.
- 보트·웨이퍼·석영 튜브를 보기 위해 앞부분을 잘라냈습니다. 실제 장비가 열린 상태로 가동된다는 뜻이 아닙니다.
- 현재는 산업장비 형태/재질을 넣은 초안입니다. 사진과 구별하기 어려운 완성형 실사 품질은 아닙니다.
- 건식/습식 장비 외형이 반드시 다르다는 뜻이 아닙니다. 동일 계열 장비도 공급 계통에 따라 두 공정을 지원할 수 있습니다.
- 현미경 확대 장면은 SiO2를 구분용 색으로 표시합니다. 실제 두 공정 산화막 색이 다르다는 뜻이 아닙니다.
- 같은 조건에서 습식이 빠르게 성장하는 경향을 표현했지만 두께 비율과 0~120프레임은 실제 공정 수치가 아닙니다.
- SiO2 두께 중 약 44%만큼 Si가 소모되고 약56%가 원표면 위에 나타나는 관계를 확대 표현합니다.

## 검증
저장 원본 재열기, 건식/습식 각각 5장면과 프레임 범위, 주요 오브젝트/애니메이션 존재를 검사합니다. 두 퍼니스 장면 실제 Blender 렌더를 확인합니다. 사용자 Mac에서 직접 조작한 것은 아닙니다.

## 참고 자료·개발 도구·외부 에셋
공정 및 설비 자료:
- University of Illinois ECE444, Lindberg-Tempress 8500: 석영 공정 챔버, 히터/컨트롤, 자동 로더 및 dry/steam oxidation 구조.
  https://fabweb.ece.illinois.edu/lab/equipment/furnace.aspx
- TU Delft, Tempress Furnaces - Oxidation: 열산화 튜브에서 건식·습식 공정 지원.
  https://www.tudelft.nl/en/eemcs/research/facilities/else-kooi-lab/equipment/film-formation/tempress-furnaces-oxidation
- University of Kentucky CNSE, Furnaces: 수평 보트에 웨이퍼를 세로로 배열하는 구조.
  https://cense.engr.uky.edu/equipment/furnaces
- University of Alberta nanoFAB, Thermal oxidation:
  https://toolbox.nanofab.ualberta.ca/sithox/

개발 도구: Blender 4.3.2와 Blender Python, Cycles 렌더러. https://www.blender.org/
외부 3D 모델·텍스처·이미지: 사용하지 않았습니다. 외부 사진은 파일에 삽입하지 않았습니다. 별도 에셋 구매/라이선스는 없습니다.
사용자 제공 네이버 블로그는 원문 접근 불가로 직접 확인한 출처로 사용하지 않았습니다.
사이트/GitHub에 배포하지 않았습니다.
