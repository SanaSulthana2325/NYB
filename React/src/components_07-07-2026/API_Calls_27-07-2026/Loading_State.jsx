import { useEffect, useState } from "react";

function Loading_State(){

const [users,setUsers]=useState([]);

const [loading,setLoading]=useState(true);

useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/users")

.then(res=>res.json())

.then(data=>{

setUsers(data);

setLoading(true);

});

},[]);

if(loading){

return <h1>Loading...</h1>

}

return(

<div>

{users.map(user=>(

<p key={user.id}>{user.name}</p>

))}

</div>

)

}

export default Loading_State;



// loading = true

// ↓

// Show Loading...

// ↓

// API completed

// ↓

// loading = false

// ↓

// Show Users