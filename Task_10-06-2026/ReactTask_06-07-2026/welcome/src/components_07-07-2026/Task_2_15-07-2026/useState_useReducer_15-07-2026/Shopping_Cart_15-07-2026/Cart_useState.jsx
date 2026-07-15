import {useState} from 'react'

function Cart_useState() {
    const[quantity,setQuantity]=useState(1);
  return (
    <>
    <h2> Quantity:{quantity}</h2>

    <button onClick={()=>setQuantity(quantity+1)}>
        +
    </button>

    <button onClick={()=>setQuantity(quantity-1)}>
        -
    </button>
    </>
  )
}

export default Cart_useState;