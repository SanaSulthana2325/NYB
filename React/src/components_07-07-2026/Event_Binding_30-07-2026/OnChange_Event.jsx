import { useState } from "react"

function OnChange_Event() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className=" border border-black-900"
      />

      <h2>{name}</h2>
    </div>
  );
}

export default OnChange_Event;