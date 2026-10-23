import { useEffect, useState } from "react";
import { getStudents } from "./StudentApi";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}