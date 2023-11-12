<template>
  <div>
    <div class="ButtonArea">
      <div>
        <button @click="selectAll">전체 선택</button>
        <button @click="selectDel">선택 삭제</button>
      </div>
      <router-link to="/ResultPage">
        <BlueButton ButtonText="확인" @click="checknews"
      /></router-link>
    </div>

    <div class="dropdownBox">
      <div
        v-for="(dropdown, index) in items"
        :key="index"
        :id="'dropdown-' + index"
        class="dropdown">
        <div class="toggle" @click="toggleDropdown(index)">
          {{
            isOpen[index] ? "△ " + dropdown.category : "▽ " + dropdown.category
          }}
        </div>
        <div class="list" v-if="isOpen[index]">
          <div
            class="list-item"
            v-for="(item, itemIndex) in dropdown.news"
            :key="itemIndex">
            <input type="checkbox" :id="'item' + index + itemIndex" />
            <label :for="'item' + index + itemIndex">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-link">{{ item.link }}</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "../components/BlueButton.vue";

export default {
  components: { BlueButton },

  data() {
    return {
      isOpen: [true, true, true, true],

      items: [
        {
          category: "산업정책",
          news: [
            {
              title:
                "산업재해 자기규율 예방체계 구축…고용부 법령정비추진반 가동",
              link: "link",
            },
            {
              title:
                "교통안전공단, ICT 기반 자동차검사소 스마트 안전관리 시스템 개발 추진",
              link: "link",
            },
          ],
        },
        {
          category: "건설정책",
          news: [
            {
              title: "건설폐기물 관리 깐깐해진다",
              link: "link",
            },
            {
              title:
                "DL건설, 미세먼지 흡착·저감 필터 사용...시범 운영 후 타 현장 적용",
              link: "link",
            },
          ],
        },
        {
          category: "조선정책",
          news: [
            {
              title:
                "한국조선해양, '사업 연속성 관리체계' 인증 획득…ESG경영 강화",
              link: "link",
            },
            {
              title:
                "한국조선해양, '사업 연속성 관리체계' 인증 획득…ESG경영 강화",
              link: "link",
            },
            {
              title:
                "한국조선해양, '사업 연속성 관리체계' 인증 획득…ESG경영 강화",
              link: "link",
            },
          ],
        },
        {
          category: "IT",
          news: [
            {
              title: "구글 클라우드, MWC서 통신 부문 신제품 발표",
              link: "link",
            },
            {
              title: "로봇 시장 커지는데…일할 사람이 없다",
              link: "link",
            },
            {
              title: "구글 클라우드, MWC서 통신 부문 신제품 발표",
              link: "link",
            },
            {
              title: "로봇 시장 커지는데…일할 사람이 없다",
              link: "link",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    // 로컬 스토리지에서 장바구니 아이템 불러오기
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  },
  methods: {
    toggleDropdown(index) {
      this.isOpen[index] = !this.isOpen[index];
    },
    selectAll() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const allSelected = [...checkboxes].every((checkbox) => checkbox.checked);

      checkboxes.forEach((checkbox) => {
        checkbox.checked = !allSelected;
      });
    },
    selectDel() {
      const updatedItems = JSON.parse(JSON.stringify(this.items)); // Create a deep copy

      updatedItems.forEach((category, categoryIndex) => {
        category.news = category.news.filter((item, itemIndex) => {
          const checkbox = document.getElementById(
            `item${categoryIndex}${itemIndex}`
          );
          return !checkbox || !checkbox.checked;
        });
      });

      this.items = updatedItems;
    },

    checknews() {
      const checkedItems = [];
      const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      checkboxes.forEach((checkbox) => {
        const id = checkbox.id;
        const categoryIndex = parseInt(id.charAt(4));
        const itemIndex = parseInt(id.substr(5));
        checkedItems.push(this.items[categoryIndex].news[itemIndex]);
      });

      console.log("Checked Items:", checkedItems);
    },
  },
};
</script>

<style scoped>
.ButtonArea {
  margin: 0px 50px;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
}

button {
  cursor: pointer;
  font-size: 1.2em;
  border: 3px solid #0096e7;
  border-radius: 50px;
  color: #0096e7;
  background-color: white;
  width: 150px;
  height: 50px;
  margin-right: 50px;
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
