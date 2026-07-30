import React from "react";

function Delete_Button() {
  function deleteItem(id) {
    console.log("Deleted item " + id);
  }

  return (
    <div className="flex gap-4">
      <button
        onClick={() => deleteItem(1)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Delete Product 1
      </button>

      <button
        onClick={() => deleteItem(2)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Delete Product 2
      </button>

      <button
        onClick={() => deleteItem(3)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Delete Product 3
      </button>
    </div>
  );
}

export default Delete_Button;