import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    setPreview: (state, action) => {
      state.value = action.payload;
    },
    clearPreview: (state) => {
      state.value = null;
    },
    updatePreviewProduct: (state, action) => {
      const { productId, quantity } = action.payload;
      if (state.value && state.value._id === productId) {
        state.value.stock -= quantity;
        state.value.sold += quantity;
      }
    },
  },
});

export const { setPreview, clearPreview, updatePreviewProduct } =
  previewSlice.actions;
export default previewSlice.reducer;
