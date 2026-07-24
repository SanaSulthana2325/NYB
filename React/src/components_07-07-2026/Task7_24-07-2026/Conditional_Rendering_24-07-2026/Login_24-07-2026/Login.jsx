function Login() {
  const isLoggedIn = true;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {isLoggedIn ? (
        <div className="bg-green-500 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">
            Welcome Sana!
          </h1>
        </div>
      ) : (
        <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">
            Please Login
          </h1>
        </div>
      )}
    </div>
  );
}

export default Login;