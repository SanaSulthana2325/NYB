import { useEffect, useState } from "react";
import { getStudents } from "../Mocking_API_Request/StudentApi";

export default function StudentStatus() {
  const [status, setStatus] = useState("loading");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents()
      .then((data) => {
        setStudents(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") return <p>Loading students...</p>;
  if (status === "error") return <p>Unable to load students.</p>;

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}





// Testing loading and error states
// An application should communicate what is happening while data is being fetched.
// Typical states:
// - Loading: The request is in progress.
// - Success: Data is available.
// - Error: The request failed.