import React from 'react'

function Default_Values() {
    const user = {
  name: 'Aisha'
};

const { name, age = 18 } = user;

console.log(name);
console.log(age);
  return (
    <>
    <h2> Default Values</h2>
    </>
  )
}

export default Default_Values