import { useEffect, useState } from "react";

function Try_Catch() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function getUsers(){

      try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        setUsers(data);

      }

      catch(error){

        console.log(error);

      }

    }

    getUsers();

  },[]);

  return(

    <div>

      {
        users.map(user=>(
          <p key={user.id}>{user.name}</p>
        ))
      }

    </div>

  );

}

export default Try_Catch;
















// Error Handling means managing errors that occur while fetching data, processing responses, or executing code so that the application doesn't crash and users receive meaningful messages.

// What is Error Handling?

// Error handling is the process of detecting and managing errors in your application.

// For example:

// Internet connection is unavailable.
// API server is down.
// Wrong API URL.
// Invalid JSON response.
// User enters incorrect data.
// Unexpected JavaScript error.


// TYPES OF ERROR HANDLING:
// | Error Type       | Example                   |
// | ---------------- | ------------------------- |
// | Network Error    | No internet               |
// | Server Error     | 500 Internal Server Error |
// | Client Error     | 404 Not Found             |
// | Invalid Response | API returns wrong data    |
// | JavaScript Error | Undefined variable        |
// | Validation Error | Empty input               |
