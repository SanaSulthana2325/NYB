import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.increase}
        className="bg-orange-500">
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;