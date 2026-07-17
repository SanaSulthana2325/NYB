import {useContext} from "react";

import {RestaurantContext}
from "../context/RestaurantContext";


function Navbar(){


const {favorites}=useContext(RestaurantContext);



return(

<h1>

Food Delivery App 

Favorites:
{favorites.length}

</h1>

)

}


export default Navbar;