import React, { PureComponent } from "react";


// Child PureComponent using Props
class Pure_Component extends PureComponent {

  render() {

    console.log("Pure Child Rendered");

    return (
      <div className="p-4 bg-green-100 rounded-lg">

        <h2 className="text-xl font-bold">
          Count: {this.props.count}
        </h2>

      </div>
    );
  }
}



// Parent PureComponent using State
class Pure_Props_State extends React.PureComponent {

  state = {
    user: {
      name: "Sana",
    },
    count: 0
  };


  // Updating object state
  updateName = () => {

    this.setState({
      user: {
        ...this.state.user,
        name: "Tasleem",
      },
    });

  };


  // Updating count state
  increaseCount = () => {

    this.setState({
      count: this.state.count + 1
    });

  };


  render() {

    console.log("Parent Rendered");


    return (

      <div className="p-5 bg-red-100 rounded-lg space-y-3">


        <h2 className="text-xl font-semibold">
          User Name: {this.state.user.name}
        </h2>


        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={this.updateName}
        >
          Change Name
        </button>


        <button
          className="bg-blue-600 text-white px-4 py-2 rounded ml-3"
          onClick={this.increaseCount}
        >
          Increase Count
        </button>


        {/* Passing state value as props */}
        <Pure_Component 
          count={this.state.count}
        />


      </div>

    );
  }
}


export default Pure_Props_State;