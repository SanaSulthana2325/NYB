import { useParams, Link } from "react-router-dom";

function StudentDetails() {

  const { id } = useParams();

  return (
    <div className="card">

      <h1>Student Details</h1>

      <h2>Student ID: {id}</h2>

      <p>
        You are viewing the student whose ID is {id}.
      </p>

      <Link to="/students">
        ← Back to Students
      </Link>

    </div>
  );
}

export default StudentDetails;