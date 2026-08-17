import React,{useState} from 'react'

function Password_Validation() {
    const[password, setPassword] = useState("");
    const[error,setError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(password.length < 6){
            setError("Password should be at least 6 characters")
            return;
        }
        setError("");
        console.log("Password Accepted ")
    };
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="EnterPassword"
        className='border border-yellow-600'/>

        <br/>
        <br/>
        {error && <p>
            {error}</p>}
            
            <button type="submit"
            className='bg-pink-600 px-2 py-2'>Register</button>
            </form>
      )
}

export default Password_Validation