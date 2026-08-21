import { useState } from "react";
import StudentCard from "./StudentCard";

function Students() {

  const [students, setStudents] = useState([
    {
      id: 101,
      name: "Minnu",
      course: "Human Resourse"
    },
    {
      id: 102,
      name: "Mira",
      course: "Marketing"
    },
    {
      id: 103,
      name: "Nashu",
      course: "Finance"
    }
  ]);

  const [showStudents, setShowStudents] = useState(true);

  return (
    <div>

      <h1>Students</h1>

      <button
        onClick={() => setShowStudents(!showStudents)}
      >
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {showStudents && (
        <div>

          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default Students;