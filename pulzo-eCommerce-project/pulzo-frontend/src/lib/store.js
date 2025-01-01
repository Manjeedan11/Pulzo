import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/lib/features/cartSlice";
import favoriteReducer from "@/lib/features/favoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});
