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
  deleteNewsItem(state, itemId) {
    console.log("Deleting from cart:", itemId);
    const index = state.cartItems.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      state.cartItems.splice(index, 1);
    }
    console.log("After deletion:", state.cartItems);
  },
});
