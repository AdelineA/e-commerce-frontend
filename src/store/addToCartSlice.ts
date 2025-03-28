import { createSlice } from "@reduxjs/toolkit";
import { ProductCard } from "../../types/Product";

const savedCart = localStorage.getItem("cart");
const updateLocalStorage = (items: (ProductCard & { quantity: number })[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};
const initialState = {
  items: savedCart
    ? JSON.parse(savedCart)
    : ([] as (ProductCard & { quantity: number })[]),
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, imageUrl, title, price, quantity } = action.payload;
      const existedItem = state.items.find(
        (item: ProductCard) => item.id === id
      );

      if (existedItem >= 0) {
        existedItem.quantity += quantity;
      } else {
        state.items.push({ id, imageUrl, title, price, quantity });
      }
      updateLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload.id;
      state.items = state.items.filter(
        (item: ProductCard) => item.id !== productId
      );
    },
  },
});
export const { addToCart, removeFromCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
