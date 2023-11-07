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
  margin: 30px;
  border: 2px solid#000;
  height: 50px;
  width: 200px;
  font-style: bold;
  justify-content: center;
  align-items: center;
}
</style>
