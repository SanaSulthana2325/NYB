import React, { Component } from "react";

class Class_with_State extends Component {

  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h2>{this.state.count}</h2>

        <button onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default Class_with_State;