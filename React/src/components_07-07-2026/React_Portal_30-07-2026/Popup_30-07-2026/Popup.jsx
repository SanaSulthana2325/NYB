import {createPortal} from 'react-dom'

function Popup({onClose}) {
  return createPortal(
    <div style={overlay}>
    <div style={box}>

        <h2> login successful</h2>
        <button onClick={onClose}
        className="bg-orange-500 text-white px-4 py-2 rounded">Close</button>
    </div>

    </div>,
    document.getElementById("portal-root")
  );
}

const overlay = {
    position:"fixed",
    top:0,
    left:0,
    width:"100vw",
    height:"100vh",
    background:"rgba(1,1,1,1.5)",
    display:"flex",
    justifyContent:"center",
};

const box = {
    background:"yellow",
    padding:20,
};

export default Popup;