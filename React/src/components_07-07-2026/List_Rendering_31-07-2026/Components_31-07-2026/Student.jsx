import React from 'react'

function Student(props) {
  return (
    <>
    <h3>{props.name}</h3>
    <p>Age: {props.age}</p>
    </>
  )
}

export default Student;