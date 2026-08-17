import React,{useRef} from 'react'

function Input() {
    const nameRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
    };
  return (
    <>
    <form onSubmit={handleSubmit}>

        <input 
        type="text"
        ref={nameRef}
        placeholder='Enter Your Name'
        className='border border-green-500'/>
        <br/>
        <br/>

        <button type="submit"
        className='bg-pink-600'>Submit</button>
    </form>
    
    </>
  )
}

export default Input