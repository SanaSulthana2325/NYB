import React, { useState } from "react";

function Login_Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 border-green-500"
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-yellow-700 bg-pink-400"
      />

      <br />
      <br />

      <button type="submit"
      className="bg-red-500 px-2 py-2">Login</button>
    </form>
  );
}

export default Login_Form;