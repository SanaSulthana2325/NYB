import React from 'react';

function Nested_List() {
  const students = [
    {
      id: 1,
      name: 'Fathima',
      subjects: ['Math', 'Science']
    },
    {
      id: 2,
      name: 'Ayesha',
      subjects: ['English', 'History']
    }
  ];

  return (
    <div>
      <h2>Students and Subjects</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>

          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {student.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Nested_List;