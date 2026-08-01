import React from 'react';

function Function_Parameters({ name, age }) {
  console.log(name);
  console.log(age);

  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </>
  );
}

export default Function_Parameters;