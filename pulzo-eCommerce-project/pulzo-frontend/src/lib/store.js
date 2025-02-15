import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/lib/features/cartSlice";
import favoriteReducer from "@/lib/features/favoriteSlice";
import previewReducer from "@/lib/features/previewSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Api } from "./api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    preview: previewReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

setupListeners(store.dispatch);
