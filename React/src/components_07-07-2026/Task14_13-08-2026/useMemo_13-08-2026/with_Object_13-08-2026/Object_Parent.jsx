import React, { useState, useMemo } from "react";

import Object_Child from "./Object_Child";

function Object_Parent() {
  const [count, setCount] = useState(0);

  const user = useMemo(() => {
    return {
      name: "Alia",
      age: 22
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}
        className="bg-blue-500">
        Increment
      </button>

      <Object_Child user={user} />
    </div>
  );
}

export default Object_Parent;