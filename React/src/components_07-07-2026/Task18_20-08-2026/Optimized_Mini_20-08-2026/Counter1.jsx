import React from "react";

const Counter1 = React.memo(function Counter({
  count,
  onIncrement,
}) {
  console.log("Counter rendered");

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-3 text-xl font-bold text-gray-800">
        Counter
      </h2>

      <p className="mb-4 text-2xl font-bold text-blue-600">
        {count}
      </p>

      <button
        onClick={onIncrement}
        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
});

export default Counter1;