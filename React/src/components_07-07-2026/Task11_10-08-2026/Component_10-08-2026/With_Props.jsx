import React from 'react'

function With_Props(props) {
  return (
    <>
    <h3>Name: {props.name}</h3>
    <p>Age: {props.age}</p>
    </>
  )
}

export default With_Props;