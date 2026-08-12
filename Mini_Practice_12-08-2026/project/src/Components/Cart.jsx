import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "../redux/cartSlice";

function Cart() {

  const dispatch = useDispatch();

  const items = useSelector(
    state => state.cart.items
  );

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {

    return (

      <div className="bg-white rounded-xl shadow p-8 text-center">

        <div className="text-5xl mb-4">
          cart
        </div>

        <h2 className="text-2xl font-bold">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mt-2">
          Add some products to your cart.
        </p>

      </div>
    );
  }

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Shopping Cart
        </h2>

        <button
          onClick={() => dispatch(clearCart())}
          className="text-red-500 hover:text-red-700"
        >
          Clear Cart
        </button>

      </div>

      <div className="space-y-4">

        {items.map(item => (

          <div
            key={item.id}
            className="border rounded-lg p-4 flex items-center justify-between"
          >

            <div>

              <h3 className="font-bold">
                {item.image} {item.name}
              </h3>

              <p className="text-gray-500">
                ₹{item.price.toLocaleString()}
              </p>

            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
                className="bg-gray-200 px-3 py-1 rounded"
              >
                -
              </button>

              <span className="font-bold">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
                className="bg-gray-200 px-3 py-1 rounded"
              >
                +
              </button>

            </div>

            <div className="font-bold">
              ₹{(item.price * item.quantity).toLocaleString()}
            </div>

            <button
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
              className="text-red-500"
            >
              Remove
            </button>

          </div>

        ))}

      </div>

      <div className="border-t mt-6 pt-6 flex justify-between">

        <span className="text-xl font-bold">
          Total
        </span>

        <span className="text-2xl font-bold text-blue-600">
          ₹{total.toLocaleString()}
        </span>

      </div>

    </div>
  );
}

export default Cart;