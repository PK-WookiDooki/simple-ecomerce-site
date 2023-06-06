import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./services/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
