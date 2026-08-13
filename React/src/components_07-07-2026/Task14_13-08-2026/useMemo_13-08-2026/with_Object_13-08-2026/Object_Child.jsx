import React from "react";

function Object_Child({ user }) {
  console.log("memo rendered");

  return <h2>{user.name} - {user.age}</h2>;
}

export default React.memo(Object_Child);