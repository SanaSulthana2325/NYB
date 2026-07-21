import { useState } from "react";
import Sidebar from "./Sidebar";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import EmployeeDashboard from "./EmployeeDashboard";
import ManagerDashboard from "./ManagerDashboard";

function DashboardLayout({ logout }) {

  const dashboards = [
    <AdminDashboard />,
    <UserDashboard />,
    <EmployeeDashboard />,
    <ManagerDashboard />
  ];

  const names = [
    "Admin",
    "User",
    "Employee",
    "Manager"
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % dashboards.length);
  };

  const previous = () => {
    setIndex((index - 1 + dashboards.length) % dashboards.length);
  };

  return (
    <div className="flex h-screen">

      <div className="flex-1 bg-gray-100">

        <div className="bg-white shadow flex justify-between items-center px-6 py-4">

          <button
            onClick={previous}
            className="text-4xl"
          >
            ⬅
          </button>

          <h1 className="text-3xl font-bold">
            {names[index]}
          </h1>

          <button
            onClick={next}
            className="text-4xl"
          >
            ➡
          </button>

        </div>

        <div className="p-8">
          {dashboards[index]}
        </div>

      </div>

      <Sidebar logout={logout} />

    </div>
  );
}

export default DashboardLayout;