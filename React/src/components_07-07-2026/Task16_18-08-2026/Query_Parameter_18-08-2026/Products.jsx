import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  const searchProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/search?q=phone"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      console.log(data);

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={searchProducts}
        className="bg-red-300"
      >
        Search Phones
      </button>

      {products.map((product) => (
        <p key={product.id}>
          {product.title}
        </p>
      ))}
    </div>
  );
}

export default Products;