import {useNavigate} from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

  return (
    <div>
        <h2>Logout</h2>
        <p> page is logged out</p>
        </div>
  )
}

export default Logout