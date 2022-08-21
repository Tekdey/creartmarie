import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../context/index";

const initialState = {
  cartItems: [],
  amout: 0,
  total: 0,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const addProduct = data.find((item) => item.id === payload);
      state.cartItems.push(addProduct);
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
