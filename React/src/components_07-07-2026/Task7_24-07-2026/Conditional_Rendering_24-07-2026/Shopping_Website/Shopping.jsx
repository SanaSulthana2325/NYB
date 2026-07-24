function Shopping() {
  const inStock = true;

  return (
    <div className="flex justify-center mt-10">
      {inStock ? (
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Buy Now
        </button>
      ) : (
        <button
          disabled
          className="bg-gray-400 text-white px-6 py-2 rounded cursor-not-allowed"
        >
          Out of Stock
        </button>
      )}
    </div>
  );
}

export default Shopping;