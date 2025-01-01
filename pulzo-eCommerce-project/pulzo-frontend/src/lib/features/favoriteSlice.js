import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const existingIndex = state.value.findIndex(
        (item) => item._id === product._id
      );
      if (existingIndex >= 0) {
        state.value.splice(existingIndex, 1);
      } else {
        state.value.push(product);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
