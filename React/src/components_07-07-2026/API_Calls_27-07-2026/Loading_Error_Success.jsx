import { useEffect, useState } from "react";

function Loading_Error_Success(){

const [users,setUsers]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");

useEffect(()=>{

const getUsers=async()=>{

try{

const response=await fetch(
"https://jsonplaceholder.typicode.com/users"
);

if(!response.ok){

throw new Error("API Failed");

}

const data=await response.json();

setUsers(data);

}

catch(err){

setError(err.message);

}

finally{

setLoading(false);

}

};

getUsers();

},[]);

if(loading){

return <h1>Loading...</h1>

}

if(error){

return <h1>{error}</h1>

}

return(

<div>

{
users.map(user=>

<h2 key={user.id}>{user.name}</h2>

)
}

</div>

);

}


export default Loading_Error_Success;
