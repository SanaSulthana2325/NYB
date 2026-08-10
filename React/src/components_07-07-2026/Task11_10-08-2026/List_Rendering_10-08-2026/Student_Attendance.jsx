function Student_Attendance() {

  const students = [
    'Sana',
    'Rahul',
    'Priya',
    'Ali'
  ];

  return (
    <div>
      <h1>Student Attendance</h1>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default Student_Attendance;