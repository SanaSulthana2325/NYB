import { memo } from "react";

function StudentCard({ student }) {
  console.log("StudentCard rendered:", student.name);

  return (
    <div className="student-card">

      <h3>{student.name}</h3>

      <p>ID: {student.id}</p>

      <p>Course: {student.course}</p>

      <a href={`/students/${student.id}`}>
        View Details
      </a>

    </div>
  );
}

export default memo(StudentCard);