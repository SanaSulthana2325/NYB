import {
useContext,
useEffect
}
from "react";


import {
RestaurantContext
}
from "../context/RestaurantContext";


import {
getRestaurants
}
from "../services/restaurantAPI";


import RestaurantCard from "./RestaurantCard";



function RestaurantList(){


const {
restaurants,
setRestaurants
}
=
useContext(RestaurantContext);



useEffect(()=>{


getRestaurants()

.then(data=>{

setRestaurants(data);

})


},[]);



return(

<div>


<h2>
Restaurants
</h2>


{
restaurants.map(
restaurant=>(


<RestaurantCard

key={restaurant.id}

restaurant={restaurant}


/>


)
)

}


</div>


)

}


export default RestaurantList;