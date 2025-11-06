import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0, // for header bubble
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((i) => i.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      cartSlice.caseReducers.updateTotals(state);
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      cartSlice.caseReducers.updateTotals(state);
    },

    updateQuantity(state, action) {
      const { id, change } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + change);
      }
      cartSlice.caseReducers.updateTotals(state);
    },

    updateTotals(state) {
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.totalCount = state.items.length;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
