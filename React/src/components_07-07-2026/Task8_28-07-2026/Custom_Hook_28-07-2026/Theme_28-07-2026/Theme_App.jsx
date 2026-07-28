import useTheme from "./useTheme";


function Theme_App(){

const {
 dark,
 toggleTheme
}=useTheme();


return(

<div
className={`
min-h-screen
flex
justify-center
items-center
${dark ? "bg-black text-white" : "bg-white text-red"}
`}
>


<div>

<h1 className="
text-3xl
font-bold
mb-4
">
Theme Example
</h1>


<button
onClick={toggleTheme}
className="
bg-purple-600
text-white
px-4
py-2
rounded
">

Change Theme

</button>


</div>


</div>

)

}

export default Theme_App;