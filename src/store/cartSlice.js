import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    likes: [],
  },
  reducers: {
    addToCart(state, action) {
      const itemExists = state.items.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
   
  },
});

export const { addToCart, removeFromCart, addToFavorites, removeFromFavorites } = cartSlice.actions;
export default cartSlice.reducer;
