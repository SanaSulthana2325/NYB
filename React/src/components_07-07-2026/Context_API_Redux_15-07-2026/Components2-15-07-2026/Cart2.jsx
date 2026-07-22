import {useSelector} from "react-redux";


function Cart2(){

const cart=useSelector(
(state)=>state.cart
);


return(

<div>

<h2>Shopping Cart</h2>


{
cart.length===0 ?

<p>No Items</p>

:

cart.map((item)=>(

<div key={item.id}>

<p>{item.name}</p>
<p>₹{item.price}</p>

</div>

))

}


</div>

);

}

export default Cart2;