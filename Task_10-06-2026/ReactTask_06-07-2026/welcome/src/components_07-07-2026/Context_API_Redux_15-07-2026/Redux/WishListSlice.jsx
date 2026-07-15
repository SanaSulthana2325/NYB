import { createSlice } from "@reduxjs/toolkit";


const WishlistSlice = createSlice({

    name:"wishlist",

    initialState:[],

    reducers:{

        addToWishlist:(state,action)=>{

            state.push(action.payload);

        }

    }

});


export const { addToWishlist } = WishlistSlice.actions;


export default WishlistSlice.reducer;