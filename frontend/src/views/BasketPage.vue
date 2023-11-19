<template>
  <div>
    <div class="dropdownBox">
      <div>
        <div v-if="cartItems.length === 0">
          <div class="dropdownTitle">뉴스를 담아주세요</div>
        </div>

        <div v-else>
          <div
            class="dropdown"
            v-for="(categoryItems, categoryName) in categorizedItems"
            :key="categoryName">
            <div class="toggle" @click="toggleDropdown(categoryName)">
              {{ isOpen[categoryName] ? "△" : "▽" }}
              {{ categoryName }}
            </div>

            <div class="list" v-if="isOpen[categoryName]">
              <div
                class="list-item"
                v-for="(item, index) in categoryItems"
                :key="index">
                <div class="item-title">제목: {{ item.title }}</div>
                <div class="item-link">링크: {{ item.link }}</div>
                <button
                  class="deletebtn"
                  :id="'item' + index + itemIndex"
                  @click="newsDel(item, index)">
                  x
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ButtonArea">
      <router-link to="/ResultPage">
        <BlueButton ButtonText="동향 보기" @click="showCategorizedItems" />
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
</template>

<script>
import BlueButton from "../components/BlueButton.vue";

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
    this.$store.state.cartItems.forEach((item) => {
      this.cartItems.push({ ...item, checked: false });
      this.isOpen[item.category] = true;
    });
  },

  computed: {
    categorizedItems() {
      const categories = {};
      this.cartItems.forEach((item) => {
        const categoryName = this.getCategoryName(item.category);
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
    newsDel() {
      const selectedItems = this.cartItems.filter((item) => item.isSelected);

      console.log("NewsItem:", this.$store.state.cartItems);

      // Assuming each item has an 'id' property, change it to the correct property name
      const itemIdsToDelete = selectedItems.map((item) => item.id);

      // Correct mutation name is 'deleteNewsItem'
      this.$store.commit("deleteNewsItem", itemIdsToDelete);

      console.log("After deletion:", this.$store.state.cartItems);
    },

    showCategorizedItems() {
      // Iterate through categorizedItems and log the data
      for (let category in this.categorizedItems) {
        console.log(category, this.categorizedItems[category]);
      }
      // Add logic to update the result page data
      // For example, you can make an API call here and update backendData
      this.$data.backendData =
        "Updated backend data after processing categorized items.";
    },
  },
};
</script>

<style scoped>
.ButtonArea {
  margin: 30px 50px;
  display: flex;
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

.item-link {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 10px;
}
</style>
