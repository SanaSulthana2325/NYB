import { useState } from "react";

function Color() {

  const [color, setColor] = useState("red");

  return (
    <>
      <div
        style={{
          width: "500px",
          height: "200px",
          backgroundColor: color
        }}
      ></div>

      <button onClick={() => setColor("pink")}>
        pink
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
}

export default Color;