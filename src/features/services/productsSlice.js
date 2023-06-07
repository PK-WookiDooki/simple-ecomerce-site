import { createSlice } from "@reduxjs/toolkit";
import { showAlert, successAlert } from "../functions/alert";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    keyword: "",
    cartItems: [],
    cartQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload;
    },

    setKeyword: (state, { payload }) => {
      state.keyword = payload;
    },

    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find(
        (item) => item.id === Number(payload.id)
      );
      if (isExisted) {
        return showAlert(
          "Oops!",
          "This item is already added to cart!",
          "error"
        );
      }
      state.cartItems.push({ ...payload, quantity: 1 });
      state.cartQuantity += 1;
      state.totalAmount = state.cartItems.reduce(
        (pv, cv) => pv + cv.price * cv.quantity,
        0
      );
      successAlert();
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== Number(payload.id)
      );
      state.cartQuantity -= payload.quantity;
      state.totalAmount -= payload.quantity * payload.price;
    },

    clearCart: (state, { payload }) => {
      state.cartItems = [];
      state.cartQuantity = 0;
      state.totalAmount = 0;
    },

    increaseItem: (state, { payload }) => {
      state.cartQuantity += 1;
      const currentItem = state.cartItems.find(
        (item) => item.id === Number(payload.id)
      );
      currentItem.quantity += 1;
      state.totalAmount += currentItem.price;
    },

    decreaseItem: (state, { payload }) => {
      state.cartQuantity -= 1;
      const currentItem = state.cartItems.find(
        (item) => item.id === Number(payload.id)
      );
      currentItem.quantity -= 1;
      state.totalAmount -= currentItem.price;
    },
  },
});

export const {
  addProducts,
  addToCart,
  removeFromCart,
  clearCart,
  setKeyword,
  increaseItem,
  decreaseItem,
} = productsSlice.actions;
export default productsSlice.reducer;
