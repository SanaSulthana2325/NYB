import { useContext } from "react";
import ThemeContext from "./ThemeContext1";

function Home1() {

 const theme = useContext(ThemeContext);

 return <h2>Current Theme : {theme}</h2>;

}

export default Home1;