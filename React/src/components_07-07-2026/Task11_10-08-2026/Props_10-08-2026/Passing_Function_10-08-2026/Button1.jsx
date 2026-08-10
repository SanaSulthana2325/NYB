import React from 'react'

function Button1(props) {
  return (
     <>
     <button onClick={props.handleClick} 
     className='bg-orange-500'>Click</button>
     
     </>
  )
}

export default Button1