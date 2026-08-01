function CR_List() {
  const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Mouse', price: 500 }
  ];

  return (
    <div>
      <h2>Expensive Products</h2>

      {products.map((product) =>
        product.price > 10000 ? (
          <p key={product.id}>
            {product.name} - ₹{product.price}
          </p>
        ) : null
      )}
    </div>
  );
}

export default CR_List