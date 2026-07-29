import React, { PureComponent } from "react";


class Pure_Component extends PureComponent {
  render() {
    console.log("Pure Child Rendered");

    return (
      <div className="p-4 bg-green-100 rounded-lg">
        <h2>Count: {this.props.count}</h2>
      </div>
    );
  }
}

export default Pure_Component;