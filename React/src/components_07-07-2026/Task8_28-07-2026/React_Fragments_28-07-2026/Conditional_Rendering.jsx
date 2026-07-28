function Conditional_Rendering() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Welcome</h1>
          <button>Logout</button>
        </>
      ) : (
        <>
          <h1>Please Login</h1>
          <button>Login</button>
        </>
      )}
    </>
  );
}

export default Conditional_Rendering