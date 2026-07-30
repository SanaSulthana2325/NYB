import React, { Component } from "react";

class Mouse_Event extends Component {
  handleEnter = () => {
    console.log("Mouse Entered");
  };

  handleLeave = () => {
    console.log("Mouse Left");
  };

  render() {
    return (
      <div
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        style={{
          width: 200,
          height: 100,
          background: "lightgreen",
          textAlign: "center",
          lineHeight: "100px",
        }}
      >
        Hover Me
      </div>
    );
  }
}

export default Mouse_Event;