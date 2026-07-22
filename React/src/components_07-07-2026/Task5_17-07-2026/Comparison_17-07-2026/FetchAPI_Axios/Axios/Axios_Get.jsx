import axios from "axios";
import { useEffect, useState } from "react";

function Axios_Get() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data));

  }, []);

  return (

    <div>

      {users.map(user => (

        <h3 key={user.id}>
          {user.name}
        </h3>

      ))}

    </div>

  );

}

export default Axios_Get;