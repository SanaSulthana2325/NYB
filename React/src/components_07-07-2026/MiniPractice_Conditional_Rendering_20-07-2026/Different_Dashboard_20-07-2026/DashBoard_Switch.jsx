function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>

      <ul>
        <li>Manage Users</li>
        <li>View Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

function ManagerDashboard() {
  return (
    <div>
      <h2>Manager Dashboard</h2>

      <ul>
        <li>Team Members</li>
        <li>Attendance</li>
        <li>Reports</li>
      </ul>
    </div>
  );
}

function EmployeeDashboard() {
  return (
    <div>
      <h2>Employee Dashboard</h2>

      <ul>
        <li>My Profile</li>
        <li>Leave Requests</li>
        <li>Salary</li>
      </ul>
    </div>
  );
}


function DashBoard_Switch() {

  const role = "employee";

  return (

    <div>

      <h1>Company Portal</h1>

      {
        role === "admin"
          ? <AdminDashboard />

          : role === "manager"
          ? <ManagerDashboard />

          : <EmployeeDashboard />
      }

    </div>

  );

}

export default DashBoard_Switch;