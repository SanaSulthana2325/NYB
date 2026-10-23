// Testing conditional rendering
// Conditional rendering means displaying different content depending on a condition.
// For example, a student with no submitted assignments should see “No assignments yet.” A student with assignments should see their assignment list.

export default function Assignments({ assignments = [] }) {
  if (assignments.length === 0) {
    return <p>No assignments yet.</p>;
  }

  return (
    <ul>
      {assignments.map((assignment) => (
        <li key={assignment.id}>{assignment.title}</li>
      ))}
    </ul>
  );
}