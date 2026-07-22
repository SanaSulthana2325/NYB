import { useState} from 'react';

function NameInput() {
    const [name,setName] = useState("");
  return (
    <>
    <input 
    type="text"
    placeholder="Enter Name"
    value={name}
    onChange={(e) => setName(e.target.value)}/>

    <h2>Hello {name}</h2>
    
    </>
  )
}

export default NameInput;