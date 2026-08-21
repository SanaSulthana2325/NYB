import { Link, Outlet, useParams } from "react-router-dom";

function StudentProfile() {
  const { studentId } = useParams();

  return (
    <div>
      <h1>Student Profile</h1>

      <h2>Student ID: {studentId}</h2>

      <p>Department: Computer Science</p>

      <p>Year: Final Year</p>

      <nav>
        <Link to="marks">Marks</Link>
        {" | "}
        <Link to="attendance">Attendance</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default StudentProfile;