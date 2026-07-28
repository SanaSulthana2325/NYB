import useInput from "./useInput";


function Form_App(){

const username = useInput("");
const password = useInput("");


return(

<div className="
min-h-screen
flex
justify-center
items-center
bg-gray-100
">


<div className="
bg-white
shadow-lg
rounded-lg
p-6
w-96
">


<h1 className="
text-2xl
font-bold
mb-4
">
Login
</h1>


<input
type="text"
placeholder="Username"
value={username.value}
onChange={username.handleChange}
className="
border
p-2
w-full
mb-3
rounded
"
/>


<input
type="password"
placeholder="Password"
value={password.value}
onChange={password.handleChange}
className="
border
p-2
w-full
mb-3
rounded
"
/>


<button
className="
bg-blue-600
text-white
px-4
py-2
rounded
w-full
">
Login
</button>


</div>

</div>

)

}

export default Form_App;