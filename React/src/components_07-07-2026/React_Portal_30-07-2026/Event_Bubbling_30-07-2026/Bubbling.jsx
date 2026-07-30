import { createPortal } from "react-dom";

function Bubbling() {
  return createPortal(
    <button onClick={() => console.log("Button clicked")}
    className="bg-orange-500">
      Click
    </button>,
    document.getElementById("portal-root")
  );
}

export default Bubbling;