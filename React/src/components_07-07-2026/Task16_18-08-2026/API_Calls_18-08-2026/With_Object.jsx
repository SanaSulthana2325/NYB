import React, { useEffect, useState } from "react";

function With_Object() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/users/1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        console.log(data);

        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>

      <p>Age: {user.age}</p>

      <p>City: {user.address.city}</p>
    </div>
  );
}

export default With_Object;