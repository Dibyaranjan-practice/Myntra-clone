import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cartSlice";
import watch from "./slices/watchSlice";

const store = configureStore({ reducer: { cart, watch } });

export default store;
