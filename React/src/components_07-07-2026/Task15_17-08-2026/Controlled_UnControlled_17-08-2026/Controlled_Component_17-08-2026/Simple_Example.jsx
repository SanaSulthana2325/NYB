import React, {useState} from 'react'

function Simple_Example() {
    const [name, setName] = useState("");
  return (
    <>
    <h2> Controlled Componenet</h2>
    
    <input 
    text="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter your name"
    className='border border-pink-4px'
    />

    <p> Your name is: {name}</p>
    
    </>
  );
}

export default Simple_Example