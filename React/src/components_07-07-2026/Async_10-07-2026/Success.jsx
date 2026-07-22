import { useState } from "react";

function Success() {

  const [message, setMessage] = useState("");

  const getUsers = async () => {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    await response.json();

    setMessage("Users Loaded Successfully");

  };

  return (

    <>

      <button onClick={getUsers}>
        Fetch Users
      </button>

      <h2>{message}</h2>

    </>

  );

}

export default Success;