import { createSlice } from "@reduxjs/toolkit";

const initialState={

movie:"Pushpa 2",

seatPrice:250,

seats:[]

};

const BookingSlice=createSlice({

name:"booking",

initialState,

reducers:{

}

});

export default BookingSlice.reducer;