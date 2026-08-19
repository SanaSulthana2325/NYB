import React, {useContext} from 'react'
import { UserContext} from "./Example_App"

function User() {
    const userName = useContext(UserContext);
  return (
    <>
    <h2>Hello {userName}</h2>
    
    </>
  )
}

export default User