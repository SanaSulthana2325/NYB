import React,{createContext, useContext} from 'react'

const UserContext = createContext();

function With_Object() {
    const user = {
        name: "Lulu",
        age:22,
        place: "Karimnagar"
    };
  return (

    <UserContext.Provider value={user}>
        <Profile/>
    </UserContext.Provider>
    );
    }
    
function Profile(){
    const user= useContext(UserContext);

    return(
        <>
        <h2> User Profile</h2>
        <p> Name: {user.name}</p>
        <p>Age:{user.age}</p>
        <p>Place:{user.place}</p>
        
        </>
    );
}

export default With_Object