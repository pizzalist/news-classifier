<template>
  <div>
    <div class="procedureBox">
      <div class="procedure" id="Confirmation">결과물 확인</div>
      <div class="procedure" id="Subscribers">구독자 확인</div>
      <div class="procedure" id="SendMail">메일 전송</div>
    </div>
  </div>
</template>

<script>
export default { name: "procedureBox" };
</script>

<style scoped>
.procedureBox {
  margin: 0px 50px;

  display: flex;
  justify-content: center;
}
#Subscribers {
  color: #00a7e1;
  border-color: #00a7e1;
}
.procedure {
  display: flex;
  margin: 2vw; /* 반응형 마진 사용 (화면 너비의 2% 크기로 조절) */
  border: 2px solid #000;
  min-height: 50px; /* 최소 높이 설정 */
  width: 40%; /* 너비를 화면 너비의 40%로 설정 */
  font-weight: bold; /* 올바른 속성 이름 사용 (font-style 대신 font-weight) */
  justify-content: center;
  align-items: center;
}

/* 화면 너비가 768px 미만일 때 스타일 변경 */
@media (max-width: 768px) {
  .procedure {
    width: 80%; /* 화면 너비의 80%로 변경 */
  }
}
</style>
