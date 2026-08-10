import React from 'react'

function StudentCard(props) {
  return (
    <>
    <h3>{props.name}</h3>
    <p> Course: {props.course}</p>
    </>
  )
}

export default StudentCard;