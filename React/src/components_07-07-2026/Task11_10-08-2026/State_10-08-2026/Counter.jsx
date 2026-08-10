import React, {useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}
        className='bg-green-300'>Increase</button>
        <br/>
        <br/>
        <button onClick={() => setCount (count - 1)}
            className='bg-pink-600'>Decrease</button>
    </>
  )
}

export default Counter;