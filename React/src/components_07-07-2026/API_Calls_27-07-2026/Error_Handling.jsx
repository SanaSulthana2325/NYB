import {useState, useEffect} from 'react'

function Error_Handling() {
    const [user,setUsers]=useState([]);
    const[error,setError]=useState("");
    useEffect(()=>{
        fetch("https://wrong-url.com")
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(()=>{
            setError("Failed to fetch data");
        });
    },[]);
    if(error){
        return<h2>{error}</h2>
    }
  return (
    <>
    {user.map(user=>(
        <p key={user.id}>{user.name}</p>
    ))}
    
    </>
  )
}

export default Error_Handling;