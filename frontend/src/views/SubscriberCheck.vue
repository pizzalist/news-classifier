<template>
  <div>
    <ProcedureBox />
    <div class="Text">전송되었습니다.</div>
  </div>
</template>

<script>
import ProcedureBox from "@/components/ProcedureBox.vue";

export default { components: { ProcedureBox } };
</script>

<style scoped>
.Text {
  padding: 2em;
  text-align: center;
}
</style>
