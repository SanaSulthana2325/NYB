import React,{createContext, useContext, useState} from 'react'

const AuthContext = createContext();

function Authentication() {
    const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <Navbar/>
        <Dashboard/>
    </AuthContext.Provider>
  );
}

function Navbar(){
    const{isLoggedIn} = useContext(AuthContext);

    return(
        <h2>{isLoggedIn ? "Welcome User" : "please Login"}</h2>
    );
}

function Dashboard(){
    const{isLoggedIn, setIsLoggedIn}= useContext(AuthContext);

    return(
        <div>
        {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)} className='bg-green-500 px-2 py-2 mr-2'>Logout</button>
        ) : (
            <button onClick={() => setIsLoggedIn(true)} className='bg-orange-500 px-2 py-2 mr-2'>Login</button>
        )
        }
        </div>
    )
}

export default Authentication