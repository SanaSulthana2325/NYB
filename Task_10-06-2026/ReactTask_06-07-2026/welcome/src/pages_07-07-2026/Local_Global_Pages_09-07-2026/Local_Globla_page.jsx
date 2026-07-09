import Profile from "../../components_07-07-2026/Local_Global_09-07-2026/Profile"
import UserProvider from "../../components_07-07-2026/Local_Global_09-07-2026/UserProvider"
import Navbar from "../../components_07-07-2026/Local_Global_09-07-2026/Navbar"
import Profile_Global from "../../components_07-07-2026/Local_Global_09-07-2026/Profile_Global"


function Local_Globla_page() {
  return (
    <>
    <h2>local state</h2>
    <Profile/>
    <hr/>

    
     <h2> Global State</h2>
    <UserProvider>

    <Navbar/>

    <Profile_Global/>
    </UserProvider>
    </>


  )
}

export default Local_Globla_page