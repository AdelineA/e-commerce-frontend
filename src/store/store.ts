import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export default store;
