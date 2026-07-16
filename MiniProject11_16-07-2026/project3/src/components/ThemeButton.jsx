import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemeButton(){

const {theme,toggleTheme}=useContext(ThemeContext);

return(

<div>

<h3>Theme : {theme}</h3>

<button onClick={toggleTheme}>
Toggle Theme
</button>

</div>

);

}

export default ThemeButton;