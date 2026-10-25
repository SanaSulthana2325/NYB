
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App2 from "./App2";
import "./index.css"
import { EmployeeProvider } from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/EmployeeContext";
import { vi } from 'vitest';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmployeeProvider>
      <App2 />
    </EmployeeProvider>
  </StrictMode>
);
