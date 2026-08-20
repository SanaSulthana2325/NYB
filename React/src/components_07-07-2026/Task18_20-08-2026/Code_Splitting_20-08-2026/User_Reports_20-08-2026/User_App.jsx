import React,{useState} from 'react'

function User_App() {
    const[message, setMessage] = useState("");

    const handleClick = async ()=>{
        setMessage("Loading report...");

        const module = await import ("./Reports");

        module.showReport();

        setMessage("Report Generated successfully");
    };
  return (
    <div>
        <h1>My DashBoard</h1>
        <p>Welcome to dashboard</p>

        <button onClick={handleClick} className='bg-blue-500 text-white px-4 py-2 rounded'> Generated Report</button>

        {message && <p>{message}</p>}
        


    </div>
  )
}

export default User_App