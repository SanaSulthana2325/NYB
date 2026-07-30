import {createPortal} from 'react-dom'

function Toast({message}) {
  return createPortal(
    <div style={toastStyle}>

        {message}
    </div>,
    document.getElementById("portal-root")
    
  );
}

const toastStyle = {
    position:"fixed",
    top:20,
    right:20,
    background:"green",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
};
export default Toast;