import React,{useState, useCallback} from 'react'
import UseCallback_Child from './UseCallback_Child';

function UseCallback_Parent() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(()=>{
        console.log("Button Clicked");
    },[]);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}
            className='bg-green-300'> Increment</button>

            <UseCallback_Child onClick={handleClick}/>
        </div>
  )
}

export default UseCallback_Parent