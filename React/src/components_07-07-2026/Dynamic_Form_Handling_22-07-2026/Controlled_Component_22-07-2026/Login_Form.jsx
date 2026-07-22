import { useState } from "react";

function Login_Form() {

  const [login, setLogin] = useState({
    username:"",
    password:""
  });

  const handleChange=(e)=>{

    setLogin({
      ...login,
      [e.target.name]:e.target.value
    });

  };

  const handleSubmit=(e)=>{

    e.preventDefault();

    alert(
      `Username : ${login.username}
Password : ${login.password}`
    );

  };

  return(

    <form onSubmit={handleSubmit}>

      <input
        name="username"
        placeholder="Username"
        value={login.username}
        onChange={handleChange}
        className="border border-black p-2 rounded w-64"

      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={login.password}
        onChange={handleChange}
        className="border border-black p-2 rounded w-64"

      />

      <br /><br />

      <button type="submit"
        className="border border-black p-2 rounded w-64 bg-pink-500"
      >
        Login
      </button>

    </form>

  );

}

export default Login_Form;