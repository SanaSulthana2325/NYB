import { useEffect, useState } from "react";


function Async_Await(){

const [users,setUsers]=useState([]);

useEffect(()=>{

const getUsers=async()=>{

const response=await fetch("https://jsonplaceholder.typicode.com/users");

const data=await response.json();

setUsers(data);

}

getUsers();

},[]);

return(

<div>

{users.map(user=>(
<h2 key={user.id}>{user.name}</h2>
))}

</div>

)

}

export default Async_Await;