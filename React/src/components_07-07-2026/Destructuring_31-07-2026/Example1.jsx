import React from 'react';

function Example1() {
  const person = {
    name: 'Sana',
    age: 30,
  };

  const { name, age } = person;

  console.log(name);
  console.log(age);

  return (
    <>
      <h2>Check the browser console</h2>
    </>
  );
}

export default Example1;