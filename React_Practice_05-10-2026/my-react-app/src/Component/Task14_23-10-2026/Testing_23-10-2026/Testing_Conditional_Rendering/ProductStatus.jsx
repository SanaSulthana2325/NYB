// Testing Conditional Rendering
// Meaning: Conditional rendering means displaying different content depending on a condition. Testing checks whether the correct content appears for each condition.


function ProductStatus({ inStock }) {
  return (
    <div>
      {inStock ? (
        <p>Available</p>
      ) : (
        <p>Out of Stock</p>
      )}
    </div>
  );
}

export default ProductStatus;