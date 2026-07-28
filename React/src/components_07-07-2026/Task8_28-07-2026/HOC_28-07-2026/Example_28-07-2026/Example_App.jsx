import UserList from "./UserList";
import withLoading from "./withLoading";

const UserWithLoading = withLoading(UserList);


function Example_App(){

 return (
   <UserWithLoading loading={false}/>
 )

}

export default Example_App;