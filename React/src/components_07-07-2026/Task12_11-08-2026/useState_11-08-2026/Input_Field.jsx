import React,{useState} from 'react'

function Input_Field() {
    const[text, setText] = useState("");
  return (
    <>
    <input type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    className='bg-pink-600'/>

    <h2>yuot typed: {text}</h2>
    
    </>
  )
}

export default Input_Field