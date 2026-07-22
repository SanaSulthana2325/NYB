import { useState } from "react";

function Registration(){

const [form,setForm]=useState({

name:"",
email:"",
password:"",
confirmPassword:""

});

const [errors,setErrors]=useState({});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};

const validate=()=>{

let error={};

if(form.name===""){

error.name="Enter Name";

}

if(!/\S+@\S+\.\S+/.test(form.email)){

error.email="Invalid Email";

}

if(form.password.length<8){

error.password="Minimum 8 Characters";

}

if(form.password!==form.confirmPassword){

error.confirmPassword="Passwords Don't Match";

}

setErrors(error);

return Object.keys(error).length===0;

};

const handleSubmit=(e)=>{

e.preventDefault();

if(validate()){

alert("Registration Successful");

}

};

return(

<form onSubmit={handleSubmit}>

<input
name="name"
placeholder="Name"
value={form.name}
onChange={handleChange}
className="border border-black p-2 rounded w-64"

/>

<p style={{color:"red"}}>{errors.name}</p>

<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
className="border border-black p-2 rounded w-64"

/>

<p style={{color:"red"}}>{errors.email}</p>

<input
type="password"
name="password"
placeholder="Password"
value={form.password}
onChange={handleChange}
className="border border-black p-2 rounded w-64"

/>

<p style={{color:"red"}}>{errors.password}</p>

<input
type="password"
name="confirmPassword"
placeholder="Confirm Password"
value={form.confirmPassword}
onChange={handleChange}
className="border border-black p-2 rounded w-64"

/>

<p style={{color:"red"}}
className="border border-black p-2 rounded w-64"
>{errors.confirmPasswor}

</p>

    
<button 
className="border border-black p-2 rounded w-64 bg-blue-300"
>

Register

</button>

</form>

);

}

export default Registration;