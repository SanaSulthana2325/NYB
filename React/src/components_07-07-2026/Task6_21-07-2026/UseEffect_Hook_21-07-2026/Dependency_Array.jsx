import { useState, useEffect } from "react";

function Dependency_Array() {

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  useEffect(() => {

    console.log("Count Changed");

  }, [count]);

  return (

    <div>

      <input

        type="text"

        onChange={(e) => setName(e.target.value)}

      />

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </div>

  );

}

export default Dependency_Array;