import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import counterReducer from "../counter_12-08-2026/counterSlice";
import counterReducer1 from '../Redux_19-08-2026/Payload_Count_19-08-2026/CounterSlice'
import userReducer from '../Redux_19-08-2026/Login_19-08-2026/userSlice'
import themeReducer from '../Redux_19-08-2026/Mini_Practice_19-08-2026/themeSlice'

const store = configureStore({
    reducer:{
        cart:cartReducer,
        counter:counterReducer,
        counter1:counterReducer1,
        user:userReducer,
        theme:themeReducer
    }
});

export default store
