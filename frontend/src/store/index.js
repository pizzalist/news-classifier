// store/index.js
import { createStore } from "vuex";

const localStoragePlugin = (store) => {
  // Load state from localStorage when the store is initialized
  if (localStorage.getItem("cartItems")) {
    store.commit("loadFromLocalStorage");
  }

  // Watch for changes in the cartItems and save to localStorage
  store.subscribe((mutation, state) => {
    if (mutation.type === "addToCart" || mutation.type === "deleteNewsItem") {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  });
};

export default createStore({
  namespaced: true,
  state: {
    cartItems: [],
  },
  actions: {
    resetCartItems({ commit }) {
      commit("resetCartItems");
    },
  },

  mutations: {
    addToCart(state, items) {
      console.log("Adding to cart:", items);
      state.cartItems = state.cartItems.concat(items);
    },

    deleteNewsItem(state, index) {
      console.log("Deleting from cart at index:", index);
      console.log("Before deletion:", state.cartItems);

      const itemIndex = state.cartItems.findIndex(
        (item) => item.title === index.title
      );

      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
        console.log("After deletion:", state.cartItems);
      } else {
        console.error("Item not found in cartItems array");
      }
    },

    loadFromLocalStorage(state) {
      const savedCartItems = localStorage.getItem("cartItems");
      if (savedCartItems) {
        state.cartItems = JSON.parse(savedCartItems);
      }
    },
    resetCartItems(state) {
      console.log("Resetting cart items");
      state.cartItems = [];
    },
  },
  plugins: [localStoragePlugin],
});
