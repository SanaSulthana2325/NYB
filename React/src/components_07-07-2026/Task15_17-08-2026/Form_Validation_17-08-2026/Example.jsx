import React,{useState} from 'react'

function Example() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");

    const [error,setError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (name === ""){
            setError("Name is required");
            return;
        }
        if (email ===""){
            setError("Email is Required")
            return;
        }
        setError("");
        console.log("Form submitted")
    };
  return (
    <form onSubmit={handleSubmit}>
        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        className='border border-blue-600'/>

        <br/>
        <br/>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        className='border border-blue-600'/>

        <br/>
        <br/>

        {error && <p className='text-red-500'>{error}</p>}

        <button type="submit"
        className='bg-pink-600 px-2 py-2'>Submit</button>
        </form>

  );
}

export default Example