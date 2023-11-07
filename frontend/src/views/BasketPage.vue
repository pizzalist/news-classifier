<template>
  <div>
    <BlueButton ButtonText="확인" />

    <div class="dropdownBox">
      <div class="dropdown" id="FirstDropdown">
        <div class="toggle" @click="toggleDropdown(0)">
          {{ isOpen[0] ? "△ 산업정책 동향" : "▽ 산업정책 동향" }}
        </div>
        <div class="list" v-if="isOpen[0]">
          <div class="list-item" v-for="(item, index) in items[0]" :key="index">
            <input type="checkbox" :id="'item0' + index" />
            <label :for="'item0' + index">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-content">{{ item.content }}</div>
            </label>
          </div>
        </div>
      </div>

      <div class="dropdown" id="SecondDropdown">
        <div class="toggle" @click="toggleDropdown(1)">
          {{ isOpen[1] ? "△ 건설정책 동향" : "▽ 건설정책 동향" }}
        </div>
        <div class="list" v-if="isOpen[1]">
          <div class="list-item" v-for="(item, index) in items[1]" :key="index">
            <input type="checkbox" :id="'item1' + index" />
            <label :for="'item1' + index">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-content">{{ item.content }}</div>
            </label>
          </div>
        </div>
      </div>

      <div class="dropdown" id="ThirdDropdown">
        <div class="toggle" @click="toggleDropdown(2)">
          {{ isOpen[2] ? "△ 조선정책 동향" : "▽ 조선정책 동향" }}
        </div>
        <div class="list" v-if="isOpen[2]">
          <div class="list-item" v-for="(item, index) in items[2]" :key="index">
            <input type="checkbox" :id="'item1' + index" />
            <label :for="'item1' + index">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-content">{{ item.content }}</div>
            </label>
          </div>
        </div>
      </div>

      <div class="dropdown" id="FourthDropdown">
        <div class="toggle" @click="toggleDropdown(3)">
          {{ isOpen[3] ? "△ IT 동향" : "▽ IT 동향" }}
        </div>
        <div class="list" v-if="isOpen[3]">
          <div class="list-item" v-for="(item, index) in items[3]" :key="index">
            <input type="checkbox" :id="'item1' + index" />
            <label :for="'item1' + index">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-content">{{ item.content }}</div>
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
      isOpen: [true, false, false, false],
      items: [
        [
          { title: "Item 1", content: "Description for Item 1" },
          { title: "Item 2", content: "Description for Item 2" },
          { title: "Item 3", content: "Description for Item 3" },
        ],
        [
          { title: "Item 1", content: "Description for Item 1" },
          { title: "Item 2", content: "Description for Item 2" },
          { title: "Item 3", content: "Description for Item 3" },
        ],
        [
          { title: "Item 1", content: "Description for Item 1" },
          { title: "Item 2", content: "Description for Item 2" },
          { title: "Item 3", content: "Description for Item 3" },
        ],
        [
          { title: "Item 1", content: "Description for Item 1" },
          { title: "Item 2", content: "Description for Item 2" },
          { title: "Item 3", content: "Description for Item 3" },
        ],
      ],
    };
  },
  methods: {
    toggleDropdown(index) {
      this.isOpen[index] = !this.isOpen[index];
    },
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
input[type="checkbox"]:checked {
  width: 20px;
  height: 20px;
}
.dropdownBox {
  font-size: 1.5vw;
  margin: 0px 50px;
  margin-bottom: 50px;
}
.dropdown {
  padding: 15px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
}

.toggle {
  font-style: bold;
  padding: 10px;
  color: #00a7e1;
  border-bottom: 1px solid #00a7e1;
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
</style>
