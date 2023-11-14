<template>
  <div>
    <div class="ButtonArea">
      <router-link to="/ResultPage">
        <BlueButton ButtonText="확인" @click="checknews"
      /></router-link>
    </div>

    <div class="dropdownBox">
      <div>
        <div v-if="cartItems === 0">
          <p>empty</p>
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
                  @click="newsDel(categoryName, index)">
                  x
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      this.isOpen[item.category] = true; // Initialize isOpen for each category
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

    newsDel(categoryName, itemIndex) {
      const categoryItems = this.categorizedItems[categoryName];

      if (itemIndex >= 0 && itemIndex < categoryItems.length) {
        const deletedItem = categoryItems[itemIndex];

        const indexInCart = this.cartItems.findIndex(
          (item) => item === deletedItem
        );

        if (indexInCart !== -1) {
          this.cartItems.splice(indexInCart, 1);
        }

        categoryItems.splice(itemIndex, 1);

        if (categoryItems.length === 0) {
          this.isOpen[categoryName] = false;
        }
      }
    },

    checknews() {
      console.log(this.cartItems);
    },
  },
};
</script>

<style scoped>
.ButtonArea {
  margin: 0px 50px;
  padding: 30px 0px;
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
.dropdownBox {
  font-size: 1.5em;
  margin: 0px 30px;
  margin-bottom: 50px;
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
