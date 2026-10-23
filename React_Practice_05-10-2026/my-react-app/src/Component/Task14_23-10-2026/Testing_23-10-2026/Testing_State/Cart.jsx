// Testing State
// Meaning: State stores data inside a React component. Testing state checks whether the user interface updates when the state changes.


import { useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Cart Items: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;