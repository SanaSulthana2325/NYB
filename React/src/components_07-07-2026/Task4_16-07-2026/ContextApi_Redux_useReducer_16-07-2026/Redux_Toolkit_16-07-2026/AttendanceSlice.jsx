import { createSlice } from "@reduxjs/toolkit";

const attendanceSlice = createSlice({

  name: "attendance",

  initialState: {
    present: 0
  },

  reducers: {

    markPresent: (state) => {
      state.present++;
    },

    resetAttendance: (state) => {
      state.present = 0;
    }

  }

});

export const {
  markPresent,
  resetAttendance
} = attendanceSlice.actions;

export default attendanceSlice.reducer;