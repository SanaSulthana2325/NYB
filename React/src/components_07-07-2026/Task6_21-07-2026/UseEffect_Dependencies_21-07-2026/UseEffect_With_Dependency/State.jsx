import { useState, useEffect } from "react";

function State() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sana");

  useEffect(() => {

    console.log("Count Updated");

  }, [count]);

  return (

    <div>

      <h2>{count}</h2>
      <h2>{name}</h2>

      <button onClick={() => setCount(count + 1)} className="bg-green-400">
        Count
      </button>
      <br/>
      <br/>

      <button onClick={() => setName("React")}
        className="bg-pink-300">
        Change Name
      </button>

    </div>

  );
}

export default State;