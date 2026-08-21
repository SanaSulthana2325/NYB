import { Link, Outlet } from "react-router-dom";

function Dashboard() {

  return (
    <div className="card">

      <h1>Dashboard</h1>

      <p>Welcome to your dashboard.</p>

      <Link to="/dashboard/profile">
        Go to Profile
      </Link>

      <hr />

      <Outlet />

    </div>
  );
}

export default Dashboard;