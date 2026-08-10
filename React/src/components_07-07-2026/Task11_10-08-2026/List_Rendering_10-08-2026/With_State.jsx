import React, { useState } from 'react';

function With_State() {
  const [students, setStudents] = useState([
    'Sana',
    'Rahul'
  ]);

  const addStudent = () => {
    setStudents([...students, 'Priya']);
  };

  return (
    <div>
      <h1>Students</h1>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <button onClick={addStudent}
      className='bg-blue-400'>
        Add Student
      </button>
    </div>
  );
}

export default With_State;