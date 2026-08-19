import React from "react";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  login,
  logout
} from "../Login_19-08-2026/userSlice";

function Login_App() {

  const user = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();

  return (
    <div>

      {user.isLoggedIn ? (
        <>
          <h1>
            Welcome {user.name}
          </h1>

          <p>
            Email: {user.email}
          </p>

          <button
            onClick={() =>
              dispatch(logout())
            }
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Please Login</h1>

          <button
            onClick={() =>
              dispatch(
                login({
                  name: "Sana",
                  email: "sana@example.com"
                })
              )
            }
          >
            Login
          </button>
        </>
      )}

    </div>
  );
}

export default Login_App;