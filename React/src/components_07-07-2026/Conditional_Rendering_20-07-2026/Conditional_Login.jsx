function Conditional_Login() {

  const isLoggedIn = true;

  return (
    <div>

      {
        isLoggedIn
        ? <button>Logout</button>
        : <button>Login</button>
      }

    </div>
  );

}

export default Conditional_Login;