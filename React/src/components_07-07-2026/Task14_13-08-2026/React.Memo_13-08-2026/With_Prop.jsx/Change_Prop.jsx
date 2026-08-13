import React,{useState} from 'react'
import Prop_Child from './Prop_Child';

function Change_Prop() {
    const[name, setName] =useState("Alia");
  return (
    <div>
        <button onClick={()=> setName("Ayesha")}
            className='bg-red-600 px-2 py-2'>Change Name</button>

            <Prop_Child name={name}/>
    </div>
  )
}

export default Change_Prop