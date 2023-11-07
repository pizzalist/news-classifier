<template>
  <div>
    <!-- 뉴스 셀렉 방법 -->
    <div class="midDiv">
      <div class="text1Div">
        <span class="text1"> 무스마가 만들어가는 오늘 그리고 내일</span>
      </div>
      <div class="SelectDiv">
        <div class="newsSelectDiv">
          <span class="text2">NEWS<br />SELECT</span>
          <span class="btn1">바로가기</span>
        </div>
        <div class="autoNewsSelectDiv">
          <span class="text3">AUTO<br />NEWS<br />SELECT</span>
          <span class="btn2">바로가기</span>
        </div>
      </div>
    </div>
    <!-- 모달창 -->
    <div class="black-bgsignup" v-if="기술스택모달창 == true">
      <!-- 밖에 어둡게 해주는 부분 -->
      <div class="white-bgsignup">
        <!-- 안에 들어가는 부분 -->
        <div class="modalDiv"></div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.newTextDiv {
  position: relative;
  right: 40px;
  top: 3px;
}
.newsText {
  color: #616161;
  text-align: center;
  font-size: 46px;
  font-weight: 700;
}
.basket {
  position: relative;
  bottom: 3px;
}
.MainCoverImg {
  width: 100%;
  height: 400px;
}
.text1Div {
  display: flex;
  justify-content: center;
  padding: 140px 0px 70px 0px;
}
.text1 {
  color: #009fe8;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
}
.SelectDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.newsSelectDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #000;
  width: 250px;
  height: 500px;
}
.autoNewsSelectDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #000;
  background: #000;
  width: 250px;
  height: 500px;
}
.text2 {
  color: #000;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 2.5px;
}
.text3 {
  color: #ffffff;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 2.5px;
}
.btn1 {
  width: 140px;
  height: 50px;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.5px;
}
.btn2 {
  width: 140px;
  height: 50px;
  background: #000;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.5px;
}
</style>
