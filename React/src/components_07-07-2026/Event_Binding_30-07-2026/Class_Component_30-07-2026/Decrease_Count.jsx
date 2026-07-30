import React, { Component } from "react";

class Decrease_Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };

    this.decrease = this.decrease.bind(this);
  }

  decrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.decrease}
        className="bg-blue-900">
          Decrement
        </button>
      </div>
    );
  }
}

export default Decrease_Count;