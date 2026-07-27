import { useEffect, useState } from "react";
import Header from "../Practical_Exercises_27-07-2026/Header";
import UserCard from "../Practical_Exercises_27-07-2026/UserCard";

function Practical_App() {

  const [users, setUsers] = useState([]);

  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getUsers() {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);

      setLoading(false);

    }

    getUsers();

  }, []);

  return (

    <div className="min-h-screen bg-gray-100">

      <Header />

      <div className="text-center mt-6">

        <button

          onClick={() => setCount(count + 1)}

          className="bg-blue-600 text-white px-6 py-3 rounded-lg"

        >

          Parent Count : {count}

        </button>

      </div>

      {loading ? (

        <h1 className="text-center text-3xl mt-10">

          Loading...

        </h1>

      ) : (

        <div className="grid md:grid-cols-3 gap-6 p-10">

          {users.map(user => (

            <UserCard

              key={user.id}

              user={user}

            />

          ))}

        </div>

      )}

    </div>

  );

}

export default Practical_App;