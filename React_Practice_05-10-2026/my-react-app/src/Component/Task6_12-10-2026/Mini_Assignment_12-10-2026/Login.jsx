
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("loggedIn", "true");
    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-900 p-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow">
        <h1 className="mb-2 text-2xl font-bold text-red-700">
          Employee Portal
        </h1>

        <p className="mb-6 text-gray-600">
          Click below to enter the portal.
        </p>

        <button
          onClick={handleLogin}
          className="w-full rounded bg-indigo-600 p-3 text-white hover:bg-indigo-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
