import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute1({ isLoggedIn }) {
  return isLoggedIn
    ? <Outlet />
    : <Navigate to="/login" />;
}