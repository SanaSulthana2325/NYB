// Testing forms and validation
// Form testing checks whether users can enter data and whether invalid data is rejected.
// Example requirements:
// - Student name is required.
// - Email is required.
// - Invalid email formats must be rejected.
// - Valid details should produce a success message.



import { useState } from "react";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Enter a name and valid email.");
      return;
    }

    setMessage(`Student ${name} added successfully!`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label htmlFor="student-name">Student Name</label>
      <input
        id="student-name"
        className="block border p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="student-email">Email</label>
      <input
        id="student-email"
        className="block border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="rounded bg-blue-600 px-4 py-2 text-white">
        Submit
      </button>

      {message && <p role="status">{message}</p>}
    </form>
  );
}