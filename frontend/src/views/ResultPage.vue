<template>
  <div>
    <ProcedureBox />

    <div class="contentsBox">
      <div id="TextBox">
        산업 정책 동향 #안전/산업재해/중대재해처벌법 관련 기사 🗞️ 산업재해
        자기규율 예방체계 구축…고용부 법령정비추진반 가동 (23.03.10. 서울신문)
        🗞️ 교통안전공단, ICT 기반 자동차검사소 스마트 안전관리 시스템 개발 추진
        (23.03.10. 보안뉴스) 🗞️ 고용부, '스마트 안전장비 보급·확산사업' 첫
        시행…최대 3천만원 지원 (23.03.08. 뉴스1) 🗞️ 국토안전관리원 "스마트
        안전장비 지원 신청 받습니다" (23.03.07. 연합뉴스) 🗞️ [종합] KCC건설
        공사장서 또 근로자 사망…고용부, 중대재해법 조사 착수 (23.03.06. 뉴스핌)
        🗞️ 세아베스틸 화상 근로자 치료 중 숨져…중대재해법 조사 (23.03.06.
        뉴시스) 🗞️ [단독]국토부, 건설현장 안전관리 규제 아닌 민간 자율 맡긴다
        (23.03.06. 대한경제) 🗞️ 건설 현장별 ‘표준 안전디자인’ 개발한다
        (23.03.06. 대한경제) 🗞️ ‘2023 대한민국 지속가능화학위크’, 3월 22일 인천
        송도에서 개최 (23.03.06. 세계일보) 🗞️ 한은 "산업용 로봇 늘린 만큼
        산업재해 줄어" (23.02.27. 뉴시스) 건설/조선 디지털화 동향
        #스마트건설/ESG 경영 기사 모아보기 🗞️ 현장 감독하는 AI… 공사장엔 로봇개…
        건설, 이젠 내게 맡기세요(23.03.03. 조선일보) 🗞️ GIS기반의 스마트건설
        플랫폼 나왔다(23.03.03. 대한경제) 🗞️ "스마트 건설산업 발전과 협력
        논한다"…제2회 스마트건설세미나 개최(23.03.09. 엔지니어링데일리) 🗞️
        원희룡 "하청업체에 다 떠넘기고 무슨 ESG 경영인가" 질타 (23.03.08.
        이데일리)🗞️ 건설폐기물 관리 깐깐해진다 (23.03.08. 대한경제)🗞️ DL건설,
        미세먼지 흡착·저감 필터 사용...시범 운영 후 타 현장 적용(23.03.07.
        파이낸셜신문)🗞️ 건설근로자공제회-현대건설, 전자카드제도 홍보
        나서(23.03.07. 미디어펜) #스마트조선/ESG 경영 기사 모아보기 🗞️ ‘조타실
        들어온듯’… 자율운항 등 미래바다 기술 요람 (23.03.03. 문화일보)🗞️
        한국조선해양, '사업 연속성 관리체계' 인증 획득…ESG경영 강화 (23.03.03.
        뉴스1) 🗞️ [단독]빌 게이츠와 손잡은 HD현대, 'SMR 발전선' 디자인 첫 공개
        (23.03.12. 머니투데이)🗞️ 해양교통안전공단, 친환경선박 건조 최대 30% 지원
        (23.03.08. 아시아경제)🗞️ 포스코-SK에코플랜트, 해상풍력 구조물 ‘K-부유체’
        공동개발에 성공 (23.03.08. 뉴스투데이)🗞️ 수출입은행, 사우디 아람코와
        60억달러 기본여신약정 체결 (23.03.07. 연합뉴스) IT 동향
      </div>
    </div>
    <BlueButton ButtonText="확인" />
  </div>
</template>

<script>
import ProcedureBox from "@/components/ProcedureBox.vue";
import BlueButton from "@/components/BlueButton.vue";

export default { components: { ProcedureBox, BlueButton } };
</script>

<style scoped>
.procedureBox {
  margin: 0px 50px;

  display: flex;
  justify-content: center;
}
#Confirmation {
  color: #00a7e1;
  border-color: #00a7e1;
}
.procedure {
  display: flex;
  margin: 30px;
  border: 2px solid#000;
  height: 50px;
  width: 200px;
  font-style: bold;
  justify-content: center;
  align-items: center;
}
.contentsBox {
  margin: 0px 50px;
  padding: 30px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
#TextBox {
  font-size: 1em;
}
</style>
