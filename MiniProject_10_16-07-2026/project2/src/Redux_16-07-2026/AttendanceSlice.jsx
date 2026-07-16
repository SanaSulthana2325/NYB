import { createSlice } from "@reduxjs/toolkit";

const AttendanceSlice=createSlice({

name:"attendance",

initialState:{

present:0

},

reducers:{

markPresent:(state)=>{

state.present+=1;

},

resetAttendance:(state)=>{

state.present=0;

}

}

});

export const {markPresent,resetAttendance}=AttendanceSlice.actions;

export default AttendanceSlice.reducer;