import { useNavigate } from "react-router-dom";

export default function Login1({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/dashboard2");
  }

  return (
    <div>
      <h1>Student Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}