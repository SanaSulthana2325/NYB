import React from 'react'
import Profile from './Profile'
import {UserContext} from "./UserContext";

function Profile_App() {
  return (
    <>
    <UserContext.Provider value="Fathima">
        <Profile/>
    </UserContext.Provider>
    </>
  )
}

export default Profile_App