import { useState } from "react";

function Using_useState() {

  const [show, setShow] = useState(false);

  return (
    <div>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <h1>Welcome to React!</h1>}

    </div>
  );
}

export default Using_useState;