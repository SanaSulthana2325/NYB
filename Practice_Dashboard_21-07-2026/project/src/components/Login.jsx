function Login({ login }) {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600">

      <div className="bg-white p-10 rounded-xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Dashboard Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="border w-full p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 rounded mb-6"
        />

        <button
          onClick={login}
          className="bg-blue-600 text-white w-full p-3 rounded hover:bg-blue-700"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;