import {
useContext
}
from "react";


import {
RestaurantContext
}
from "../context/RestaurantContext";


function SearchBar(){


const {
restaurants,
setRestaurants
}
=
useContext(RestaurantContext);



function search(e){


const value=e.target.value;


const filtered=
restaurants.filter(
item=>
item.name
.toLowerCase()
.includes(value)
);


setRestaurants(filtered);


}



return(

<input

placeholder="Search Restaurant"

onChange={search}

/>

)

}


export default SearchBar;