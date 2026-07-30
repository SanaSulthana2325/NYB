import { useState } from "react";
import Tooltip from "./Tooltip";

function Tooltip_App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 100 }}>
      <button
        onMouseEnter={() => setShow(true)}
        className="bg-blue-500"
        onMouseLeave={() => setShow(false)}
        className="bg-red-500"
      >
        Hover Me
      </button>

      {show && (
        <Tooltip text="I am a tooltip" />
      )}
    </div>
  );
}

export default Tooltip_App;