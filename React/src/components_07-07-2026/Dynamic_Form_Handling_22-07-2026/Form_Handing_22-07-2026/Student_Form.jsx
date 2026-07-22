import { useState } from "react";

function Student_Form() {

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");

  const addStudent = () => {

    setStudents([...students, name]);

    setName("");
  };

  return (

    <div>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
        className="border border-black p-2 rounded w-64"

      />

      <button onClick={addStudent}
        className="border border-black p-2 rounded w-64"
      >
        Add Student
      </button>

      <hr />

      {students.map((student, index) => (

        <h3 key={index}>{student}</h3>

      ))}

    </div>

  );
}

export default Student_Form;