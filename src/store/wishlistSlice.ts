import { createSlice } from "@reduxjs/toolkit";
import { ProductCard } from "../../types/Product";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [] as ProductCard[],
  },
  reducers: {
    addToWishlist(state, action) {
      const productExist = state.wishlist.some(
        (product) => product.id === action.payload.id
      );
      if (!productExist) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
