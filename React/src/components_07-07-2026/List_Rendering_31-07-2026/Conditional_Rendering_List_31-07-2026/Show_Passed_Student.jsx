function Show_Passed_Student() {

  const students = [
    { id: 1, name: 'Sana', passed: true },
    { id: 2, name: 'Rahul', passed: false },
    { id: 3, name: 'Aisha', passed: true }
  ];

  return (
    <div>
      <h2>Passed Students</h2>

      {students.map((student) =>
        student.passed ? (
          <p key={student.id}>{student.name}</p>
        ) : null
      )}
    </div>
  );
}

export default Show_Passed_Student