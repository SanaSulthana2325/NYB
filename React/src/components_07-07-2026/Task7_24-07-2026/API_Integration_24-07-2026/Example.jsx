import { useEffect, useState } from "react";

function Example() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        User Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {users.map((user) => (

          <div
            key={user.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >

            <h2 className="text-2xl font-bold text-gray-800">
              {user.name}
            </h2>

            <p className="text-gray-600 mt-2">
               {user.email}
            </p>

            <p className="text-gray-500 mt-2">
               {user.phone}
            </p>

            <p className="text-blue-500 mt-2">
               {user.website}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Example;