import React, { Component } from 'react'


class Normal_Component extends Component {
  render() {
    console.log("Child Rendered");

    return (
    
      <div className='p-4 bg-blue-100 rounded-lg'>
        <h2> Count: {this.props.count}</h2>
      </div>
      
    );
  }
}

export default Normal_Component;
