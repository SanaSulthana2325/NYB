import React, { useState } from "react";

function Disable_Button() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border border-pink-500"
      />

      <button
        disabled={name === ""}
        className="bg-orange-500"
      >
        Submit
      </button>
    </>
  );
}

export default Disable_Button;