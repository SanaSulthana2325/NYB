import {useState,useEffect} from 'react';

function Get_Request() {
    const [user,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(data=>{
            setUsers(data);
        });
    },[]);
  return (
    <>
    {user.map(user =>(
        <h3 key={user.id}>{user.name}</h3>
    ))}
    
    </>
  )
}

export default Get_Request