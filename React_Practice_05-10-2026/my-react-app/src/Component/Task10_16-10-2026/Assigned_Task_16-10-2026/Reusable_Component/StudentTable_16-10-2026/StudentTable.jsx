export default function StudentTable({ students = [] }) {
  if (students.length === 0) {
    return <p className="p-4 text-gray-500">No students found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border p-2">{student.id}</td>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}