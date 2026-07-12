import { useEffect, useState } from "react";
import axios from "axios";

function Error_Handling_Axios(){

const[users,setUsers]=useState([]);

const[error,setError]=useState("");

useEffect(()=>{

axios

.get("https://jsonplaceholder.typicode.com/invalid")

.then((response)=>{

setUsers(response.data);

})

.catch((error)=>{

setError(error.message);

});

},[]);

return(

<>

{error && <h2>{error}</h2>}

</>

);

}

export default Error_Handling_Axios;