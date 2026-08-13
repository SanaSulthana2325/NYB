import React from 'react'

function Child() {
    console.log("child rendered")
  return (
    <>
    <h1> Child Component</h1>
    </>
  )
}

export default React.memo(Child)