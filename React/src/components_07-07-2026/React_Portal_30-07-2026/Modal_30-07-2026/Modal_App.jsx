import { useState } from "react";
import Modal from "./Modal";

function Modal_App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Portal Demo</h1>

      <button onClick={() => setOpen(true)}
        className="bg-purple-700">
        Open Modal
      </button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}

export default Modal_App;