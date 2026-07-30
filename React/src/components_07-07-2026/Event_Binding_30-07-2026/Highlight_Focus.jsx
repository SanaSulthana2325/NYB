import { useState } from "react";


function Highlight_Focus() {
  const [focused, setFocused] = useState(false);

  return (
    <input
      type="text"
      placeholder="Enter text"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        padding: "10px",
        border: focused
          ? "2px solid blue"
          : "2px solid gray",
      }}
    />
  );
}

export default Highlight_Focus;