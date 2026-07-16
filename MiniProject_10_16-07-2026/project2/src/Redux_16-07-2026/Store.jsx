import { configureStore } from "@reduxjs/toolkit";
import AttendanceReducer from "./AttendanceSlice";

const Store=configureStore({

reducer:{

attendance:AttendanceReducer

}

});

export default Store;