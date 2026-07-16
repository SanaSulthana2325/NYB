import { configureStore } from "@reduxjs/toolkit";

import wishlistReducer from "../features/wishlistSlice";
import counterReducer from "../features/counterSlice";

const store=configureStore({

reducer:{

wishlist:wishlistReducer,
counter:counterReducer

}

});

export default store;