import React,{useContext} from 'react'
import { AuthContext } from './AuthContext'

function Dashboard() {
    const{isLoggedIn, login, logout} = useContext(AuthContext);
  return (
    <>
    {isLoggedIn ? (
        <div>
            <h2>Dashboard</h2>
            <button onClick={logout}
            className='bg-green-500'>logout</button>
        </div>
    ) : (
        <div>
            <h2> Please Login</h2>
            <button onClick={login}
            className='bg-orange-600'> Login</button>
        </div>
    )}
    </>
  );
}

export default Dashboard;