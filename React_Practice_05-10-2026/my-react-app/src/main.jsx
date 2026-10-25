
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App3 from "./App3";
import "./index.css"
import { EmployeeProvider } from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/EmployeeContext";
import{ UserProvider } from "./Component/Task12_21-10-2026/Mini_Assignement_21-10-2026/context/UserContext"
import { vi } from 'vitest';
import Assigned_App from "./Assigned_App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmployeeProvider>
      <UserProvider>
      <Assigned_App />
      </UserProvider>
    </EmployeeProvider>
  </StrictMode>
);
