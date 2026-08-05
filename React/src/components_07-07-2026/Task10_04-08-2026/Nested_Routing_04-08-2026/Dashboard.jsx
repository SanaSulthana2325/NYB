import {Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
    <h1> Dashboard</h1>

    <Link to="profile">Profile</Link> |
    <Link to="settings">Settings</Link> |
    <Link to="dhome">DashboardHome</Link>
    <hr/>

    <Outlet/>
    </>
  )
}

export default Dashboard