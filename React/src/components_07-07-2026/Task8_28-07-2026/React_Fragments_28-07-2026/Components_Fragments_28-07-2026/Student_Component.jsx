const students = [
  { id: 1, name: "Sana", marks: 95 },
  { id: 2, name: "Ali", marks: 88 },
  { id: 3, name: "Sara", marks: 91 },
];

function StudentRow({ student }) {
  return (
    <>
      <td className="border px-4 py-2">{student.id}</td>
      <td className="border px-4 py-2">{student.name}</td>
      <td className="border px-4 py-2">{student.marks}</td>
    </>
  );
}

function Student_Component() {
  return (
    <div >
      <table className="border-collapse border border-gray-400 mx-auto bg-white shadow-lg">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Marks</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <StudentRow student={student} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student_Component;