import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import counterReducer from "../counter_12-08-2026/counterSlice";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        counter:counterReducer
    }
});

export default store
