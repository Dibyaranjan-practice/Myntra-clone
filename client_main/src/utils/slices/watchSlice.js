import { createSlice } from "@reduxjs/toolkit";

const WatchList = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    add(state, product) {
      product = product.payload;
      let flag = true;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === product.id) {
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
      let index = null;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) {
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

export const { add, remove } = WatchList.actions;
export default WatchList.reducer;
