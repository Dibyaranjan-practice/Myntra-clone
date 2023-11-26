import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cartSlice";
import watch from "./slices/watchSlice";
import login from "./slices/loginSlice";

const store = configureStore({ reducer: { cart, watch, login } });

export default store;
