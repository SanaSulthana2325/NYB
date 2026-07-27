import React from "react";

function Child_useCallback({ handleClick }) {

  console.log("Child Rendered");

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Click Me
    </button>
  );
}

export default React.memo(Child_useCallback);