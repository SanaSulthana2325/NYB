import axios from "axios";
import { useEffect,useState } from "react";


function Using_Axios(){

const [users,setUsers]=useState([]);

useEffect(()=>{

axios.get("https://jsonplaceholder.typicode.com/users")

.then(response=>{

setUsers(response.data);

});

},[]);

return(

<div>

{users.map(user=>

<p key={user.id}>{user.name}</p>

)}

</div>

)

}

export default Using_Axios;


// Axios automatically converts JSON