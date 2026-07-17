import {
useContext
}
from "react";


import {
RestaurantContext
}
from "../context/RestaurantContext";


function Favorites(){


const {favorites}=useContext(RestaurantContext);



return(

<div>

<h2>
Favorite Restaurants
</h2>


{
favorites.map(item=>(

<p key={item.id}>

{item.name}

</p>

))

}


</div>

)

}


export default Favorites;