import React, { useState, useEffect } from 'react';

function API_fetch() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <>
      <h1>Product</h1>

      {product && (
        <p>
          {product.title}
        </p>
      )}
    </>
  );
}

export default API_fetch;