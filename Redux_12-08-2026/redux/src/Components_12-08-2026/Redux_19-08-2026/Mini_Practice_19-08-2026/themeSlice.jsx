import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",

  initialState: {
    darkMode: false,
  },

  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },

    resetTheme: (state) => {
      state.darkMode = false;
    },
  },
});

export const {
  toggleTheme,
  resetTheme,
} = themeSlice.actions;

export default themeSlice.reducer;