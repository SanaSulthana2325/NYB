
import { useState } from "react";

// 3. Reusable Functional Component
function Heading({ children }) {
  return (
    <h2 className="mb-4 border-b border-blue-200 pb-2 text-xl font-bold text-blue-700">
      {children}
    </h2>
  );
}

// Reusable output box
function Output({ children }) {
  return (
    <div className="mt-4 rounded-lg bg-gray-50 p-4 text-gray-700">
      {children}
    </div>
  );
}

// 5. Props: passing different types of data
function PropsExample({ name, age, subjects, isActive, student }) {
  return (
    <Output>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Subjects: {subjects.join(", ")}</p>
      <p>Active: {isActive ? "Yes" : "No"}</p>
      <p>
        Student object: {student.name} - {student.course}
      </p>
    </Output>
  );
}

// 6. Parent-child relationship
function Child({ message }) {
  return <p>Child received: {message}</p>;
}

function Parent() {
  return (
    <Output>
      <h3 className="mb-2 font-semibold">Parent Component</h3>
      <Child message="Hello from Parent!" />
    </Output>
  );
}

// 13. Props vs State
function PropsStateChild({ name }) {
  const [course, setCourse] = useState("HTML");

  return (
    <Output>
      <p>Props name: {name}</p>
      <p className="my-2">State course: {course}</p>

      <button
        onClick={() => setCourse("React")}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Change State
      </button>
    </Output>
  );
}

// Reusable button styling
const buttonClass =
  "mt-3 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600";

const inputClass =
  "mb-4 mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";

const cardClass =
  "rounded-xl border border-gray-200 bg-white p-6 shadow-sm";

