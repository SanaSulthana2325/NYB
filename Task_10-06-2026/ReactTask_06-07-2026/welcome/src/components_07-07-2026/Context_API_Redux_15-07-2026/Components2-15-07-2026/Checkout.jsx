import {useSelector} from "react-redux";


function Checkout(){

const cart=useSelector(
(state)=>state.cart
);


const total=cart.reduce(
(sum,item)=>sum+item.price,
0
);


return(

<div>

<h2>Checkout</h2>

<p>Total : ₹{total}</p>


</div>

);

}

export default Checkout;