import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  return (

    <div className="bg-white rounded-xl shadow-md p-5">

      <div className="text-5xl text-center mb-4">
        {product.image}
      </div>

      <h2 className="text-xl font-bold">
        {product.name}
      </h2>

      <p className="text-gray-500 mt-2">
        {product.description}
      </p>

      <p className="text-2xl font-bold text-blue-600 mt-4">
        ₹{product.price.toLocaleString()}
      </p>

      <button

        onClick={() => dispatch(addToCart(product))}

        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"

      >
        Add to Cart

      </button>

    </div>
  );
}

export default ProductCard;