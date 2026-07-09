import Navbar from "../../components_07-07-2026/Context_API_09-07-2026/Navbar"
import ThemeButton from "../../components_07-07-2026/Context_API_09-07-2026/ThemeButton"
import ThemeProvider from "../../components_07-07-2026/Context_API_09-07-2026/ThemeProvider"


function Context_page() {
  return (
    <>
    
    <ThemeProvider>
    <Navbar/>
    <ThemeButton/>
    </ThemeProvider>
    </>
  )
}

export default Context_page