
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Navbar from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/Navbar";
import Login from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/Login";
import Dashboard from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/Dashboard";
import EmployeeList from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/EmployeeList";
import EmployeeDetails from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/EmployeeDetails";
import EmployeeForm from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/EmployeeForm";
import NotFound from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/NotFound";
import ProtectedRoute from "./Component/Task6_12-10-2026/Mini_Assignment_12-10-2026/ProtectedRoute";

export default function App1() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes with Shared Layout */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          {/* Redirect Home to Dashboard */}
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/employees" element={<EmployeeList />} />

          <Route
            path="/employees/:id"
            element={<EmployeeDetails />}
          />

          <Route path="/add" element={<EmployeeForm />} />

          <Route
            path="/edit/:id"
            element={<EmployeeForm edit />}
          />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Shared layout for protected pages
function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
    </div>
  );
}