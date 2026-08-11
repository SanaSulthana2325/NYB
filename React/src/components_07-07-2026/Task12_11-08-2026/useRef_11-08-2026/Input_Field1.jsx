import React,{useRef} from 'react'

function Input_Field1() {
    const inputRef = useRef(null);

    const handleFocus = () =>{
        inputRef.current,focus();
    };
return (
    <div>
        <input ref={inputRef} placeholder="Enter Name"
        className='bg-red-400'/>
        <br/>
        <br/>
        <button onClick={handleFocus}
        className='bg-yellow-800'>Focus Input</button>
    </div>
  );
}

export default Input_Field1