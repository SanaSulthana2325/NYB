import { useState } from "react";
import Child_Prop from "./Child_Prop";


function Parent_Prop() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>

      <button
        className="bg-purple-600 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <Child_Prop name="Sana"/>
    </div>
  );
}

export default Parent_Prop;