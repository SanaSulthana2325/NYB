import React, { Component } from 'react'

class Passing_Parameters extends Component {
    greet(name){
        alert("Hello " + name);
    }
  render() {
    return (
      <div>

        <button onClick={() => this.greet("Nashu")}
            className='bg-red-200'>Greet</button>
      </div>
    )
  }
}

export default Passing_Parameters