import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeComponent() {
    const{theme, setTheme} = useContext(ThemeContext)
  return (
    <>
    <h2>Current Theme: {theme}</h2>
    <button onClick={() => setTheme(theme === "light" ?"dark" : "light")}
        className='bg-pink-500'> Toggle Theme</button>

    </>
  )
}

export default ThemeComponent