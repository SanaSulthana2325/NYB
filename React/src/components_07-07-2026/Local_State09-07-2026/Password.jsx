import { useState } from "react";

function Password() {

  const [show, setShow] = useState(false);

  return (
    <>
      <input
        type={show ? "text" : "password"}
      />

      <button
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
}

export default Password;