import { Link } from "react-router-dom";

function Subject() {
  return (
    <div>
      <h1>Students ID - Borrowed Books</h1>

      <Link to="/student/101/subject/1">
        Book 1
      </Link>

      <br />

      <Link to="/student/102/subject/2">
        Book 2
      </Link>
    </div>
  );
}

export default Subject;