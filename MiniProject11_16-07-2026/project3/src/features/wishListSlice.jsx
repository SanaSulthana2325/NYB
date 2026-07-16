import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({

name:"wishlist",

initialState:[],

reducers:{

addItem:(state,action)=>{

state.push(action.payload);

},

removeItem:(state,action)=>{

return state.filter(item=>item!==action.payload);

}

}

});

export const {addItem,removeItem}=wishlistSlice.actions;

export default wishlistSlice.reducer;