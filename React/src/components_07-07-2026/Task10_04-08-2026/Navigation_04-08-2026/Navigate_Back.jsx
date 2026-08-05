import {useNavigate} from "react-router-dom";

function Navigate_Back() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=> navigate(-1)}
            className="bg-green-600"> Go Back</button>
    </div>
  )
}

export default Navigate_Back