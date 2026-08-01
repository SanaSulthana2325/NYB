function Available_Not() {
  const products = [
    { id: 1, name: 'Laptop', inStock: true },
    { id: 2, name: 'Phone', inStock: false },
    { id: 3, name: 'Mouse', inStock: true }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <p key={product.id}>
          {product.name} -{' '}
          {product.inStock ? 'Available' : 'Out of Stock'}
        </p>
      ))}
    </div>
  );
}

export default Available_Not;