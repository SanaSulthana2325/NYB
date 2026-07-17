import {createContext,useState} from "react";


export const RestaurantContext=createContext();



export function RestaurantProvider({children}){


const [restaurants,setRestaurants]=useState([]);

const [favorites,setFavorites]=useState([]);



return(

<RestaurantContext.Provider

value={{
restaurants,
setRestaurants,

favorites,
setFavorites
}}

>


{children}


</RestaurantContext.Provider>


)

}