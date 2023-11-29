<template>
  <div>
    <ProcedureBox />
    <div>
      <img
        src="../assets/paper-airplane.png"
        alt="paper-airplane"
        id="paper-airplane" />
      <div class="Text">전송되었습니다.</div>
    </div>
  </div>
</template>

<script>
import ProcedureBox from "@/components/ProcedureBox.vue";

export default { components: { ProcedureBox } };
</script>

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
</style>
