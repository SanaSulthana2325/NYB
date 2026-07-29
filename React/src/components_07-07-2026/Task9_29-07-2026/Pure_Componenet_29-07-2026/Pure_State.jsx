import React,{PureComponent} from "react";

class Pure_State extends React.PureComponent {
    //re-renders only when shallow comparion detects changes
  state = {
    user: {
      name: "Sana",
    },
  };

  updateName = () => {
  this.setState({
    user: {
      ...this.state.user,
      name: "Tasleem",
    },
  });
};
  render() {
    console.log("Rendered");

    return (
      <div className="p-4 bg-red-100 rounded-lg space-y-2">
        <h2 className="text-xl font-semibold">{this.state.user.name}</h2>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={this.updateName}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default Pure_State;