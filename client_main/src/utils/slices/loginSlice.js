import { createSlice } from "@reduxjs/toolkit";

const loginState = createSlice({
  name: "Login",
  initialState: {
    loggedIn: false,
    username: null,
    email: null,
    jwt: null,
  },
  reducers: {
    login(state, payload) {
      state.loggedIn = true;
      state.username = payload.payload.username;
      state.email = payload.payload.email;
      state.jwt = payload.payload.jwt;
    },
    logout(state) {
      state.loggedIn = false;
      state.username = null;
      state.email = null;
      state.jwt = null;
    },
  },
});

export const { login, logout } = loginState.actions;
export default loginState.reducer;
