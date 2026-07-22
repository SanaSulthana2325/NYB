import {useContext} from 'react'
import ThemeContext from "../Theme_Management_13-07-2026/ThemeContext";

function Header() {
    const {theme} = useContext(ThemeContext);
  return (
    <>
    <h2> Current Theme : {theme}</h2>
    </>
  )
}

export default Header;