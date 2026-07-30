import React, { Component } from 'react'

class OnChange1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:"",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            name: event.target.value,
        });

    }
  render() {
    return (
      <div>
        <input
        type="text"
        placeholder="Enter name"
        onChange={this.handleChange}
        className='border border-red-900'/>

        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default OnChange1