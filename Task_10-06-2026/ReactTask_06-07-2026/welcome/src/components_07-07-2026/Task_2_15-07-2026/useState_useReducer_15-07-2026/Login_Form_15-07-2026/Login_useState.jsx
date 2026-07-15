import {useState} from "react";

function Login_useState(){
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    return(
        <>
        <input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>

        <input type="password"  placehlder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <h3>{username}</h3>
        <h3>{password}</h3>
        </>
    )

}

export default Login_useState;