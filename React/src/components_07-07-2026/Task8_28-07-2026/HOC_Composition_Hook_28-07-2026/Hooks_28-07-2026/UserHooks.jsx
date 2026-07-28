import useFetch from "../Hooks_28-07-2026/useFetch";


function UserHooks(){

 const loading = useFetch();


 if(loading){

 return(
   <h2 className="text-xl text-red-500">
      Loading...
   </h2>
 )

 }


 return(

 <div className="bg-purple-500 text-white p-5 rounded">

    <h2>User Name: John</h2>

    <p>Email: john@gmail.com</p>

 </div>

 )

}

export default UserHooks;