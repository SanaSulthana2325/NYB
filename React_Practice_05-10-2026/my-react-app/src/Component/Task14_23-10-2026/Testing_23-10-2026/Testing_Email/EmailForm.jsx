// Testing Validation
// Meaning: Validation testing checks whether the application accepts valid input and displays appropriate messages for invalid input.


import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Continue</button>

      {error && <p role="alert">{error}</p>}
    </form>
  );
}

export default EmailForm;