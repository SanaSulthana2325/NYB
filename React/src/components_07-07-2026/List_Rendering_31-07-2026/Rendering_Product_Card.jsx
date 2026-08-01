function Rendering_Product_Card() {
  const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Headphones', price: 3000 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '5px solid red',
            padding: '10px',
            margin: '10px'
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Rendering_Product_Card;