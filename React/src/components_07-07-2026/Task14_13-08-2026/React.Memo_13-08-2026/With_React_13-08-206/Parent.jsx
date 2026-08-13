import React,{useState} from 'react'
import Child from './Child';

function Parent() {
    const[count,setCount] = useState(0);
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}
            className='bg-pink-600 px-4 py-2 m-2'>Increment</button>
        
        <button onClick={()=> setCount(count - 1)}
            className='bg-green-500 px-4 py-2 m-2'>Decrement</button>

            <Child/>
    </div>
  )
}

export default Parent