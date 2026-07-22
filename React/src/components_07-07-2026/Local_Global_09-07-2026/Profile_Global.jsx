import{ useContext } from 'react';
import UserContext from "./UserContext";

function Profile_Global() {
    const {user} = useContext(UserContext);
  return (
    <>
    <h2>{user.name}</h2>

    <h2>{user.city}</h2>
    </>
  )
}

export default Profile_Global