import React, {createContext} from 'react'
import Home from "./Home"

export const UserContext = createContext();
function Example_App() {
  return (
    <>
    <UserContext.Provider value = "Tasan">
        <Home/>
    </UserContext.Provider>
    </>
  )
}

export default Example_App