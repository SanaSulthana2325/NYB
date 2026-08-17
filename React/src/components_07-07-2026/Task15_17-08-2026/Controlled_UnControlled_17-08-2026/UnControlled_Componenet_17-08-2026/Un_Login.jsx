import React, { useRef } from "react";

function Un_Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        ref={emailRef}
        placeholder="Enter Email"
      className="border border-orange-500"/>

      <br />
      <br />

      <input
        type="password"
        ref={passwordRef}
        placeholder="Enter Password"
      className="border border-pink-500"/>

      <br />
      <br />

      <button type="submit"
      className="bg-yellow-500">
        Login
      </button>
    </form>
  );
}

export default Un_Login;