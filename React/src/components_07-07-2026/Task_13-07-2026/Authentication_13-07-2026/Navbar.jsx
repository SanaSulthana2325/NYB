import { useContext } from "react";
import UserContext_AU from "../Authentication_13-07-2026/UserContext_AU";

function Navbar() {

  const { user1 } = useContext(UserContext_AU);

  return (

    <h2>

      {user1 ? `Welcome ${user1.name}` : "Please Login"}

    </h2>

  );

}

export default Navbar;