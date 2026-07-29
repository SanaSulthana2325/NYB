import { useState } from "react";
import Child_WithReactMemo from "./Child_WithReactMemo";


function With_ReactMemo_App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <Child_WithReactMemo/>
    </div>
  );
}

export default With_ReactMemo_App;