import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate ();

    const handleLogin = () =>{
        alert("Login Successful");
        navigate("/dashboard");
    };
  return (
    <div>
        <button onClick={handleLogin}
        className="bg-pink-500">Login</button>



    </div>
  );
}

export default Login