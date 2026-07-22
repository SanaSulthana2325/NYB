import { useState, useEffect } from "react";


function No_Dependency_Array() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("Effect Executed");

  });

  return (

    <div>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </div>

  );
}

export default No_Dependency_Array;