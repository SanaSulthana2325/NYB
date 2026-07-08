import React, { Component } from "react";

class Counter extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <>
        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default Counter;

//class and state mgnt is used here