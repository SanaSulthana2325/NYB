// Testing User Interactions
// Meaning: This checks whether an application responds correctly when users click buttons, type text, select options, or perform other actions.

import { useState } from "react";

function AddToCart() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <button
        onClick={() => setMessage("Product added successfully!")}
      >
        Add to Cart
      </button>

      <p>{message}</p>
    </div>
  );
}

export default AddToCart;