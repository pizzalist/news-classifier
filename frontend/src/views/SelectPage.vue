<template>
  <div>
    <!-- navbar -->
    <div id="navbar">
      <div class="logoImgDiv">
        <img class="logoImg" src="../assets/musma-logo_color.png" alt="musmalogo" />
      </div>
      <div class="newTextDiv">
        <span class="newsText">NEWS</span>
      </div>
      <div class="basket">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="50"
          viewBox="0 0 77 75"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.62538 24.8104C9.52759 23.9314 10.7512 23.4375 12.0272 23.4375H64.9466C66.2225 23.4375 67.4462 23.9314 68.3484 24.8104C69.2506 25.6895 69.7574 26.8818 69.7574 28.125V59.9487C69.7574 65.7409 64.7368 70.3125 58.933 70.3125H18.0407C12.166 70.3125 7.21631 65.4897 7.21631 59.7656V28.125C7.21631 26.8818 7.72317 25.6895 8.62538 24.8104ZM64.9466 28.125L12.0272 28.125L12.0272 59.7656C12.0272 62.9009 14.823 65.625 18.0407 65.625H58.933C62.2217 65.625 64.9466 63.0159 64.9466 59.9487V28.125Z"
            fill="#21272A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.4869 9.375C35.2971 9.375 32.238 10.6097 29.9824 12.8073C27.7269 15.005 26.4598 17.9857 26.4598 21.0937V25.7812C26.4598 27.0757 25.3828 28.125 24.0544 28.125C22.7259 28.125 21.6489 27.0757 21.6489 25.7812V21.0937C21.6489 16.7425 23.4229 12.5695 26.5807 9.49278C29.7384 6.41601 34.0212 4.6875 38.4869 4.6875C42.9526 4.6875 47.2354 6.41601 50.3932 9.49278C53.5509 12.5695 55.3249 16.7425 55.3249 21.0937V25.7812C55.3249 27.0757 54.248 28.125 52.9195 28.125C51.591 28.125 50.5141 27.0757 50.5141 25.7812V21.0937C50.5141 17.9857 49.2469 15.005 46.9914 12.8073C44.7359 10.6097 41.6767 9.375 38.4869 9.375Z"
            fill="#21272A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.0544 30.4688C25.3828 30.4688 26.4598 31.5181 26.4598 32.8125V35.1562C26.4598 38.2643 27.7269 41.245 29.9824 43.4427C32.238 45.6404 35.2971 46.875 38.4869 46.875C41.6767 46.875 44.7359 45.6404 46.9914 43.4427C49.2469 41.245 50.5141 38.2643 50.5141 35.1562V32.8125C50.5141 31.5181 51.591 30.4688 52.9195 30.4688C54.248 30.4688 55.3249 31.5181 55.3249 32.8125V35.1562C55.3249 39.5075 53.5509 43.6805 50.3932 46.7572C47.2354 49.834 42.9526 51.5625 38.4869 51.5625C34.0212 51.5625 29.7384 49.834 26.5807 46.7572C23.4229 43.6805 21.6489 39.5075 21.6489 35.1562V32.8125C21.6489 31.5181 22.7259 30.4688 24.0544 30.4688Z"
            fill="#21272A"
          />
        </svg>
      </div>
    </div>
    <div>
      <img class="MainCoverImg" src="../assets/apply-slider-backgrounddesktop.png" />
    </div>
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
    <div class="black-bgsignup" v-if="기술스택모달창 == true">  <!-- 밖에 어둡게 해주는 부분 -->
      <div class="white-bgsignup"> <!-- 안에 들어가는 부분 -->
        <div class="modalDiv">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
}
.logoImg {
  width: 150px;
  height: 40px;
  position: relative;
  bottom: 5px;
}
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
.midDiv {
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
