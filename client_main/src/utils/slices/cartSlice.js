import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, product) {
      product = { ...product.payload, quantity: 1 };
      var flag = true;
      for (let i = 0; i < state.length; i++) {
        let cur = state[i];
        if (cur.id === product.id) {
          state[i].quantity += 1;
          flag = false;
          break;
        }
      }
      if (flag) {
        state.push(product);
      }
    },
    remove(state, id) {
      id = id.payload;
      var index = null;
      for (let i = 0; i < state.length; i++) {
        let product = state[i];
        if (product.id === id) {
          product.quantity -= 1;
          if (product.quantity === 0) {
            index = i;
          }
          break;
        }
      }
      if (index || index === 0) {
        state.splice(index, 1);
      }
    },
    del(state, id) {
      id = id.payload;
      var index = null;
      for (let i = 0; i < state.length; i++) {
        let product = state[i];
        if (product.id === id) {
          index = i;
          break;
        }
      }
      if (index || index === 0) {
        state.splice(index, 1);
      }
    },
  },
});

export const { add, remove, del } = cartSlice.actions;
export default cartSlice.reducer;
