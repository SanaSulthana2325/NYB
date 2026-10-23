export default function StudentList({
  students,
  onView,
  onEdit,
  onDelete,
}) {
  if (students.length === 0) {
    return (
      <p className="rounded-xl bg-white p-8 text-center text-slate-500">
        No students found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            <th className="p-4">ID</th>
            <th className="p-4">Student</th>
            <th className="p-4">Email</th>
            <th className="p-4">Course</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-slate-50">
              <td className="p-4 font-medium">{student.id}</td>
              <td className="p-4 font-semibold text-slate-800">
                {student.name}
              </td>
              <td className="p-4">{student.email}</td>
              <td className="p-4">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700">
                  {student.course}
                </span>
              </td>
              <td className="p-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onView(student)}
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onEdit(student)}
                    className="font-medium text-emerald-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(student.id)}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}