export default function Assigned() {
  // 7. State using useState
  const [count, setCount] = useState(0);

  // 8. Event handling
  const [message, setMessage] = useState("No button clicked");

  // 9. Controlled form
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });

  // 10. Form validation
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 11. Dynamic list
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
  ]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Name is required");
      setSuccess("");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email");
      setSuccess("");
      return;
    }

    if (!form.course) {
      setError("Please select a course");
      setSuccess("");
      return;
    }

    setStudents((previous) => [
      ...previous,
      {
        id: Date.now(),
        name: form.name.trim(),
      },
    ]);

    setSuccess("Student registered successfully!");
    setError("");

    setForm({
      name: "",
      email: "",
      course: "",
    });
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 text-gray-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-600 p-8 text-white shadow-lg">
          <h1 className="text-3xl font-bold sm:text-4xl">
            React Beginner Practice
          </h1>
          <p className="mt-2 text-blue-100">
            Learn 13 React topics with Tailwind CSS
          </p>
        </header>

        {/* 1. Vite project */}
        <section className={`${cardClass} mb-6`}>
          <Heading>1. React Project Setup Using Vite</Heading>

          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
{`this is my wrold`}
          </pre>

          <Output>
            Output: Your React development server starts.
          </Output>
        </section>

        {/* 2. Project structure */}
        <section className={`${cardClass} mb-6`}>
          <Heading>2. Complete Project Structure</Heading>

          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
{` hello wrold!!!`}
          </pre>
        </section>

        {/* 3. Reusable functional components */}
        <section className={`${cardClass} mb-6`}>
          <Heading>3. Reusable Functional Components</Heading>

          <p className="mb-4">
            A component can be reused in different places.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Output>
              <Heading>Student One</Heading>
              Rahul
            </Output>

            <Output>
              <Heading>Student Two</Heading>
              Priya
            </Output>
          </div>
        </section>

        {/* 4. JSX and JavaScript expressions */}
        <section className={`${cardClass} mb-6`}>
          <Heading>4. JSX and JavaScript Expressions</Heading>

          <Output>
            <p>Student: {"Rahul"}</p>
            <p>Total Marks: {80 + 10}</p>
            <p>Result: {90 >= 40 ? "Pass" : "Fail"}</p>
          </Output>
        </section>

        {/* 5. Props */}
        <section className={`${cardClass} mb-6`}>
          <Heading>5. Passing Different Types of Props</Heading>

          <PropsExample
            name="Rahul"
            age={21}
            subjects={["React", "JavaScript"]}
            isActive={true}
            student={{ name: "Rahul", course: "React" }}
          />
        </section>

        {/* 6. Parent and child */}
        <section className={`${cardClass} mb-6`}>
          <Heading>6. Parent-Child Components</Heading>
          <Parent />
        </section>

        {/* 7. useState */}
        <section className={`${cardClass} mb-6`}>
          <Heading>7. State Using useState</Heading>

          <Output>
            <p className="text-lg">
              Count: <span className="font-bold">{count}</span>
            </p>

            <button
              onClick={() =>
                setCount((previous) => previous + 1)
              }
              className={buttonClass}
            >
              Increase Count
            </button>
          </Output>
        </section>

        {/* 8. Event handling */}
        <section className={`${cardClass} mb-6`}>
          <Heading>8. Click, Change and Submit Events</Heading>

          <button
            onClick={() => setMessage("Button clicked!")}
            className={buttonClass}
          >
            Click Event
          </button>

          <input
            placeholder="Type something"
            className={inputClass}
            onChange={(event) =>
              setMessage("Typed: " + event.target.value)
            }
          />

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setMessage("Form submitted!");
            }}
          >
            <button type="submit" className={buttonClass}>
              Submit Event
            </button>
          </form>

          <Output>{message}</Output>
        </section>

        {/* 9. Controlled form */}
        <section className={`${cardClass} mb-6`}>
          <Heading>9. Controlled Form</Heading>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
              className={inputClass}
            />

            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className={inputClass}
            />

            <label htmlFor="course" className="font-medium">
              Course
            </label>
            <select
              id="course"
              name="course"
              value={form.course}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select course</option>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
            </select>

            <button type="submit" className={buttonClass}>
              Register Student
            </button>
          </form>

          <Output>
            <p>Current name: {form.name || "Not entered"}</p>
            <p>Current email: {form.email || "Not entered"}</p>
            <p>Current course: {form.course || "Not selected"}</p>
          </Output>
        </section>

        {/* 10. Validation */}
        <section className={`${cardClass} mb-6`}>
          <Heading>10. Form Validation</Heading>

          <p className="mb-4">
            Submit the registration form above to test validation.
          </p>

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-100 p-3 text-red-700"
            >
              {error}
            </p>
          )}

          {success && (
            <p
              role="status"
              className="rounded-lg bg-green-100 p-3 text-green-700"
            >
              {success}
            </p>
          )}
        </section>

        {/* 11. Dynamic list */}
        <section className={`${cardClass} mb-6`}>
          <Heading>11. Dynamic Lists Using map()</Heading>

          <p className="mb-4 font-semibold">
            Total students: {students.length}
          </p>

          {students.length > 0 ? (
            <ul className="space-y-3">
              {students.map((student) => (
                <li
                  className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                  key={student.id}
                >
                  <span className="font-medium">Student ID:</span>{" "}
                  {student.id}
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="font-medium">Name:</span>{" "}
                  {student.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No students found.</p>
          )}
        </section>

        {/* 12. Conditional rendering */}
        <section className={`${cardClass} mb-6`}>
          <Heading>12. Conditional Rendering</Heading>

          {students.length > 0 ? (
            <p className="rounded-lg bg-green-100 p-4 text-green-700">
              Students are available.
            </p>
          ) : (
            <p className="rounded-lg bg-red-100 p-4 text-red-700">
              No students available.
            </p>
          )}
        </section>

        {/* 13. Props vs state */}
        <section className={`${cardClass} mb-6`}>
          <Heading>13. Difference Between Props and State</Heading>
          <PropsStateChild name="Rahul" />
        </section>

        <footer className="py-6 text-center text-sm text-gray-500">
          React Beginner Practice | Built with React and Tailwind CSS
        </footer>
      </div>
    </main>
  );
}
