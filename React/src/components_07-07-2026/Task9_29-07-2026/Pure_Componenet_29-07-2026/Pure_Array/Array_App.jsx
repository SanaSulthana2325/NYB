import React, { Component } from "react";
import Child from "./Child";

class Array_App extends Component {
  state = {
    items: ["Pen", "Book"],
  };

  addItem = () => {
    this.setState({
      items: [...this.state.items, "Pencil"],
    });
  };

  render() {
    return (
      <div className="p-6 space-y-4">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={this.addItem}
        >
          Add Item
        </button>

        <Child items={this.state.items} />
      </div>
    );
  }
}

export default Array_App;