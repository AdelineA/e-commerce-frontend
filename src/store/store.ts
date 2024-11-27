import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import wishlistReducer from "./wishlistSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedWishlsitReducer = persistReducer(persistConfig, wishlistReducer);
const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    wishlist: persistedWishlsitReducer,
  },
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
