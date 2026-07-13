import {useContext} from 'react'
import ThemeContext from "../Theme_Management_13-07-2026/ThemeContext"

function ThemeButton() {
    const {theme, setTheme} = useContext(ThemeContext);
    const changeTheme = () =>{
        setTheme(theme === "Light" ? "Dark" : "Light");
    }
  return (
    <>
    <button onDoubleClick={changeTheme}> Changr Theme</button>
    </>
  )
}

export default ThemeButton