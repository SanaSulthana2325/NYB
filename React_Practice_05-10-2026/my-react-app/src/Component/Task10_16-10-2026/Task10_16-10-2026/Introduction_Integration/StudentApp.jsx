import { useState } from "react";

export default function StudentApp() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent(e) {
    e.preventDefault();

    if (!name.trim()) return;

    setStudents([
      ...students,
      { id: Date.now(), name: name.trim() },
    ]);

    setName("");
  }

  return (
    <div>
      <h1>Student Management</h1>

      <form onSubmit={addStudent}>
        <label htmlFor="name">Student Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add Student</button>
      </form>

      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}




// Introduction to integration testing
// Integration testing checks whether multiple components or parts of an application work together correctly.
// A component test might check the form alone. An integration test can check the complete flow:
// 1. The user enters student details.
// 2. The user submits the form.
// 3. The application displays a success message.
// 4. The new student appears in the list.