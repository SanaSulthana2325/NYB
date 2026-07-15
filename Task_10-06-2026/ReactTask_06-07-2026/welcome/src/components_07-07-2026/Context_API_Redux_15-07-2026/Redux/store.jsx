import {configureStore} from "@reduxjs/toolkit";

import cartReducer from "./CartSlice";
import wishlistReducer from "./WishlistSlice";
import searchReducer from "./SearchSlice";


export const store=configureStore({

reducer:{

cart:cartReducer,

wishlist:wishlistReducer,

search:searchReducer

}

});