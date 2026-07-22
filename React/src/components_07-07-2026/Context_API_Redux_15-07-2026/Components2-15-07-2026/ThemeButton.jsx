import { useContext } from "react";
import { ThemeContext } from "../Context_API/ThemeContext";

function ThemeButton() {

    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Change Theme
        </button>
    );
}

export default ThemeButton;