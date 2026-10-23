import { useMemo, useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import StudentDetails from "./StudentDetails";

const initialStudents = [
  {
    id: 101,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    course: "React JS",
    age: 21,
  },
  {
    id: 102,
    name: "Priya Reddy",
    email: "priya@example.com",
    course: "Java",
    age: 22,
  },
  {
    id: 103,
    name: "Rahul Kumar",
    email: "rahul@example.com",
    course: "Python",
    age: 20,
  },
];

export default function StudentApp() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [viewStudent, setViewStudent] = useState(null);
  const [message, setMessage] = useState("");

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query) ||
        student.course.toLowerCase().includes(query)
    );
  }, [students, search]);

  function handleSave(studentData) {
    if (selectedStudent) {
      setStudents((previous) =>
        previous.map((student) =>
          student.id === selectedStudent.id
            ? { ...student, ...studentData }
            : student
        )
      );

      setMessage("Student updated successfully!");
    } else {
      const newStudent = {
        ...studentData,
        id:
          students.length > 0
            ? Math.max(...students.map((student) => student.id)) + 1
            : 101,
      };

      setStudents((previous) => [...previous, newStudent]);
      setMessage("Student added successfully!");
    }

    setSelectedStudent(null);
    setViewStudent(null);
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) return;

    setStudents((previous) =>
      previous.filter((student) => student.id !== id)
    );

    if (selectedStudent?.id === id) {
      setSelectedStudent(null);
    }

    if (viewStudent?.id === id) {
      setViewStudent(null);
    }

    setMessage("Student deleted successfully!");
  }

  function handleEdit(student) {
    setSelectedStudent(student);
    setViewStudent(null);
    setMessage("");
  }

  function handleView(student) {
    setViewStudent(student);
    setSelectedStudent(null);
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-indigo-700 text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-5 py-7">
          <p className="text-sm font-medium text-indigo-200">
            STUDENT ADMINISTRATION
          </p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">
            Student Management
          </h1>
          <p className="mt-2 text-indigo-100">
            Manage student records in one place.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-6 px-5 py-8">
        {/* Summary cards */}
        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Students</p>
            <p className="mt-2 text-3xl font-bold text-indigo-700">
              {students.length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Courses Available</p>
            <p className="mt-2 text-3xl font-bold text-emerald-600">
              {new Set(students.map((student) => student.course)).size}
            </p>
          </div>
        </section>

        {message && (
          <div
            role="status"
            className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800"
          >
            <span>{message}</span>
            <button
              onClick={() => setMessage("")}
              aria-label="Dismiss message"
              className="ml-3 font-bold"
            >
              ×
            </button>
          </div>
        )}

        {/* Add/Edit form */}
        <section className="rounded-xl bg-white p-5 shadow-sm sm:p-7">
          <StudentForm
            selectedStudent={selectedStudent}
            onSave={handleSave}
            onCancel={() => setSelectedStudent(null)}
          />
        </section>

        {/* Selected student details */}
        {viewStudent && (
          <StudentDetails
            student={viewStudent}
            onClose={() => setViewStudent(null)}
          />
        )}

        {/* Search and student list */}
        <section className="space-y-4">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Student List
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Showing {filteredStudents.length} of {students.length} students
              </p>
            </div>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name, email or course..."
              aria-label="Search students"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:max-w-sm"
            />
          </div>

          <StudentList
            students={filteredStudents}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>

        <footer className="py-4 text-center text-sm text-slate-500">
          Student Management UI · Built with React and Tailwind CSS
        </footer>
      </div>
    </main>
  );
}