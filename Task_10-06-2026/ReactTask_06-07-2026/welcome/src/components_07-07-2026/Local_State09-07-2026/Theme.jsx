import { useState } from "react";

function Theme() {

  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        padding: "20px"
      }}
    >
      <h2>
        {dark ? "Dark Theme" : "Light Theme"}
      </h2>

      <button
        onClick={() => setDark(!dark)}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Theme;