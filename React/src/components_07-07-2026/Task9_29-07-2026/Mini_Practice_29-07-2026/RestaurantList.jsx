import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantList({ restaurants }) {
return ( <div>
{restaurants.map((item) => ( <RestaurantCard
       key={item.id}
       restaurant={item}
     />
))} </div>
);
}

export default RestaurantList;
