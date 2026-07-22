import { useState, useEffect } from "react";
import axios from "axios";

function Axios() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      });

  }, []);

  return (
    <div>

      <h2>Users List</h2>

      {users.map((user) => (

        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>

      ))}

    </div>
  );
}

export default Axios;



// | Feature                | Fetch API                           | Axios                                                            |
// | ---------------------- | ----------------------------------- | ---------------------------------------------------------------- |
// | Installation           |  Not required (built into browser) |  `npm install axios`                                            |
// | JSON Conversion        |  Must call `response.json()`       |  Automatic (`response.data`)                                    |
// | Error Handling         |  Must manually check `response.ok` |  Automatically throws errors for HTTP status codes like 404/500 |
// | Request Timeout        |  Not built-in                      |  Supports `timeout` option                                      |
// | Request Cancellation   | Limited                             |  Built-in support                                               |
// | Base URL Configuration |  Manual                            |  Easy with `axios.create()`                                     |
// | Interceptors           |  Not available                     |  Request and response interceptors                              |
// | Code Simplicity        | More boilerplate                    | Cleaner and shorter                                              |

