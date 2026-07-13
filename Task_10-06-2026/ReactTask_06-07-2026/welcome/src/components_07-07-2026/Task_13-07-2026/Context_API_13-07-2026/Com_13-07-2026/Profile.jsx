import {useContext} from 'react';
import UserContext from "../Context/UserContext";

function Profile() {
    const user  = useContext(UserContext);
  return (
    <>
    <h2> Welcome  {user}</h2>
    
    </>
  )
}
export default Profile