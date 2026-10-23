
import {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

// 1. Create Context
const StudentContext = createContext();

// 2. Initial State: complex object containing an array
const initialState = {
  students: [
    { id: 1, name: "Rahul", course: "React", active: true },
    { id: 2, name: "Priya", course: "JavaScript", active: true },
    { id: 3, name: "Arun", course: "Python", active: false },
  ],
  totalActions: 0,
  message: "Welcome to Student Management!",
};

// 3. Action types
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const TOGGLE_STUDENT = "TOGGLE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const RESET_STUDENTS = "RESET_STUDENTS";

// 4. Reducer Function
function studentReducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
        totalActions: state.totalActions + 1,
        message: `${action.payload.name} added successfully!`,
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
        totalActions: state.totalActions + 1,
        message: "Student deleted successfully!",
      };

    case TOGGLE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload
            ? { ...student, active: !student.active }
            : student
        ),
        totalActions: state.totalActions + 1,
        message: "Student status updated!",
      };

    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? { ...student, ...action.payload }
            : student
        ),
        totalActions: state.totalActions + 1,
        message: "Student name updated!",
      };

    case RESET_STUDENTS:
      return {
        ...initialState,
        students: initialState.students.map((student) => ({ ...student })),
        totalActions: state.totalActions + 1,
        message: "Student list reset!",
      };

    default:
      return state;
  }
}

// 5. Context Provider + useReducer
function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(
    studentReducer,
    initialState
  );

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}

// 6. Custom Hook for accessing Context
function useStudents() {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error("useStudents must be used inside StudentProvider");
  }

  return context;
}

// 7. Add Student Form
function StudentForm() {
  const { state, dispatch } = useStudents();
  const [name, setName] = useState("");
  const [course, setCourse] = useState("React");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Please enter a student name.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      course,
      active: true,
    };

    dispatch({
      type: ADD_STUDENT,
      payload: newStudent,
    });

    setName("");
    setCourse("React");
    setError("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-xl bg-white p-5 shadow"
    >
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        Add Student
      </h2>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          className="flex-1 rounded-lg border p-3"
          placeholder="Student name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <select
          className="rounded-lg border p-3"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        >
          <option>React</option>
          <option>JavaScript</option>
          <option>Python</option>
          <option>Java</option>
        </select>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Add Student
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}

      <p className="mt-3 text-sm text-gray-500">
        Students currently registered: {state.students.length}
      </p>
    </form>
  );
}

// 8. Student List
function StudentList() {
  const { state, dispatch } = useStudents();

  function editStudent(student) {
    const newName = window.prompt(
      "Enter new student name:",
      student.name
    );

    if (newName && newName.trim()) {
      dispatch({
        type: UPDATE_STUDENT,
        payload: {
          id: student.id,
          name: newName.trim(),
        },
      });
    }
  }

  return (
    <section className="rounded-xl bg-white p-5 shadow">
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        Student List
      </h2>

      {state.students.length === 0 ? (
        <p className="py-5 text-center text-gray-500">
          No students found. Add a student above.
        </p>
      ) : (
        <div className="space-y-3">
          {state.students.map((student) => (
            <div
              key={student.id}
              className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-gray-800">
                  {student.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Course: {student.course}
                </p>

                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    student.active
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {student.active ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => editStudent(student)}
                  className="rounded-lg bg-amber-500 px-3 py-2 text-sm text-white hover:bg-amber-600"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: TOGGLE_STUDENT,
                      payload: student.id,
                    })
                  }
                  className="rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700"
                >
                  Toggle Status
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: DELETE_STUDENT,
                      payload: student.id,
                    })
                  }
                  className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// 9. State Summary Component
function StudentSummary() {
  const { state } = useStudents();

  const activeCount = state.students.filter(
    (student) => student.active
  ).length;

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl bg-blue-600 p-5 text-white shadow">
        <p className="text-sm">Total Students</p>
        <p className="text-3xl font-bold">
          {state.students.length}
        </p>
      </div>

      <div className="rounded-xl bg-green-600 p-5 text-white shadow">
        <p className="text-sm">Active Students</p>
        <p className="text-3xl font-bold">{activeCount}</p>
      </div>

      <div className="rounded-xl bg-purple-600 p-5 text-white shadow">
        <p className="text-sm">Dispatched Actions</p>
        <p className="text-3xl font-bold">{state.totalActions}</p>
      </div>
    </div>
  );
}

// 10. Main App
function StudentDashboard() {
  const { state, dispatch } = useStudents();

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Student Management
          </h1>
          <p className="mt-2 text-gray-600">
            Learn useReducer and Context API with a practical example.
          </p>
        </header>

        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-800">
          {state.message}
        </div>

        <StudentSummary />
        <StudentForm />
        <StudentList />

        <div className="mt-6 flex flex-col gap-3 rounded-xl bg-white p-5 shadow sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-gray-800">
              Reset Student List
            </h2>
            <p className="text-sm text-gray-500">
              Restore the original three students.
            </p>
          </div>

          <button
            onClick={() => dispatch({ type: RESET_STUDENTS })}
            className="rounded-lg bg-gray-800 px-5 py-3 font-semibold text-white hover:bg-black"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}

export default function UseReducer() {
  return (
    <StudentProvider>
      <StudentDashboard />
    </StudentProvider>
  );
}
