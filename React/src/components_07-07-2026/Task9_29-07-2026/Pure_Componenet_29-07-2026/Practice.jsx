//pure Component in function component so for this we use React.Memo()

import React from 'react'

const Practice = React.memo (({name}) => {
    console.log("User Pure Function Rendered")

  return (
    <>
    <h2> Welcome to  pure Component.{name}</h2>

    
    </>
  )
})

export default Practice
