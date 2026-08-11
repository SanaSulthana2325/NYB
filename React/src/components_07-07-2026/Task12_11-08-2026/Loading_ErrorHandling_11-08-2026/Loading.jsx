import React, { useEffect, useState } from "react";

function Loading() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(true);
      });
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div>
      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export default Loading;