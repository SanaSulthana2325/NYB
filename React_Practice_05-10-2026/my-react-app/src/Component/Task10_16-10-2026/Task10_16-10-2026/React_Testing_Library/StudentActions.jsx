import { useState } from "react";

function StudentActions() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    setMessage("Student added successfully!");
  }

  function handleDelete() {
    if (count > 0) {
      setCount(count - 1);
      setMessage("Student deleted successfully!");
    } else {
      setMessage("No students to delete!");
    }
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Student Management</h2>

      <p>Total Students: {count}</p>

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Add Student
      </button>

      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Student
      </button>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default StudentActions;



// Query	             Meaning

// getByRole()	      Find an element by its accessible role

// getByLabelText()	    Find an input by its label

// getByText()	        Find visible text

// queryByText()	  Check for an element that may not exist

// findByText()	       Wait for an element to appear asynchronously