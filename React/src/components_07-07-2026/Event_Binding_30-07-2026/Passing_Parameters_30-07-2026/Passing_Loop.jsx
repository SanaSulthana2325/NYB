import React from "react";

function Passing_Loop() {
  const students = ["Tasan", "Ali", "Ayesha"];

  function selectStudent(name) {
    console.log("Selected: " + name);
  }

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500"
  ];

  return (
    <div className="flex gap-4">
      {students.map((student, index) => (
        <button
          key={student}
          onClick={() => selectStudent(student)}
          className={`${colors[index]} text-white px-4 py-4 rounded`}
        >
          {student}
        </button>
      ))}
    </div>
  );
}

export default Passing_Loop;