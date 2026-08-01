import React from 'react';

function Rendering_Objects() {
  const students = [
    { id: 101, name: 'Sara', age: 20 },
    { id: 102, name: 'Rahul', age: 21 },
    { id: 103, name: 'Ayesha', age: 23 },
  ];

  return (
    <>
      <h2>Students</h2>

      <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - Age: {student.age}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Rendering_Objects;