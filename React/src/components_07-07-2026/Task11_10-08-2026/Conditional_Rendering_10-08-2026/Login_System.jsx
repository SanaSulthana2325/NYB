import React, {useState} from 'react'

function Login_System() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    {isLoggedIn ? (
        <div>
            <h2>Welcome, Universe</h2>
            <button onClick={() => setIsLoggedIn(false)}
                className='bg-pink-500'> Logout</button>
                
        </div>
    ) : (
        <div>
            <h2>Please Login</h2>
            <button onClick={() => setIsLoggedIn(true)}
                className='bg-green-800'>Login</button>
        </div>
    
    )}
    </>
  );
}

export default Login_System