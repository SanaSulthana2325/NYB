import { createPortal } from "react-dom";

function Dropdown() {
  return (
    <>
      <button className="bg-pink-500">Menu</button>

      {createPortal(
        <ul style={menuStyle}>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>,
        document.getElementById("portal-root")
      )}
    </>
  );
}

const menuStyle = {
  position: "middle",
  top: 100,
  left: 100,
  background: "pink",
  border: "6px solid gray",
  padding: 10,
};

export default Dropdown;