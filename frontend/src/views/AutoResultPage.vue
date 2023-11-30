<template>
  <div>
    <div class="procedureBox">
      <div class="procedure" id="Confirmation">결과물 확인</div>
      <div class="procedure" id="SendMail">메일 전송</div>
    </div>
    <div class="contentsBox">
      <div>
        <div v-if="newsItems.length === 0" class="dropdownBox">
          <div class="dropdownTitle">뉴스를 담아주세요</div>
        </div>

        <div v-else>
          <img
            src="@/assets/musma_pick.png"
            alt="Musma Pick Image"
            id="musmaspickImg" />
          <div
            class="categoryList"
            v-for="(categoryItems, categoryName) in categorizedItems"
            :key="categoryName">
            <div class="categoryNameDiv">{{ categoryName }}</div>
            <div
              class="listItem"
              v-for="(item, index) in categoryItems"
              :key="index">
              <a :href="item.url" target="_blank" rel="noopener noreferrer">
                <div class="item-title">{{ item.title }}</div>
              </a>
            </div>
          </div>
          <div class="contentText">
            <div class="TrendsText">{{ backendData }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="ButtonArea">
      <router-link to="/MailSend">
        <BlueButton @click="resetStore()" ButtonText="전송" />
      </router-link>
    </div>
  </div>
</template>
<script>
import BlueButton from "@/components/BlueButton.vue";

export default {
  name: "ResultPage",
  components: { BlueButton },
  data() {
    return {
      categories: [
        { id: "1", name: "산업정책" },
        { id: "2", name: "조선정책" },
        { id: "3", name: "건설정책" },
        { id: "0", name: "IT 정책" },
      ],
      selectedCategory: "1",
    };
  },

  computed: {
    newsItems() {
      return this.$store.state.newsItems.map((item) => ({
        ...item,
        checked: false,
      }));
    },
    categorizedItems() {
      const categorizedItems = {};

      // Iterate through the newsItems and categorize them
      this.newsItems.forEach((item) => {
        const categoryName = this.getCategoryName(item.category_id);

        if (!categorizedItems[categoryName]) {
          categorizedItems[categoryName] = [];
        }

        categorizedItems[categoryName].push(item);
      });

      return categorizedItems;
    },
    backendData() {
      return this.$store.state.backendData;
    },
  },

  watch: {
    "$store.state.newsItems": "showCategorizedItems",
  },

  methods: {
    getCategoryName(category) {
      const categoryMap = {
        1: "산업정책",
        3: "건설정책",
        2: "조선정책",
        0: "IT 정책",
      };
      return categoryMap[category] || "다른 카테고리";
    },
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
    },
    showCategorizedItems() {
      console.log(this.categorizedItems);
      this.$data.backendData =
        "Updated backend data after processing categorized items.";
    },
    resetStore() {
      this.$store.dispatch("resetNewsItems");
      this.$store.dispatch("resetSetBackendData");
    },
  },
};
</script>

<style scoped>
#musmaspickImg {
  width: 50%;
  text-align: center;
  display: block;
  margin: 30px auto;
}
.categoryList {
  margin: 30px 0px;
  width: 50%;
  margin: auto;
}
.categoryNameDiv {
  font-weight: bold;
  font-size: 1.25em;
  color: #0096e7;
  background-color: rgb(240, 240, 240);
  height: 2vh;
  margin: 10px;
  padding: 10px;
  line-height: 2vh;
}
.listItem {
  margin: 5px;
  padding: 5px;
}
.contentText {
  margin: 5px;
  padding: 5px;
  width: 50%;
  margin: auto;
}
.TrendsText {
  border: 3px solid #0096e7;
  padding: 10px;
}
.ButtonArea {
  margin: 0px 50px;
  padding: 30px 0px;
  display: flex;
  justify-content: right;
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
.contentsBox {
  margin: 0px 50px;
  padding: 30px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
.procedureBox {
  margin: 0px 50px;
  font-size: 1em;
  display: flex;
  justify-content: center;
}
#Confirmation {
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
