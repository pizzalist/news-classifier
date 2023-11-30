<template>
  <div>
    <div>
      <div class="procedureBox">
        <div class="procedure" id="Confirmation">결과물 확인</div>
        <div class="procedure" id="SendMail">메일 전송</div>
      </div>
    </div>
    <div>
      <img
        src="../assets/paper-airplane.png"
        alt="paper-airplane"
        id="paper-airplane" />
      <div class="Text">전송되었습니다.</div>
    </div>
  </div>
</template>

<style scoped>
.Text {
  font-size: 1.5em;
  padding: 1em;
  text-align: center;
}
#paper-airplane {
  width: 20vh;
  height: 20vh;
  padding: 2em;

  margin: auto;
  display: flex;
  justify-content: center;
}
.procedureBox {
  margin: 0px 50px;
  font-size: 1em;
  display: flex;
  justify-content: center;
}
#SendMail {
  color: #0096e7;
  border-color: #0096e7;
}
.procedure {
  display: flex;
  margin: 2vw;
  border: 2px solid #000;
  min-height: 50px;
  width: 40%;
  font-weight: bold;
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
