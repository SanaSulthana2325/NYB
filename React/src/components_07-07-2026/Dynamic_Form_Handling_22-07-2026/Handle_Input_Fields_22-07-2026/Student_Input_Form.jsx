import { useState } from "react";

function Student_Input_Form() {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    college: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
        className="border border-black p-2 rounded w-64"

      />

      <br /><br />

      <input
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
        className="border border-black p-2 rounded w-64"

      />

      <br /><br />

      <input
        name="college"
        placeholder="College"
        value={student.college}
        onChange={handleChange}
        className="border border-black p-2 rounded w-64"

      />

      <hr />

      <h3>{student.name}</h3>
      <h3>{student.course}</h3>
      <h3>{student.college}</h3>
    </div>
  );
}

export default Student_Input_Form;