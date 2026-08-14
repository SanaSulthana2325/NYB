import {Outlet,Link} from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="profile">Profile</Link> || 
        <Link to="setting">Settings</Link>
        <Outlet/>
    </div>
  )
}

export default Dashboard