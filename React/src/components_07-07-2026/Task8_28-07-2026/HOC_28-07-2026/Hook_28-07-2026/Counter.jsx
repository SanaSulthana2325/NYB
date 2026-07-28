import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}
        className="bg-green-500">
        Increment
      </button>
    </>
  );
}

export default Counter