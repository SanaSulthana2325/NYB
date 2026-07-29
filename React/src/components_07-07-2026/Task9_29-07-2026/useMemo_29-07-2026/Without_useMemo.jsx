import { useState } from "react";

function Without_useMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveValue = (() => {
    console.log("Calculating...");

    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total;
  })();

  return (
    <div className="p-6 space-y-4">
      <input
        className="border p-2 rounded w-full"
        placeholder="Type here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>

      <h2 className="text-xl font-semibold">
        Value: {expensiveValue}
      </h2>
    </div>
  );
}

export default Without_useMemo;