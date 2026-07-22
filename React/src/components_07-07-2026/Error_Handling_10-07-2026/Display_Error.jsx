import { useEffect, useState } from "react";

function Display_Error(){

const [users,setUsers]=useState([]);
const [error,setError]=useState("");

useEffect(()=>{

async function getUsers(){

try{

const response=await fetch("https://wrongurl.com/users");

const data=await response.json();

setUsers(data);

}

catch(error){

setError("Failed to fetch users.");

}

}

getUsers();

},[]);

return(

<div>

{
error && <h2>{error}</h2>
}

{
users.map(user=>(
<p key={user.id}>{user.name}</p>
))
}

</div>

);

}

export default Display_Error;