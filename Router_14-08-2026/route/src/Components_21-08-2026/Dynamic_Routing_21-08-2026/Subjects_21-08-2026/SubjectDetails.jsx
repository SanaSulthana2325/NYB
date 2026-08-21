import { useParams } from "react-router-dom";

function SubjectDetails() {
  const { studentId, subjectId } = useParams();

  return (
    <div>
      <h1>Subject Details</h1>

      <p>Student ID: {studentId}</p>

      <p>Subject ID: {subjectId}</p>
    </div>
  );
}

export default SubjectDetails;