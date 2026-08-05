import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login Successful");
    navigate("/hom");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: "#ec4899",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;