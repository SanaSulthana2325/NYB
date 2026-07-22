import { useState, useEffect } from "react";

function Count() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect Executed");
  });

  return (
    <div>
      <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition duration-300"
        >
          Increment
        </button>
    </div>
  );
}

export default Count;