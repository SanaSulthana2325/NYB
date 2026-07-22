import {useContext} from 'react'
import ThemeContext from "./ThemeContext"

function Home_Theme() {
    const { theme} = useContext(ThemeContext);
  return (
    <>
    <h3> Home Page Theme: {theme}</h3>
    </>
  )
}

export default Home_Theme;