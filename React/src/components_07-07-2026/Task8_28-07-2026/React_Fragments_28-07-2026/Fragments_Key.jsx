import React from "react";

function Fragments_Key() {
  const users = [
    { id: 1, name: "Sana" },
    { id: 2, name: "Ali" },
  ];

  return (
    <>
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <h2>{user.name}</h2>
          <hr />
        </React.Fragment>
      ))}
    </>
  );
}

export default Fragments_Key;