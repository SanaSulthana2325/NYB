export default function StudentDetails({ student, onClose }) {
  if (!student) return null;

  return (
    <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-indigo-950">
          Student Details
        </h2>
        <button
          onClick={onClose}
          className="rounded-lg border border-indigo-200 bg-white px-3 py-1.5"
        >
          Close
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Age:</strong> {student.age}</p>
      </div>
    </div>
  );
}