import { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";

function Login(){

const {login}=useContext(StudentContext);

return(

<button onClick={login}>
Login
</button>

);

}

export default Login;