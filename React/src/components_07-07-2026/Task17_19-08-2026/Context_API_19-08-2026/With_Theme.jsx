import React,{createContext, useContext, useState}  from 'react'

const ThemeContext = createContext();

function With_Theme() {
    const[darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode}}>
        <Home/>
    </ThemeContext.Provider>
  );
}

function Home(){
    const{darkMode, setDarkMode} = useContext(ThemeContext);

    return(
        <div style={{backgroundColor: darkMode ? "pink": "blue", color: darkMode ? "blue" : "pink", padding: "30px"}}>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

        <button onClick={() => setDarkMode(!darkMode)}
            className='bg-yellow-500'> Change Theme</button>
        </div>
    )
}

export default With_Theme