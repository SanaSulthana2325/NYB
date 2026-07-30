import React from 'react';

const RestaurantCard = React.memo(({ restaurant }) => {
  return (
    <div className="border p-4 m-2 rounded">
      <h2>{restaurant.name}</h2>
      <p>⭐ {restaurant.rating}</p>
    </div>
  );
});

export default RestaurantCard;