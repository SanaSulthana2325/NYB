import { useContext } from "react";
import RestaurantContext from "./RestaurantContext";

function Menu(){

const restaurant=useContext(RestaurantContext);

return(

<h2>

Restaurant : {restaurant}

</h2>

);

}

export default Menu;