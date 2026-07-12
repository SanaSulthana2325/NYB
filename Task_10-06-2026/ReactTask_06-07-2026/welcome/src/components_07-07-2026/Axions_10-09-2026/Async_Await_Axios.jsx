import { useEffect, useState } from "react";
import axios from "axios";

function Async_Await_Axios(){

const[users,setUsers]=useState([]);

useEffect(()=>{

const getUsers=async()=>{

try{

const response=await axios.get(

"https://jsonplaceholder.typicode.com/users"

);

setUsers(response.data);

}

catch(error){

console.log(error.message);

}

};

getUsers();

},[]);

return(

<>

{users.map((user)=>(

<h3 key={user.id}>{user.name}</h3>

))}

</>

);

}

export default Async_Await_Axios;