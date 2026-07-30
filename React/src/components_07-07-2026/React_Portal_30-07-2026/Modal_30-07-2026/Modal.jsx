import { createPortal } from "react-dom";

function Modal({ onClose }) {
  return createPortal(
    <div style={overlay}>
      <div style={box}>
        <h2>Hello</h2>

        <button onClick={onClose}
        className="bg-pink-700">
          Close
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const box = {
  background: "white",
  padding: 20,
};

export default Modal;