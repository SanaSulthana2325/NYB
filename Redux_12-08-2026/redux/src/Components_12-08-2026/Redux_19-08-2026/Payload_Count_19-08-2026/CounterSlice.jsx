import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0,
  },

  reducers: {
    increaseBy: (state, action) => {
      state.count += action.payload;
    },

    decreaseBy: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { increaseBy, decreaseBy } = counterSlice.actions;

export default counterSlice.reducer;