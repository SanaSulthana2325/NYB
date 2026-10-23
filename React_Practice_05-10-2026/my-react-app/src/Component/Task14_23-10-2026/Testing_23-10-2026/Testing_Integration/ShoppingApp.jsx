// Integration Testing Basics
// Meaning: Integration testing checks whether multiple components or parts of an application work together correctly.

// Component testing checks one component at a time. Integration testing checks a complete user flow involving multiple components.


import { useState } from "react";

function ShoppingApp() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(0);

  const products = ["Laptop", "Mouse", "Keyboard"];

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Shopping Store</h1>

      <label htmlFor="search">Search Products</label>
      <input
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Cart Items: {cart}</p>

      {filteredProducts.map((product) => (
        <div key={product}>
          <span>{product}</span>
          <button onClick={() => setCart((count) => count + 1)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingApp;