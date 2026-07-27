import React from 'react'

function Child_Prop({name}) {
    console.log("Child Rendered");
  return (
    <>
    <h2>{name}</h2>
    </>
  )
}

export default React.memo(Child_Prop);