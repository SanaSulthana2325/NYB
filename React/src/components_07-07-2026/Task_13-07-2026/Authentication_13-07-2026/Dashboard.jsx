import { useContext } from "react";
import UserContext_AU from "../Authentication_13-07-2026/UserContext_AU";

function Dashboard() {

  const { user1 } = useContext(UserContext_AU);

  return (

    <>
      {user1 ? (

        <h3>Dashboard of {user1.name}</h3>

      ) : (

        <h3>No User Logged In</h3>

      )}
    </>

  );

}

export default Dashboard;