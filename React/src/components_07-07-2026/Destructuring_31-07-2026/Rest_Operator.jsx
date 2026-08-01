import React from 'react'

function Rest_Operator() {
    const student = {
  name: 'Sana',
  age: 20,
  city: 'Warangal'
};

const { name, ...rest } = student;

console.log(name);
console.log(rest);
  return (
    <>
    <h2> REST OPERATOR</h2>
    </>
  )
}

export default Rest_Operator