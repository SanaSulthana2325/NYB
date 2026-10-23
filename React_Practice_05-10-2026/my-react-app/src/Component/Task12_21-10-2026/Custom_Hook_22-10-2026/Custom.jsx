
import { useState, useEffect } from "react";

// ========================================
// 1. CUSTOM HOOK: Reusable Counter Logic
// ========================================
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((previous) => previous + 1);
  const decrement = () => setCount((previous) => previous - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// ========================================
// 2. CUSTOM HOOK: API Fetching
// ========================================
function useStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStudents() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch students.");
        }

        const data = await response.json();

        // Convert API users into student-shaped objects
        const studentData = data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          course: user.company.name,
        }));

        setStudents(studentData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchStudents();

    // Cleanup when the component unmounts or effect restarts
    return () => controller.abort();
  }, [reloadKey]);

  function reloadStudents() {
    setReloadKey((previous) => previous + 1);
  }

  return {
    students,
    loading,
    error,
    reloadStudents,
  };
}

// ========================================
// 3. REUSABLE COMPONENT: Counter
// ========================================
function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <section className="rounded-xl bg-white p-5 shadow">
      <h2 className="mb-3 text-xl font-bold text-gray-800">
        Custom Hook: useCounter()
      </h2>

      <p className="mb-4 text-3xl font-bold text-blue-600">
        Count: {count}
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={increment}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Decrement
        </button>

        <button
          onClick={reset}
          className="rounded-lg bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </section>
  );
}

// ========================================
// 4. STUDENT SUMMARY
// Reuses the API fetching Custom Hook
// ========================================
function StudentSummary() {
  const { students, loading, error } = useStudents();

  if (loading) {
    return (
      <section className="rounded-xl bg-white p-5 shadow">
        <p className="text-gray-600">Loading student summary...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-xl bg-white p-5 shadow">
        <p className="text-red-600">
          Summary unavailable: {error}
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-xl bg-white p-5 shadow">
      <h2 className="mb-3 text-xl font-bold text-gray-800">
        Student Summary
      </h2>

      <p className="text-gray-600">
        Total students fetched:
        <span className="ml-2 font-bold text-blue-600">
          {students.length}
        </span>
      </p>
    </section>
  );
}

// ========================================
// 5. STUDENT LIST
// Uses API Hook, search, loading, and error
// ========================================
function StudentList() {
  const { students, loading, error, reloadStudents } = useStudents();
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.email} ${student.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="rounded-xl bg-white p-5 shadow">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-gray-800">
          Student List
        </h2>

        <button
          onClick={reloadStudents}
          disabled={loading}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Refresh Data"}
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by name, email, or course..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
      />

      {loading && (
        <p className="py-6 text-center text-blue-600">
          Loading students from API...
        </p>
      )}

      {!loading && error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700">
          <p className="mb-3">{error}</p>
          <button
            onClick={reloadStudents}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && filteredStudents.length === 0 && (
        <p className="py-6 text-center text-gray-500">
          No students found.
        </p>
      )}

      {!loading && !error && filteredStudents.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Company / Course</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">{student.id}</td>
                  <td className="p-3 font-medium">
                    {student.name}
                  </td>
                  <td className="p-3">{student.email}</td>
                  <td className="p-3">{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-3 text-sm text-gray-500">
            Showing {filteredStudents.length} of {students.length} students
          </p>
        </div>
      )}
    </section>
  );
}

// ========================================
// 6. MAIN APP
// ========================================
export default function Custom() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header>
          <h1 className="text-3xl font-bold text-gray-900">
            React Custom Hooks
          </h1>
          <p className="mt-2 text-gray-600">
            Reusable logic, API fetching, and student data.
          </p>
        </header>

        <CounterDemo />
        <StudentSummary />
        <StudentList />
      </div>
    </main>
  );
}
