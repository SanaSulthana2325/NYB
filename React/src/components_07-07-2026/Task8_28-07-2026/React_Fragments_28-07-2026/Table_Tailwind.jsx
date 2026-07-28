const users = [
  { id: 1, name: "Sana", age: 22, city: "Hyderabad" },
  { id: 2, name: "Ali", age: 25, city: "Delhi" },
  { id: 3, name: "John", age: 28, city: "Mumbai" },
  { id: 4, name: "Sara", age: 24, city: "Chennai" },
];

function Row({ user }) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="border px-4 py-2">{user.id}</td>
      <td className="border px-4 py-2">{user.name}</td>
      <td className="border px-4 py-2">{user.age}</td>
      <td className="border px-4 py-2">{user.city}</td>
    </tr>
  );
}

function Table_Tailwind() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <table className="border-collapse border border-gray-400 bg-white shadow-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">City</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <Row key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table_Tailwind;