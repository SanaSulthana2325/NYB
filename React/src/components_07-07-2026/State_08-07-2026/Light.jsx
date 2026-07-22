import { useState } from "react";

function Light() {

  const [status, setStatus] = useState("OFF");

  return (
    <>
      <h2>Light is {status}</h2>

      <button
        onClick={() =>
          setStatus(status === "OFF" ? "ON" : "OFF")
        }>
        Toggle
      </button>
    </>
  )
}

export default Light;


// | Props                           | State                                  |
// | ------------------------------- | -------------------------------------- |
// | Passed from parent to child     | Managed within the component           |
// | Read-only                       | Can be updated                         |
// | Used to pass data               | Used to store changing data            |
// | Cannot be modified by the child | Updated using `setState` or `useState` |
// | Makes components reusable       | Makes components interactive           |
// | Parent controls the value       | Component controls the value           |
