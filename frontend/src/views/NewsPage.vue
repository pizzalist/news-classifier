<template>
  <div>
    <!--modal-->
    <div class="modalBackgound" v-if="isModalOpen">
      <div class="modalPage">
        <span class="modalClose" @click="closeModal">&times;</span>
        <h2>{{ selectedNews.title }}</h2>
        <p>{{ selectedNews.content }}</p>
      </div>
    </div>
    <!--modal end-->

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

              <div class="readmore" @click="openModal(item)">요약 보기</div>
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
              <div class="readmore" @click="openModal(item)">요약 보기</div>
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
              <div class="readmore" @click="openModal(item)">요약 보기</div>
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
              <div class="readmore" @click="openModal(item)">요약 보기</div>
            </div>
          </div>
        </div>
        <div class="newscontain">
          <WhiteButton @click="addToCart()" ButtonText="뉴스 담기" />
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
          {
            title: "newstitle",
            content:
              "https://n.news.naver.com/mnews/article/016/0002223509?sid=105",
          },
          { title: "title", content: "link 2" },
          { title: "title", content: "link 3" },
          { title: "title", content: "link 4" },
          { title: "title", content: "link 5" },
          { title: "title", content: "link 6" },
          { title: "title", content: "link 7" },
          { title: "title", content: "link 8" },
          { title: "title", content: "link 9" },
          { title: "title", content: "link 10" },
          { title: "title", content: "link 11" },
          { title: "title", content: "link 12" },
          { title: "title", content: "link 13" },
          { title: "title", content: "link 14" },
          { title: "title", content: "link 15" },
          { title: "title", content: "link 16" },
          { title: "title", content: "link 17" },
          { title: "title", content: "link 18" },
          { title: "title", content: "link 19" },
          { title: "title", content: "link 20" },
        ],
        [
          { title: "title2", content: "link 1" },
          { title: "title2", content: "link 2" },
          { title: "title2", content: "link 3" },
          { title: "title2", content: "link 4" },
          { title: "title2", content: "link 5" },
          { title: "title2", content: "link 6" },
          { title: "title2", content: "link 7" },
          { title: "title2", content: "link 8" },
          { title: "title2", content: "link 9" },
          { title: "title2", content: "link 10" },
          { title: "title2", content: "link 11" },
          { title: "title2", content: "link 12" },
          { title: "title2", content: "link 13" },
          { title: "title2", content: "link 14" },
          { title: "title2", content: "link 15" },
          { title: "title2", content: "link 16" },
          { title: "title2", content: "link 17" },
          { title: "title2", content: "link 18" },
          { title: "title2", content: "link 19" },
          { title: "title2", content: "link 20" },
        ],
        [
          { title: "title3", content: "link 1" },
          { title: "title3", content: "link 2" },
          { title: "title3", content: "link 3" },
          { title: "title3", content: "link 4" },
          { title: "title3", content: "link 5" },
          { title: "title3", content: "link 6" },
          { title: "title3", content: "link 7" },
          { title: "title3", content: "link 8" },
          { title: "title3", content: "link 9" },
          { title: "title3", content: "link 10" },
          { title: "title3", content: "link 11" },
          { title: "title3", content: "link 12" },
          { title: "title3", content: "link 13" },
          { title: "title3", content: "link 14" },
          { title: "title3", content: "link 15" },
          { title: "title3", content: "link 16" },
          { title: "title3", content: "link 17" },
          { title: "title3", content: "link 18" },
          { title: "title3", content: "link 19" },
          { title: "title3", content: "link 20" },
        ],
        [
          { title: "title4", content: "link 1" },
          { title: "title4", content: "link 2" },
          { title: "title4", content: "link 3" },
          { title: "title4", content: "link 4" },
          { title: "title4", content: "link 5" },
          { title: "title4", content: "link 6" },
          { title: "title4", content: "link 7" },
          { title: "title4", content: "link 8" },
          { title: "title4", content: "link 9" },
          { title: "title4", content: "link 10" },
          { title: "title4", content: "link 11" },
          { title: "title4", content: "link 12" },
          { title: "title4", content: "link 13" },
          { title: "title4", content: "link 14" },
          { title: "title4", content: "link 15" },
          { title: "title4", content: "link 16" },
          { title: "title4", content: "link 17" },
          { title: "title4", content: "link 18" },
          { title: "title4", content: "link 19" },
          { title: "title4", content: "link 20" },
        ],
      ],
      isModalOpen: false,
      selectedNews: { title: "", content: "" },
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
    openModal(item) {
      this.selectedNews = { ...item }; // Store the selected news item
      this.isModalOpen = true; // Show the modal
    },
    closeModal() {
      this.isModalOpen = false; // Hide the modal
    },
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
      const confirmAddToCart = window.confirm(
        "선택한 뉴스가 담겼습니다. 담은 뉴스를 보시겠습니까?"
      );

      if (confirmAddToCart) {
        this.$router.push("/BasketPage");
      } else {
      }
    },
  },
};
</script>

<style scoped>
/* modal */
.modalBackgound {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
.modalPage {
  font-size: 1.25em;
  background: white;
  border-radius: 8px;
  padding: 3%;
  margin: 10%;
  white-space: normal;
}
.modalClose {
  font-size: 2em;
  cursor: pointer;
  position: relative;
  float: right;
}
/* modal end */

input[type="date"] {
  width: 50%;
  height: 3vh;
  text-align: center;
  font-size: 1.5em;
}
.readmore {
  margin-left: auto;
  text-align: right;
  padding: 1%;
  background-color: #aaa;
  color: #fff;
}
.dateSetDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3%;
  border-bottom: 1px solid #d6dbe5;
}
.dateSetText {
  color: #3b3b3b;
  font-size: 1.5em;
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
.selected,
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
  max-height: 200px; /* Set the max height for the dropdown */
  overflow-y: auto; /* Enable vertical scrolling if needed */
}

.list-item {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 75vw;
  padding: 10px;
  border-bottom: 1px solid #aaa;
  white-space: nowrap;
}

.item-title,
.item-content {
  overflow: hidden;
  text-overflow: ellipsis;

  width: 55vw;
}

input[type="checkbox"] {
  margin-right: 30px;
}

.newscontain {
  padding: 3% 0%;
  display: flex;
  justify-content: flex-start;
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
