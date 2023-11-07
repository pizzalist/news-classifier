<template>
  <div>
    <div class="ButtonArea">
      <button>전송 ></button>
    </div>
  </div>
</template>

<script>
export default { name: "BlueButton" };
</script>

<style scoped>
.ButtonArea {
  margin: 0px 50px;
  padding: 30px 0px;
  display: flex;
  justify-content: right;
}
.ButtonArea > button {
  font-size: 1.2em;
  border: solid #00a7e1;
  border-radius: 50px;
  color: white;
  background-color: #00a7e1;
  width: 150px;
  height: 50px;
}
</style>
