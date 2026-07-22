import { useState } from "react";

function Password() {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>

    </div>

  );

}

export default Password;