import User from "./User";
import withLoading from "./withLoading";

const UserWithLoading=withLoading(User);

function Loading_HOC_App(){

return(

<UserWithLoading loading={true}/>

)

}

export default Loading_HOC_App;