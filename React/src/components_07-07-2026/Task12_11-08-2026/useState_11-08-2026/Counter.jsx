import React,{useState} from 'react'

function Counter() {
    const[count, setCount] = useState(0);
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=> setCount(count + 1)}
        className='bg-pink-500'>Increment</button>
        <br/>
        <br/>

    <button onClick={()=>setCount(count - 1)}
        className='bg-green-500'>Decrement</button>
        <br/>
        <br/>

    <button onClick={()=> setCount(0)}
        className='bg-orange-500'>Reset</button>
    </>
  )
}

export default Counter