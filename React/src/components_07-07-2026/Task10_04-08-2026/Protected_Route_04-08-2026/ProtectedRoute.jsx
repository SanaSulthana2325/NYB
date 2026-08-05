import {Navigate} from "react-router-dom";

function ProtectedRoute({children}) {
    const isLoggedIn = true;
    if(!isLoggedIn){
  return 
    <div>
        <Navigate to="./../Navigation_04-08-2026/Login.jsx"/>;
    </div>
    }
    return children;
}
  


export default ProtectedRoute