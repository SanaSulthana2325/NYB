function CartSummary({ cart }) {
  return (
    <div className="bg-gray-100 p-4">
      Items: {cart.length}
    </div>
  );
}


export default CartSummary;