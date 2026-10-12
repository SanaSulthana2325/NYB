import { Link, useParams } from "react-router-dom";

// Student data
const students = [
  { id: 1, name: "Rahul", course: "React" },
  { id: 2, name: "Priya", course: "JavaScript" },
  { id: 3, name: "Arun", course: "HTML and CSS" }
];

// Display all students
function StudentList() {
  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>

          <Link to={`/students/${student.id}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

// Display one student's details
function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return <h2>Student Not Found!</h2>;
  }

  return (
    <div>
      <h1>Student Details</h1>

      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>

      <Link to="/students">Back to Students</Link>
    </div>
  );
}

export{StudentList,StudentDetails};

