import React from 'react';

function Example() {
  const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];

  return (
    <>
      <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default Example;