import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );
      if (existingItem) existingItem.quantity += 1;
      else state.items.push({ ...newItem, quantity: newItem.quantity || 1 });
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter(
        (item) => item.name !== itemToRemove.name
      );
    },
    decrementQuantity: (state, action) => {
      const { name } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item)
        if (item.quantity > 1) item.quantity -= 1;
        else state.items = state.items.filter((item) => item.name !== name);
    },
  },
});

export const { addItem, removeItem, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
