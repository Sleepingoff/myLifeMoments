# myLifeMoments
- 첫번째 블로그&포트폴리오

최종목표: 시간과 일정기록에 초점을 두었습니다.
 - 그룹을 만들어 기록을 공유할 수 있도록 할 예정입니다.
 - 크롭 확장 기능을 새로 만들어 같이 연동할 수 있도록 할 예정입니다.
 
---

사용언어: `html` `css` `바닐라js` `jQuery`

---

###### 1차 목표: 원하는 기능을 우선적으로 적용한 후 메뉴를 구체화한 다음 재배치하기
> 우선 적용할 기능
- 바닐라 js의 경우
 - 랜덤 이미지 나오게 하기
 - 현재 시간 보여주기
 - localStorage를 활용한 todolist
 - localStorage를 활용한 로그인기능
 - weather API를 활용한 현재위치 및 날씨

- jQuery의 경우
 - 캐러셀
 - slick() 적용하기

- css 미디어 쿼리로 반응형 웹 적용하기

> 구현 전 구체화하기
1. 메인 페이지_메뉴바에서 항상 접근 가능한 공간
 - 로그인 / 회원가입
 - about site
 - contact me
2. 개인 페이지_개인만 접근 가능한 공간. 같은 그룹원도 접근 불가
 - 여러 보기 제공 < 캘린더(월, 주단위), 그래프 > 기본 주단위 + 그래프 보기
 - 일정별 시간 입력 제공
  - 하루에 여러 번 등록이 가능
  - 같은 일정간의 시간 합계, 총 시간 합계 제공
 - 위의 입력을 토대로 통계 데이터 제공
3. 그룹 페이지_일부 개인만 접근 가능한 공간. 공개여부 설정 가능 및 그룹 활동 피드 제공
 - 전체 그룹 보기
  - 그룹 추가 및 생성 기능 등 설명을 기본으로 보여줌
  - 공개 설정한 그룹 활동 피드 리스트업
  - 그룹 찾기 검색 기능 제공_비공개 그룹일 경우 링크를 통해 접근 가능하도록 설정
 - 그룹 추가 및 생성 기능
 - 그룹 생성 시 설정 페이지 팝업
  - 개인 페이지 데이터 공개 범위 설정
  - 그룹 가입시 일부 데이터 강제 공개로 설정
 - 그룹 추가 시 설명 페이지 팝업
 - 그룹 내 연락 수단 등록 기능
***일정을 기록할 수 있는 부가적인 기능에 초점을 맞춤. 상세 규칙 등은 사용자가 자유롭게 지정하여 사용할 수 있도록 권장***
