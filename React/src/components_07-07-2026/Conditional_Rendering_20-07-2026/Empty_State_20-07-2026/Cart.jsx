

function Cart() {
    const cart=[]
  return (
    <>
    {
        cart.length ===0
        ?<h2>Your Cart is Empty</h2>
        : <h2>Items Available</h2>
    }
    </>
  )
}

export default Cart