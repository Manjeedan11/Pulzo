import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const foundItem = state.value.find(
        (item) => item.product._id === product._id
      );
      if (foundItem) {
        foundItem.quantity += 1;
        return;
      }
      state.value.push({ product: action.payload, quantity: 1 });
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.value = state.value.filter(
        (item) => item.product._id !== productId
      );
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const foundItem = state.value.find(
        (item) => item.product._id === productId
      );
      if (foundItem) {
        if (foundItem.quantity > 1) {
          foundItem.quantity -= 1;
        } else {
          state.value = state.value.filter(
            (item) => item.product._id !== productId
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
