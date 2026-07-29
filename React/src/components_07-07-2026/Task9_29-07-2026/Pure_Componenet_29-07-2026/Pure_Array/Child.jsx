import React, { PureComponent } from "react";

class Child extends PureComponent {
  render() {
    console.log("Sonu Rendered");

    return (
      <div className="p-4 bg-blue-100 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Items</h2>
        <ul className="list-disc pl-5">
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Child;