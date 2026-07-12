import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Display() {

    const { theme } = useContext(ThemeContext);

    return (

        <div>

            <h2>Display Component</h2>

            <h3>Current Theme is {theme}</h3>

        </div>

    );

}

export default Display;