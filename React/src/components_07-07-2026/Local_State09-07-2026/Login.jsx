import { useState } from "react";

function Login() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <h2>
        {loggedIn ? "Welcome Sana" : "Please Login"}
      </h2>

      <button
        onDoubleClick={() => setLoggedIn(!loggedIn)}
      >
        Toggle Login
      </button>
    </>
  );
}

export default Login;