import { useState, useEffect } from "react";

function Async_Await() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const getUsers = async () => {

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Something Went Wrong");
        }

        const data = await response.json();

        setUsers(data);

      } catch (error) {
        console.log(error.message);
      }
    };

    getUsers();

  }, []);

  return (

    <div>

      {users.map((user) => (

        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>

      ))}

    </div>

  );
}

export default Async_Await;




//FETCH API FLOW

// Component Loads
//       │
//       ▼
// useEffect() Runs
//       │
//       ▼
// fetch(API_URL)
//       │
//       ▼
// Server Receives Request
//       │
//       ▼
// Server Sends Response
//       │
//       ▼
// response.json()
//       │
//       ▼
// setState()
//       │
//       ▼
// React Re-renders UI
//       │
//       ▼
// Data Displayed on Screen