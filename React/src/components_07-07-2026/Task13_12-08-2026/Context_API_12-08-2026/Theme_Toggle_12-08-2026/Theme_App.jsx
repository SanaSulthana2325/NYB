import React,{useState} from 'react'
import { ThemeContext } from './ThemeContext';
import ThemeComponent from './ThemeComponent';

function Theme_App() {
    const [theme,setTheme] = useState("light");
  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme}}>
        <ThemeComponent/>
    </ThemeContext.Provider>
    
    </>
  )
}

export default Theme_App