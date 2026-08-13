import React from 'react'

function Prop_Child(Prop) {
    console.log("Prop rendered");
  return (
    <>
    <h2> Hello {Prop.name}</h2>
    </>
  )
}

export default  React.memo(Prop_Child)