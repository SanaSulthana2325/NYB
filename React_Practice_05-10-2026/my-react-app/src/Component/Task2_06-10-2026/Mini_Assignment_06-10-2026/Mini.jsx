import { useState } from "react";

function Mini() {

  // Product list
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      category: "Fashion"
    },
    {
      id: 2,
      name: "Shoes",
      price: 999,
      category: "Footwear"
    }
  ]);

  // Selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Input values
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  // Add product
  function addProduct() {

    if (name === "" || price === "") {
      alert("Please enter product details");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      category: "New Product"
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
  }


  // Delete product
  function deleteProduct(id) {

    setProducts(
      products.filter((product) => product.id !== id)
    );

    setSelectedProduct(null);
  }


  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* Heading */}

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Product Manager
      </h1>


      {/* Add Product */}

      <div className="bg-white max-w-md mx-auto p-6 rounded-lg shadow mb-8">

        <h2 className="text-xl font-bold mb-4">
          Add Product
        </h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-3 rounded mb-3"
        />

        <button
          onClick={addProduct}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Add Product
        </button>

      </div>


      {/* Product List */}

      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl font-bold mb-4">
          Product List
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white p-5 rounded-lg shadow"
            >

              <h3 className="text-xl font-bold">
                {product.name}
              </h3>

              <p className="text-gray-500">
                {product.category}
              </p>

              <p className="text-blue-600 font-bold text-lg">
                ₹{product.price}
              </p>


              <div className="flex gap-2 mt-4">

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  View
                </button>

                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* Conditional Product Details */}

      {selectedProduct && (

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Product Details
          </h2>

          <p>
            <b>Name:</b> {selectedProduct.name}
          </p>

          <p>
            <b>Category:</b> {selectedProduct.category}
          </p>

          <p>
            <b>Price:</b> ₹{selectedProduct.price}
          </p>

          <button
            onClick={() => setSelectedProduct(null)}
            className="bg-gray-700 text-white px-4 py-2 rounded mt-4"
          >
            Close
          </button>

        </div>

      )}

    </div>
  );
}

export default Mini;