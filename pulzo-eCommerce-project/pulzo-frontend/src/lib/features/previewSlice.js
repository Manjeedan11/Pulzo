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
  },
});

export const { setPreview, clearPreview } = previewSlice.actions;
export default previewSlice.reducer;
