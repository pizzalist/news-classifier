<template>
  <div>
    <div class="dropdownBox">
      <div class="text1Div">
        <span class="text1">담은 뉴스 목록</span>
      </div>

      <div>
        <div v-if="cartItems.length === 0">
          <div class="dropdownTitle">empty</div>
          <div class="emptyButtonArea">
            <router-link to="/NewsPage">
              <BlueButton ButtonText="뉴스 담기" />
            </router-link>
          </div>
        </div>

        <div v-else>
          <div
            class="dropdown"
            v-for="(categoryItems, categoryName) in categorizedItems"
            :key="categoryName"
          >
            <div class="toggle" @click="toggleDropdown(categoryName)">
              {{ isOpen[categoryName] ? "△" : "▽" }}
              {{ categoryName }}
            </div>

            <div class="list" v-if="isOpen[categoryName]">
              <div
                class="list-item"
                v-for="(item, index) in categoryItems"
                :key="index"
              >
                <div class="item-title">{{ item.title }}</div>
                <p>-</p>
                <div class="item-url">{{ item.url }}</div>
                <button
                  class="deletebtn"
                  :id="'item' + index + itemIndex"
                  @click="newsDel(item, index)"
                >
                  x
                </button>
              </div>
            </div>
          </div>
          <div class="ButtonArea">
            <router-link to="/ResultPage">
              <BlueButton
                ButtonText="동향 보기"
                @click="showCategorizedItems"
              />
            </router-link>
            <!-- @click="
            () => {
              for (let i in this.categorizedItems) {
                console.log(i, this.categorizedItems[i]);
              }
            }
          " -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "../components/BlueButton.vue";
import axios from "axios";

export default {
  name: "BasketPage",

  components: { BlueButton },

  data() {
    return {
      isOpen: {},
      cartItems: [],
    };
  },

  created() {
    this.cartItems = this.$store.state.cartItems.map((item) => ({
      ...item,
      checked: false,
    }));

    this.cartItems.forEach((item) => {
      const categoryName = this.getCategoryName(item.category_id);
      this.isOpen[categoryName] = true;
    });
  },
  
  computed: {
    categorizedItems() {
      const categories = {};
      this.cartItems.forEach((item) => {
        const categoryName = this.getCategoryName(item.category_id);
        if (!categories[categoryName]) {
          categories[categoryName] = [];
        }
        categories[categoryName].push(item);
      });
      return categories;
    },
  },

  methods: {
    getCategoryName(category) {
      const categoryMap = {
        1: "산업정책",
        2: "건설정책",
        3: "조선정책",
        4: "IT 정책",
      };
      return categoryMap[category] || "다른 카테고리";
    },

    toggleDropdown(categoryName) {
      this.isOpen[categoryName] = !this.isOpen[categoryName];
    },
    newsDel(index) {
      this.$store.commit("deleteNewsItem", index);
      location.reload();
    },

    async showCategorizedItems() {
      // 이제 'item'을 매개변수로 받고 있습니다. 필요하다면 사용하세요

      const cliped_news = [];

      // 각 아이템의 title과 categoryName을 추출하여 cliped_news 배열에 추가
      for (const [categoryName, categoryItems] of Object.entries(
        this.categorizedItems
      )) {
        for (const item of categoryItems) {
          cliped_news.push({
            categoryName,
            title: item.title,
          });
        }
      }

      // JSON.stringify()를 사용하여 객체를 JSON 문자열로 변환
      const jsonData = { cliped_news };

      // Axios를 사용하여 API에 POST 요청 보내기
      axios
        .post("http://localhost:1004/api/contents", jsonData)

        .then((response) => {
          // API 요청 성공 시의 로직 추가
          console.log("API 요청 성공:", response.data);
          this.$store.dispatch('updateBackendData', response.data);

        })
        .catch((error) => {
          // API 요청 실패 시의 로직 추가
          console.error("API 요청 실패:", error);
        });
    },
  },
};
</script>

<style scoped>
.text1Div {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
}
.text1 {
  color: #000;
  text-align: center;
  font-size: 1.25em;
  font-weight: 700;
}
.emptyButtonArea {
  margin: 30px 50px;
  font-size: 0.75em;
  display: flex;
  justify-content: center;
  white-space: nowrap;
}
.ButtonArea {
  margin: 30px 50px;
  display: flex;
  font-size: 0.75em;
  justify-content: right;
  white-space: nowrap;
}

.deletebtn {
  cursor: pointer;
  font-size: 1.2em;
  border: none;
  color: #0096e7;
  background-color: #fff;
  width: 50px;
  height: 50px;
  margin-left: auto;
  text-align: center;
}

input[type="checkbox"] {
  min-width: 1.25rem;
  min-height: 1.25rem;
}
input[type="checkbox"]:checked {
  width: 1.25rem;
  height: 1.25rem;
}
.dropdownTitle {
  padding: 2em;
  text-align: center;
}
.dropdownBox {
  font-size: 1.5em;
  margin: 50px 30px;
}
.dropdown {
  padding: 10px 0px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
}

.toggle {
  font-style: bold;
  padding: 10px;
  color: #0096e7;
  border-bottom: 1px solid #0096e7;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #aaa;
  border-top: 0;
  max-height: 200px;
  overflow-y: auto;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #aaa;
}

input[type="checkbox"] {
  margin: 20px 10px;
}
.item-title {
  font-style: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px;
}

.item-url {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 10px;
}
</style>
