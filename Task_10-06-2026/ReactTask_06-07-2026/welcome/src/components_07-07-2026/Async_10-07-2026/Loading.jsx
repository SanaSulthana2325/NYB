import { useEffect, useState } from "react";

function Loading() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getUsers = async () => {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);

      setLoading(false);

    };

    getUsers();

  }, []);

  if (loading) {

    return <h2>Loading...</h2>;

  }

  return (

    <>

      {users.map((user)=>(

        <h3 key={user.id}>
          {user.name}
        </h3>

      ))}

    </>

  );

}

export default Loading;