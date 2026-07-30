import React, { Component } from 'react'

class Button extends Component {
    handleClick(){
        alert("Button Clicked");
    }
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <button onClick={this.handleClick}
        className='bg-green-700'>Click Me</button>
      </div>
    );
  }
}

export default Button;