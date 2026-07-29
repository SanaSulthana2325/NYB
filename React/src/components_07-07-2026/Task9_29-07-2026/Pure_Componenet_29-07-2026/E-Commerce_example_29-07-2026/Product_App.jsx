import React, { Component } from "react";
import ProductCard from "./ProductCard";

class Product_App extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <div className="p-6 space-y-4">
        <input
          className="border p-2 rounded w-full"
          placeholder="Search products"
          onChange={(e) => this.setState({ search: e.target.value })}
        />

        <ProductCard name="Laptop" price={899} />
      </div>
    );
  }
}

export default Product_App;