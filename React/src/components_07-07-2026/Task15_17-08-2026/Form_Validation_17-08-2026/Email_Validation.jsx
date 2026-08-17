import React, { useState } from "react";

function Email_Validation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");

    console.log("Valid email");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-green-700"
        />

        <br />
        <br />

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-green-300 px-3 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Email_Validation;