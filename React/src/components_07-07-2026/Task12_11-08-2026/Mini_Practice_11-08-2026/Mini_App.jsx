import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loading from "./Loading";

function Mini_App() {

  // API data
  const [users, setUsers] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);

      } catch (error) {

        setError(error.message);

      } finally {

        setLoading(false);

      }
    };

    fetchUsers();

  }, []);

  // 1. Loading
  if (loading) {
    return <Loading />;
  }

  // 2. Error
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">

          <h2 className="text-2xl font-bold text-red-600">
            Something went wrong
          </h2>

          <p className="mt-3 text-gray-600">
            {error}
          </p>

        </div>

      </div>
    );
  }

  // 3. Success
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Employee Directory
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}

      </div>

    </div>
  );
}

export default Mini_App;