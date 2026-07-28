import useFetch from "./useFetch";


function Fetch_App(){

 const {
   data,
   loading
 } = useFetch(
   "https://jsonplaceholder.typicode.com/users"
 );


 if(loading){
   return <h2>Loading...</h2>;
 }


 return(
   <>
    <h1>Users</h1>

    {
      data.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))
    }

   </>
 );

}

export default Fetch_App;