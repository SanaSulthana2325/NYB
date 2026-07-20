import { useState } from "react";

function Conditional_State() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (

    <div>

      <button onClick={() => setLoggedIn(!loggedIn)}>
        Toggle
      </button>

      {
        loggedIn
        ? <h2>Welcome User</h2>
        : <h2>Please Login</h2>
      }

    </div>

  );

}

export default Conditional_State;