import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import RestaurantList from "./RestaurantList";
import CartSummary from "./CartSummary";
import { restaurants } from "./data_29-07-2026/restaurants";

function Mini_Practice_App() {

  const [search, setSearch] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [cart, setCart] = useState([]);

  const filteredRestaurants = restaurants.filter((r) => {

    const matchesSearch = r.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesVeg = vegOnly ? r.veg : true;

    return matchesSearch && matchesVeg;
  });


  return (
    <>
      <Navbar />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterPanel
        vegOnly={vegOnly}
        setVegOnly={setVegOnly}
      />

      <RestaurantList 
        restaurants={filteredRestaurants}
      />

      <CartSummary cart={cart} />
    </>
  );
}

export default Mini_Practice_App;