<template>
  <div>
    <div class="dateSetDiv">
      <span class="dateSetText">기간 설정</span>
      <div class="calenderDiv">
        <input type="date" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none">
          <path
            d="M15.586 11.1569L11.636 7.20692C11.4538 7.01832 11.353 6.76571 11.3553 6.50352C11.3576 6.24132 11.4628 5.99051 11.6482 5.8051C11.8336 5.61969 12.0844 5.51452 12.3466 5.51224C12.6088 5.50997 12.8614 5.61076 13.05 5.79292L18.707 11.4499C18.8002 11.5426 18.8741 11.6527 18.9246 11.7741C18.9751 11.8954 19.001 12.0255 19.001 12.1569C19.001 12.2883 18.9751 12.4184 18.9246 12.5398C18.8741 12.6611 18.8002 12.7713 18.707 12.8639L13.05 18.5209C12.9578 18.6164 12.8474 18.6926 12.7254 18.745C12.6034 18.7974 12.4722 18.825 12.3394 18.8262C12.2066 18.8273 12.0749 18.802 11.952 18.7517C11.8291 18.7015 11.7175 18.6272 11.6236 18.5333C11.5297 18.4394 11.4555 18.3278 11.4052 18.2049C11.3549 18.082 11.3296 17.9503 11.3307 17.8175C11.3319 17.6847 11.3595 17.5535 11.4119 17.4315C11.4643 17.3095 11.5405 17.1992 11.636 17.1069L15.586 13.1569H6C5.73478 13.1569 5.48043 13.0516 5.29289 12.864C5.10536 12.6765 5 12.4221 5 12.1569C5 11.8917 5.10536 11.6373 5.29289 11.4498C5.48043 11.2623 5.73478 11.1569 6 11.1569H15.586Z"
            fill="#697077" />
        </svg>
        <input type="date" />
      </div>
    </div>
    <div class="dd">
      <div class="ss">
        <span
          class="industryType"
          v-for="(industry, index) in industryTypes"
          :key="index"
          @click="selectIndustry(industry)"
          :class="{
            selected: selectedIndustry === industry,
            unselected: selectedIndustry !== industry,
          }">
          {{ industry }}
        </span>
      </div>
      <div class="dropdownBox">
        <div
          class="dropdown"
          v-if="selectedIndustry === '산업정책'"
          id="FirstDropdown">
          <div class="list">
            <div
              class="list-item"
              v-for="(item, index) in paginatedItems"
              :key="index">
              <input
                type="checkbox"
                :id="'firstItem' + index"
                v-model="item.checked" />
              <label :for="'firstItem' + index">
                <div class="item-title">{{ item.title }}</div>
                <div class="item-content">{{ item.content }}</div>
              </label>
            </div>
          </div>
        </div>

        <div
          class="dropdown"
          v-if="selectedIndustry === '건설/ESG'"
          id="SecondDropdown">
          <div class="list">
            <div
              class="list-item"
              v-for="(item, index) in paginatedItems"
              :key="index">
              <input
                type="checkbox"
                :id="'secondItem' + index"
                v-model="item.checked" />
              <label :for="'secondItem' + index">
                <div class="item-title">{{ item.title }}</div>
                <div class="item-content">{{ item.content }}</div>
              </label>
            </div>
          </div>
        </div>

        <div
          class="dropdown"
          v-if="selectedIndustry === '조선/ESG'"
          id="ThirdDropdown">
          <div class="list">
            <div
              class="list-item"
              v-for="(item, index) in paginatedItems"
              :key="index">
              <input
                type="checkbox"
                :id="'thirdItem' + index"
                v-model="item.checked" />
              <label :for="'thirdItem' + index">
                <div class="item-title">{{ item.title }}</div>
                <div class="item-content">{{ item.content }}</div>
              </label>
            </div>
          </div>
        </div>

        <div
          class="dropdown"
          v-if="selectedIndustry === 'IT'"
          id="FourthDropdown">
          <div class="list">
            <div
              class="list-item"
              v-for="(item, index) in paginatedItems"
              :key="index">
              <input
                type="checkbox"
                :id="'fourthItem' + index"
                v-model="item.checked" />
              <label :for="'fourthItem' + index">
                <div class="item-title">{{ item.title }}</div>
                <div class="item-content">{{ item.content }}</div>
              </label>
            </div>
          </div>
        </div>
        <div class="btnDiv">
          <WhiteButton @click="addToCart()" ButtonText="장바구니" />
        </div>
        <div class="pagination">
          <span class="prevBtn" @click="prevPage" :disabled="currentPage === 1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M15 19L8 12L15 5"
                stroke="#21272A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
          <span
            v-for="page in totalPage"
            :key="page"
            :class="{
              'page-number': true,
              'current-page': currentPage === page,
            }"
            @click="gotoPage(page)">
            {{ page }}
          </span>
          <span
            class="nextBtn"
            @click="nextPage"
            :disabled="currentPage === totalPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M9 5L16 12L9 19"
                stroke="#21272A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhiteButton from "../components/WhiteButton.vue";

