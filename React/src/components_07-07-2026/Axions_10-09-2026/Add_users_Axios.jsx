import { useState } from "react";
import axios from "axios";

function Add_users_Axios(){

const[name,setName]=useState("");

const addUser=()=>{

axios.post(

"https://jsonplaceholder.typicode.com/users",

{

name:name

}

)

.then((response)=>{

console.log(response.data);

});

};

return(

<>

<input

type="text"

placeholder="Enter Name"

onChange={(e)=>setName(e.target.value)}

/>

<button onClick={addUser}>
Add User
</button>

</>

);

}

export default Add_users_Axios;