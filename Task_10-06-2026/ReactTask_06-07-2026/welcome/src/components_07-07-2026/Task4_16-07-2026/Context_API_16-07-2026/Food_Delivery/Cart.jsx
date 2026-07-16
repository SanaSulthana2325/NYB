import { useContext } from "react";
import RestaurantContext from "./RestaurantContext";

function Cart(){

const restaurant=useContext(RestaurantContext);

return(

<h2>

Items from {restaurant}

</h2>

);

}

export default Cart;