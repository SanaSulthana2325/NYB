import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

import { StudentProvider } from "./Context/StudentContext";
import { ThemeProvider } from "./Context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StudentProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StudentProvider>
  </Provider>
);