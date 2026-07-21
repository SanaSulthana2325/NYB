import { useState } from "react";

import AdminDashboard from './../../components_07-07-2026/MiniPractice1_CR_20-07-2026/AdminDashboard';
import ManagerDashboard from './../../components_07-07-2026/MiniPractice1_CR_20-07-2026/ManagerDashboard';
import EmployeeDashboard from './../../components_07-07-2026/MiniPractice1_CR_20-07-2026/EmployeeDashboard';


function MiniPractice1_page() {

  // Login Status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Current User Role
  const [role,setRole] = useState("admin");

  return (

    <div style={{ padding: "20px" }}>

      <h1>Company Portal</h1>

      {
        isLoggedIn ? (

          <>
            <button onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>

            <hr />

            {
              role === "admin"

                ? <AdminDashboard/>

                : role === "manager"

                ? <ManagerDashboard/>

                : <EmployeeDashboard/>
            }

          </>

        ) : (

          <>
            <h2>Please Login</h2>

            <button onClick={() => setIsLoggedIn(true)}>
              Login
            </button>

          </>

        )
      }
      

    </div>
  );
}

export default MiniPractice1_page;