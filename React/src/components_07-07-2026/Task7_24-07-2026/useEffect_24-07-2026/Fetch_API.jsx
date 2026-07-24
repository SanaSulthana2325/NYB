import { useEffect, useState } from "react";

function Fetch_API() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        User List
      </h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white p-5 rounded-lg shadow-md mb-4"
        >
          <h2 className="text-xl font-semibold">
            {user.name}
          </h2>

          <p className="text-gray-600">
            {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Fetch_API;