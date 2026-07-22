import { useEffect, useState } from "react";

function Loading_API() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h2>Loading Users...</h2>;
  }

  return (
    <div>

      <h2>User List</h2>

      {
        users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))
      }

    </div>
  );

}

export default Loading_API;