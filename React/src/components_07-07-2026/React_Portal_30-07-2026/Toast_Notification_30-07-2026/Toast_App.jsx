import { useState } from "react";
import Toast from "./Toast";

function Toast_App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}
        className="bg-yellow-500">
        Save
      </button>

      {show && (
        <Toast message="Saved Successfully!" />
      )}
    </div>
  );
}

export default Toast_App;