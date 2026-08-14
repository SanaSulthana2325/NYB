import { Link } from "react-router-dom";

export default function Students() {
  const students = [
    { id: 101, name: "Sana" },
    { id: 102, name: "Rahul" },
    { id: 103, name: "Aisha" }
  ];

  return (
    <div>
      <h1>Students</h1>

      <ul>
        {students.map(student => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}