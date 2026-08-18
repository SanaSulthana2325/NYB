import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function API_Dynamic_ID() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      const data = await response.json();

      setUser(data);
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default API_Dynamic_ID;