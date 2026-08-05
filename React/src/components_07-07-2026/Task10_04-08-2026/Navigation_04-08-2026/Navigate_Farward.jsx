import {useNavigate} from "react-router-dom";

function Navigate_Farward() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=> navigate(1)}
            className="bg-yellow-600"> Go Farward</button>
    
    </div>
  )
}

export default Navigate_Farward