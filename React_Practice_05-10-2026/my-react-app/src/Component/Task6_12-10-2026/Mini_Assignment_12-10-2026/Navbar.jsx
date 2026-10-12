
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedIn");
    navigate("/login", { replace: true });
  }

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-indigo-700 p-4 text-white">
      <h1 className="text-xl font-bold text-white">Employee Portal</h1>

      <div className="flex flex-wrap items-center gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/add">Add Employee</Link>

        <button
          onClick={handleLogout}
          className="rounded bg-white px-3 py-1 text-indigo-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
