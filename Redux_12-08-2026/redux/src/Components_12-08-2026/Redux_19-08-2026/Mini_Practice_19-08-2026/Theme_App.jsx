import React from "react";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  toggleTheme,
  resetTheme,
} from "../Mini_Practice_19-08-2026/themeSlice";

function Theme_App() {
  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  const dispatch = useDispatch();

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen p-10"
          : "bg-white text-black min-h-screen p-10"
      }
    >

      <h1 className="text-3xl font-bold mb-5">
         Theme Switcher
      </h1>

      <h2 className="text-2xl mb-5">
        Current Theme:{" "}
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h2>

      <button
        onClick={() => dispatch(toggleTheme())}
        className="bg-blue-500 text-white px-5 py-2 rounded mr-3"
      >
        {darkMode
          ? "Switch to Light"
          : "Switch to Dark"}
      </button>

      <button
        onClick={() => dispatch(resetTheme())}
        className="bg-red-500 text-white px-5 py-2 rounded"
      >
        Reset Theme
      </button>

    </div>
  );
}

export default Theme_App;