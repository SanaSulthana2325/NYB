import React from 'react'

function Skip_Values() {
    const Colors = ['Pink', 'Red', 'Green','blue','purple'];

const [first, , third] = Colors;

console.log(first);
console.log(third);

  return (
    <>
    <h2>Array Destructuring</h2>
    
    </>
  )
}

export default Skip_Values