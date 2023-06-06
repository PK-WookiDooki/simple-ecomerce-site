import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    keyword: "",
    cartItems: [],
    cartQuantity: 0,
  },
  reducers: {
    addProducts: (state, { payload }) => {
      state.payload = payload;
    },

    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find(
        (item) => item.id === Number(payload.id)
      );
      if (isExisted) {
        return alert("Item already added!");
      }
      state.cartItems.push(payload);
      state.cartQuantity += 1;
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== Number(payload.id)
      );
      state.cartQuantity -= 1;
    },

    clearCart: (state, { payload }) => {
      state.cartItems = [];
      state.cartQuantity = 0;
    },
  },
});

export const { addProducts, addToCart, removeFromCart, clearCart } =
  productsSlice.actions;
export default productsSlice.reducer;
