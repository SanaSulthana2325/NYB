import React,{useRef} from 'react'

function Input_Value_Without_useState() {
    const inputRef = useRef();
    const showValue = () =>{
        console.log(inputRef.current.value);
    };
  return (
    <div>
        <input ref={inputRef} 
        className='bg-orange-300'/>
        <button onClick={showValue}> Show Value</button>
    </div>
  )
}

export default Input_Value_Without_useState