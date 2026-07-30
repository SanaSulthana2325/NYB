import React from 'react'

function Logging() {
    function showMessage(){
        console.log("Welcome to world")
    }
  return (
    <>
    <button onClick={showMessage}
    className='bg-blue-700'> Show Message</button>
    </>
  )
}

export default Logging