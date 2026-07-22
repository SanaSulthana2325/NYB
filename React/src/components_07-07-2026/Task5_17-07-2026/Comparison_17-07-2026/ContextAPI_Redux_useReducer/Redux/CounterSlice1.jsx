import { createSlice } from "@reduxjs/toolkit";

const counterSlice1 = createSlice({

 name:"counter",

 initialState:{
   value:0
 },

 reducers:{

   increment:(state)=>{
      state.value++;
   },

   decrement:(state)=>{
      state.value--;
   }

 }

});

export const {increment,decrement} = counterSlice1.actions;

export default counterSlice1.reducer;