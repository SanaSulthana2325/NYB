import { useContext } from "react";
import UserContext_AU from "../Authentication_13-07-2026/UserContext_AU";

function Login() {

  const { user1, setUser } = useContext(UserContext_AU);

  const login = () => {

    setUser({

      name: "Sana",
      email: "sana@gmail.com"

    });

  };

  const logout = () => {

    setUser(null);

  };

  return (

    <>
      {!user1 ? (

        <button onClick={login}>Login</button>

      ) : (

        <button onClick={logout}>Logout</button>

      )}
    </>

  );

}

export default Login;