import { createStore } from "vuex";

export default createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state, items) {
      console.log("Adding to cart:", items);

      state.cartItems = state.cartItems.concat(items);
    },
  },
});
