import { useState } from "react";


function MiniPractice_Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>

      <h1>Authentication Example</h1>

      {
        isLoggedIn
          ? (
            <>
              <h2>Welcome Sana</h2>

              <button onClick={handleLogout}>
                Logout
              </button>
            </>
          )
          : (
            <>
              <h2>Please Login</h2>

              <button onClick={handleLogin}>
                Login
              </button>
            </>
          )
      }

    </div>
  );

}

export default MiniPractice_Login;