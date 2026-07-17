import {
useContext
}
from "react";


import {
RestaurantContext
}
from "../context/RestaurantContext";



function RestaurantCard({restaurant}){


const {
favorites,
setFavorites
}
=
useContext(RestaurantContext);



function addFavorite(){


setFavorites(

[
...favorites,
restaurant
]

);


}



return(

<div>


<h3>

{restaurant.name}

</h3>


<p>

Cuisine:
{restaurant.cuisine}

</p>


<button

onClick={addFavorite}

>

Add Favorite

</button>


</div>


)

}



export default RestaurantCard;