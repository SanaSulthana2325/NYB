import {createPortal} from 'react-dom'

function Tooltip({text}) {
  return createPortal (
    <div style={tooltipStyle}>
        {text}
    </div>,
    document.getElementById("portal-root")
  );
}


const tooltipStyle = {
    position:"fixed",
    top:0,
    left:0,
    background:"black",
    color:"white",
    padding:"50px-100px",
    borderRadius:"8px",
};

export default Tooltip