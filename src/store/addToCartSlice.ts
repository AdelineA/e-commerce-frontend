import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    items: [] as { id: string; quantity: number }[],
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      state.items.push({ id: productId, quantity });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addToCart, removeFromCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
