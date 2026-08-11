import React, {useState} from 'react'

function Login_Button() {
    const[loggedIn, setLoggedIn] = useState(false);
  return (
    <>
    <h2>{loggedIn ? "Welcome User" : "Please Login"}</h2>

    <button onClick={() => setLoggedIn(!loggedIn)}
        className='bg-green-300'>{loggedIn ? "Logout" : "Login"}</button>
    </>
  )
}

export default Login_Button