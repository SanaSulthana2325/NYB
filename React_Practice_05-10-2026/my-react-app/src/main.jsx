
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import { EmployeeProvider } from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/EmployeeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </StrictMode>
);