export default {
  components: { WhiteButton },
  data() {
    return {
      items: [
        [
          { title: "산업정책", content: "Description for Item 1" },
          { title: "산업정책", content: "Description for Item 2" },
          { title: "산업정책", content: "Description for Item 3" },
          { title: "산업정책", content: "Description for Item 4" },
          { title: "산업정책", content: "Description for Item 5" },
          { title: "산업정책", content: "Description for Item 6" },
          { title: "산업정책", content: "Description for Item 7" },
          { title: "산업정책", content: "Description for Item 8" },
          { title: "산업정책", content: "Description for Item 9" },
          { title: "산업정책", content: "Description for Item 10" },
          { title: "산업정책", content: "Description for Item 11" },
          { title: "산업정책", content: "Description for Item 12" },
          { title: "산업정책", content: "Description for Item 13" },
          { title: "산업정책", content: "Description for Item 14" },
          { title: "산업정책", content: "Description for Item 15" },
          { title: "산업정책", content: "Description for Item 16" },
          { title: "산업정책", content: "Description for Item 17" },
          { title: "산업정책", content: "Description for Item 18" },
          { title: "산업정책", content: "Description for Item 19" },
          { title: "산업정책", content: "Description for Item 20" },
        ],
        [
          { title: "건설/ESG", content: "Description for Item 1" },
          { title: "건설/ESG", content: "Description for Item 2" },
          { title: "건설/ESG", content: "Description for Item 3" },
          { title: "건설/ESG", content: "Description for Item 4" },
          { title: "건설/ESG", content: "Description for Item 5" },
          { title: "건설/ESG", content: "Description for Item 6" },
          { title: "건설/ESG", content: "Description for Item 7" },
          { title: "건설/ESG", content: "Description for Item 8" },
          { title: "건설/ESG", content: "Description for Item 9" },
          { title: "건설/ESG", content: "Description for Item 10" },
          { title: "건설/ESG", content: "Description for Item 11" },
          { title: "건설/ESG", content: "Description for Item 12" },
          { title: "건설/ESG", content: "Description for Item 13" },
          { title: "건설/ESG", content: "Description for Item 14" },
          { title: "건설/ESG", content: "Description for Item 15" },
          { title: "건설/ESG", content: "Description for Item 16" },
          { title: "건설/ESG", content: "Description for Item 17" },
          { title: "건설/ESG", content: "Description for Item 18" },
          { title: "건설/ESG", content: "Description for Item 19" },
          { title: "건설/ESG", content: "Description for Item 20" },
        ],
        [
          { title: "조선/ESG", content: "Description for Item 1" },
          { title: "조선/ESG", content: "Description for Item 2" },
          { title: "조선/ESG", content: "Description for Item 3" },
          { title: "조선/ESG", content: "Description for Item 4" },
          { title: "조선/ESG", content: "Description for Item 5" },
          { title: "조선/ESG", content: "Description for Item 6" },
          { title: "조선/ESG", content: "Description for Item 7" },
          { title: "조선/ESG", content: "Description for Item 8" },
          { title: "조선/ESG", content: "Description for Item 9" },
          { title: "조선/ESG", content: "Description for Item 10" },
          { title: "조선/ESG", content: "Description for Item 11" },
          { title: "조선/ESG", content: "Description for Item 12" },
          { title: "조선/ESG", content: "Description for Item 13" },
          { title: "조선/ESG", content: "Description for Item 14" },
          { title: "조선/ESG", content: "Description for Item 15" },
          { title: "조선/ESG", content: "Description for Item 16" },
          { title: "조선/ESG", content: "Description for Item 17" },
          { title: "조선/ESG", content: "Description for Item 18" },
          { title: "조선/ESG", content: "Description for Item 19" },
          { title: "조선/ESG", content: "Description for Item 20" },
        ],
        [
          { title: "IT", content: "Description for Item 1" },
          { title: "IT", content: "Description for Item 2" },
          { title: "IT", content: "Description for Item 3" },
          { title: "IT", content: "Description for Item 4" },
          { title: "IT", content: "Description for Item 5" },
          { title: "IT", content: "Description for Item 6" },
          { title: "IT", content: "Description for Item 7" },
          { title: "IT", content: "Description for Item 8" },
          { title: "IT", content: "Description for Item 9" },
          { title: "IT", content: "Description for Item 10" },
          { title: "IT", content: "Description for Item 11" },
          { title: "IT", content: "Description for Item 12" },
          { title: "IT", content: "Description for Item 13" },
          { title: "IT", content: "Description for Item 14" },
          { title: "IT", content: "Description for Item 15" },
          { title: "IT", content: "Description for Item 16" },
          { title: "IT", content: "Description for Item 17" },
          { title: "IT", content: "Description for Item 18" },
          { title: "IT", content: "Description for Item 19" },
          { title: "IT", content: "Description for Item 20" },
        ],
      ],
      industryTypes: ["산업정책", "건설/ESG", "조선/ESG", "IT"],
      selectedIndustry: "산업정책",
      itemsPerPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      const selectedIndustryIndex = this.industryTypes.indexOf(
        this.selectedIndustry
      );
      return this.items[selectedIndustryIndex].slice(start, end);
    },
    totalPage() {
      const selectedIndustryIndex = this.industryTypes.indexOf(
        this.selectedIndustry
      );
      return Math.ceil(
        this.items[selectedIndustryIndex].length / this.itemsPerPage
      );
    },
  },
  methods: {
    selectIndustry(industry) {
      this.selectedIndustry = industry;
      this.currentPage = 1;
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    gotoPage(page) {
      this.currentPage = page;
    },
    addToCart() {
      // 장바구니에 아이템 추가 로직을 여기에 추가
      // 여기에서는 단순히 알림 창을 띄우는 메세지만 추가하고,
      // 실제로는 장바구니에 아이템을 추가하는 로직을 구현해야 합니다.
      const confirmAddToCart = window.confirm(
        "장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까?"
      );

      if (confirmAddToCart) {
        // 예를 눌렀을 때 장바구니 페이지로 이동
        this.$router.push("/BasketPage");
      } else {
        // 아니요를 눌렀을 때 추가만 하고 페이지 이동 없음
        // 실제로는 여기에 장바구니에 아이템을 추가하는 로직을 추가해야 합니다.
      }
    },
  },
};
</script>

<style scoped>
.dateSetDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 20px;
}
.dateSetText {
  color: #3b3b3b;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}
.calenderDiv {
  display: flex;
  align-items: center;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
input[type="checkbox"]:checked {
  width: 20px;
  height: 20px;
}
.dd {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 85%;
  padding-top: 40px;
  margin-bottom: 200px;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #d6dbe5;
}
.ss {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d6dbe5;
  margin-right: 35px;
  padding-right: 25px;
}
.industryType {
  white-space: nowrap;
  color: #009fe8;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 100px;
  cursor: pointer;
}
.selected {
  color: #009fe8;
}
.selected:hover {
  color: #007eb8;
}
.unselected {
  color: rgb(181, 181, 181);
}
.unselected:hover {
  color: rgb(136, 136, 136);
}
.dropdownBox {
  font-size: 1.5em;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
}
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #aaa;
  border-top: 0;
  max-height: 200px; /* Set the max height for the dropdown */
  overflow-y: auto; /* Enable vertical scrolling if needed */
}

.list-item {
  display: flex;
  align-items: center;
  width: 1000px;
  padding: 10px;
  border-bottom: 1px solid #aaa;
}

input[type="checkbox"] {
  margin-right: 30px;
}

.item-title {
  flex: 1;
}

.item-content {
  flex: 2;
}

.btnDiv {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.page-number {
  cursor: pointer;
  margin: 0 10px;
  font-size: 22px; /* 원하는 폰트 크기로 조정하세요 */
  color: #919191;
}

.current-page {
  font-size: 27px; /* 현재 페이지 폰트 크기를 키우는 부분입니다. */
  font-weight: bold;
  color: black;
}
.prevBtn {
  cursor: pointer;
  margin-right: 10px;
}
.nextBtn {
  cursor: pointer;
  margin-left: 10px;
}
</style>
