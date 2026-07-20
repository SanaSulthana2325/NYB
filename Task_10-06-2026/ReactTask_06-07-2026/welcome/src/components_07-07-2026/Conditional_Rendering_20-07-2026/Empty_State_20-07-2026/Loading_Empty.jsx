import { useEffect, useState } from "react";

function Loading_Empty() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {

      setUsers([]);

      setLoading(false);

    }, 4000);

  }, []);

  if (loading) {

    return <h2>Loading...</h2>;

  }

  if (users.length === 0) {

    return <h2>No Users Found</h2>;

  }

  return (

    <div>

      {
        users.map(user =>
          <p key={user.id}>{user.name}</p>
        )
      }

    </div>

  );

}

export default Loading_Empty;