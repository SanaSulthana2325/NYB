import React, { useEffect, useState } from "react";

function Error_Handling() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://wrong-api-url.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => {
        setError("Failed to fetch products");
      });
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export default Error_Handling;