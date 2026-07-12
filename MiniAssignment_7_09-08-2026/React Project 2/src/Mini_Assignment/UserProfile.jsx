import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {

    const user = useContext(UserContext);

    return (

        <div>

            <h2>User Information</h2>

            <p>Name : {user.name}</p>

            <p>Course : {user.course}</p>

            <p>Company : {user.company}</p>

        </div>

    );

}

export default UserProfile;