import {useState} from 'react'

function Update_State() {
    const [count,setcount]= useState(0);
    function increase(){
        setcount(count + 1);
    }
  return (
    <>
    <h1>{count}</h1>

    <button onClick={increase}
    className='bg-green-500'> Increment</button>
    </>
  );
}

export default Update_State