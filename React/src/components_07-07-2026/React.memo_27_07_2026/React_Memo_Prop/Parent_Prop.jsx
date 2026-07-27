import {useState} from 'react'
import Child_Prop from './Child_Prop';

function Parent_Prop() {
    const[count,setCount]=useState(0);

  return (
    <>
    <button onClick={() => setCount(count +1)}
        className="bg-green-300 border border-2px">
        
        Count{count}
    </button>
    <Child_Prop name="Jhon"/>
    
    </>
  );
}

export default Parent_Prop