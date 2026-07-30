import React from "react";

function OnDoubleClick() {
  function doubleClick() {
    alert("Double Clicked");
  }

  return (
    <>
      <button
        onDoubleClick={doubleClick}
        className="bg-orange-500 px-4 py-2 rounded"
      >
        Double Click Me
      </button>
    </>
  );
}

export default OnDoubleClick;