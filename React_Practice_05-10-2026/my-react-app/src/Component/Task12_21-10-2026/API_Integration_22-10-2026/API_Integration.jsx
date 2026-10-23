
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

const courses = ["React", "JavaScript", "Python"];

function API_Integration() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "React",
    marks: 80,
  });

  const [editingId, setEditingId] = useState(null);
  const [updateMethod, setUpdateMethod] = useState("PATCH");

  // GET: Fetch students with Axios and Promises
  useEffect(() => {
    let active = true;

    axios
      .get(API)
      .then((response) => {
        if (!active) return;

        const data = response.data.map((user) => ({
          ...user,
          course: courses[(user.id - 1) % courses.length],
          marks: 60 + ((user.id * 7) % 41),
        }));

        setStudents(data);
      })
      .catch((err) => {
        if (active) {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Failed to load students."
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // Search, filter, and sort
  const visibleStudents = useMemo(() => {
    let result = students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase());

      const matchesCourse =
        courseFilter === "All" ||
        student.course === courseFilter;

      return matchesSearch && matchesCourse;
    });

    result.sort((a, b) => {
      if (sortBy === "marks") return b.marks - a.marks;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return b.id - a.id;
    });

    return result;
  }, [students, search, courseFilter, sortBy]);

  // Form input handler
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "marks" ? Number(value) : value,
    }));
  }

  function resetForm() {
    setForm({
      name: "",
      email: "",
      course: "React",
      marks: 80,
    });
    setEditingId(null);
    setUpdateMethod("PATCH");
  }

  // POST, PUT, PATCH: async/await and Fetch API
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    try {
      const payload = {
        name: form.name.trim(),
        username: form.name.trim().replace(/\s+/g, ""),
        email: form.email.trim(),
      };

      let response;
      let savedStudent;

      if (editingId === null) {
        // POST: Create student
        response = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to create student.");
        }

        savedStudent = await response.json();

        savedStudent = {
          ...savedStudent,
          course: form.course,
          marks: form.marks,
        };

        setStudents((prev) => [savedStudent, ...prev]);
        setMessage("Student created successfully.");
      } else {
        // PUT: Full update; PATCH: Partial update
        const body =
          updateMethod === "PUT"
            ? {
                id: editingId,
                ...payload,
              }
            : payload;

        response = await fetch(`${API}/${editingId}`, {
          method: updateMethod,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error("Failed to update student.");
        }

        savedStudent = await response.json();

        const updatedStudent = {
          id: editingId,
          ...payload,
          course: form.course,
          marks: form.marks,
          ...savedStudent,
          course: form.course,
          marks: form.marks,
        };

        setStudents((prev) =>
          prev.map((student) =>
            student.id === editingId
              ? updatedStudent
              : student
          )
        );

        setMessage(`Student updated using ${updateMethod}.`);
      }

      resetForm();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  }

  // Load student details into form
  function handleEdit(student) {
    setEditingId(student.id);
    setForm({
      name: student.name,
      email: student.email,
      course: student.course,
      marks: student.marks,
    });
    setError("");
    setMessage("");
  }

  // DELETE: Remove student
  async function handleDelete(id) {
    if (!window.confirm("Delete this student?")) return;

    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete student.");
      }

      setStudents((prev) =>
        prev.filter((student) => student.id !== id)
      );

      if (editingId === id) resetForm();

      setMessage("Student deleted successfully.");
    } catch (err) {
      setError(err.message || "Delete failed.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-blue-700">
            Student Management
          </h1>
          <p className="mt-2 text-slate-600">
            React API Integration with Fetch and Axios
          </p>
        </header>

        {/* Add/Edit Form */}
        <form
          onSubmit={handleSubmit}
          className="mb-8 rounded-xl bg-white p-6 shadow"
        >
          <h2 className="mb-4 text-xl font-semibold">
            {editingId === null ? "Add Student" : "Edit Student"}
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-lg border p-3"
              name="name"
              placeholder="Student name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              className="rounded-lg border p-3"
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <select
              className="rounded-lg border p-3"
              name="course"
              value={form.course}
              onChange={handleChange}
            >
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>

            <input
              className="rounded-lg border p-3"
              name="marks"
              type="number"
              min="0"
              max="100"
              value={form.marks}
              onChange={handleChange}
              required
            />
          </div>

          {editingId !== null && (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <label htmlFor="method" className="font-medium">
                Update method:
              </label>
              <select
                id="method"
                className="rounded-lg border p-2"
                value={updateMethod}
                onChange={(e) => setUpdateMethod(e.target.value)}
              >
                <option value="PATCH">PATCH - Partial update</option>
                <option value="PUT">PUT - Full update</option>
              </select>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              {editingId === null ? "Add Student (POST)" : `Save (${updateMethod})`}
            </button>

            {editingId !== null && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg bg-slate-200 px-5 py-2"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Feedback states */}
        {loading && (
          <p className="mb-4 rounded-lg bg-blue-100 p-4 text-blue-800">
            Loading students from API...
          </p>
        )}

        {error && (
          <div
            role="alert"
            className="mb-4 rounded-lg bg-red-100 p-4 text-red-700"
          >
            {error}
            <button
              onClick={() => setError("")}
              className="ml-3 font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {message && (
          <p
            role="status"
            className="mb-4 rounded-lg bg-green-100 p-4 text-green-800"
          >
            {message}
          </p>
        )}

        {/* Search, filter, sort */}
        <section className="mb-5 rounded-xl bg-white p-5 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            Student List ({visibleStudents.length})
          </h2>

          <div className="grid gap-3 md:grid-cols-3">
            <input
              className="rounded-lg border p-3"
              placeholder="Search name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="rounded-lg border p-3"
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
            >
              <option value="All">All Courses</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>

            <select
              className="rounded-lg border p-3"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="marks">Sort by Marks</option>
              <option value="id">Sort by Newest ID</option>
            </select>
          </div>
        </section>

        {/* Student records */}
        {loading ? null : visibleStudents.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <h3 className="text-xl font-semibold">
              No students found
            </h3>
            <p className="mt-2 text-slate-500">
              Try another search or change the course filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl bg-white shadow">
            <table className="w-full min-w-[700px] text-left">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Course</th>
                  <th className="p-4">Marks</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {visibleStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="p-4">{student.id}</td>
                    <td className="p-4 font-medium">
                      {student.name}
                    </td>
                    <td className="p-4">{student.email}</td>
                    <td className="p-4">{student.course}</td>
                    <td className="p-4">{student.marks}/100</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(student)}
                          className="rounded bg-amber-500 px-3 py-1 text-white"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="rounded bg-red-600 px-3 py-1 text-white"
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
        )}
      </div>
    </main>
  );
}

export default API_Integration;
