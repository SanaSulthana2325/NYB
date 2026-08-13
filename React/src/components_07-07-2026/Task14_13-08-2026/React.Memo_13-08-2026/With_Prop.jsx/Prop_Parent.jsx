import React,{useState} from 'react'
import Prop_Child from './Prop_Child'

function Prop_Parent() {
    const[count,setCount] = useState(0)
  return (
    <div>
        <h1> {count} </h1>
        <button onClick={()=> setCount(count + 1)}
            className='bg-yellow-600'>Increment</button>

            <Prop_Child name="Alia"/>
    </div>
  )
}

export default Prop_Parent