import {useSelector} from 'react-redux'

function Cart() {
    const cart = useSelector((state) => state.cart);
  return (
    <div>
        <h2>Cart Items</h2>
        {cart.map((item) => (
            <p key={item.id}>
                {item.name} - ₹{item.price}
            </p>
        ))}
    </div>
  );
}

export default Cart;