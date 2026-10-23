// Testing Loading and Error States
// Meaning: When an application fetches data from an API, it should show a loading message while waiting and an error message if the request fails. Testing verifies both situations.


import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }

        return response.json();
      })
      .then(setProducts)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;

  if (error) return <p role="alert">Failed to load products</p>;

  if (products.length === 0) return <p>No products found</p>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default ProductsPage;