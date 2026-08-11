import React, { useEffect, useState } from "react";

function Error_Loading() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map(product => (
        <p key={product.id}>
          {product.title}
        </p>
      ))}
    </div>
  );
}

export default Error_Loading;