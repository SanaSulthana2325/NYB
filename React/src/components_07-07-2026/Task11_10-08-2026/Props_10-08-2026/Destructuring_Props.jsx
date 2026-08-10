import React from 'react'

function Destructuring_Props({name, age, course}) {
  return (
    <>
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Course: {course}</p>
    </>
  )
}

export default Destructuring_Props