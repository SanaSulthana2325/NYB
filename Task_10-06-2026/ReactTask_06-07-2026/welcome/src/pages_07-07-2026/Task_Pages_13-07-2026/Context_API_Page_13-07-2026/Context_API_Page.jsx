import { useState} from "react";
import UserContext from "../../../components_07-07-2026/Task_13-07-2026/Context_API_13-07-2026/Context/UserContext";
import Home from "../../../components_07-07-2026/Task_13-07-2026/Context_API_13-07-2026/Com_13-07-2026/Home";
import CounterContext from "../../../components_07-07-2026/Task_13-07-2026/Counter_API_13-07-2026/CounterContext";
import Counter from "../../../components_07-07-2026/Task_13-07-2026/Counter_API_13-07-2026/Counter";
import CartContext from "../../../components_07-07-2026/Task_13-07-2026/Shopping_Cart_13-07-2026/CartContext";
import Cart from "../../../components_07-07-2026/Task_13-07-2026/Shopping_Cart_13-07-2026/Cart";
import ThemeContext from "../../../components_07-07-2026/Task_13-07-2026/Theme_Management_13-07-2026/ThemeContext";
import Header from "../../../components_07-07-2026/Task_13-07-2026/Theme_Management_13-07-2026/Header";
import ThemeButton from "../../../components_07-07-2026/Task_13-07-2026/Theme_Management_13-07-2026/ThemeButton";
import Home_Theme from './../../../components_07-07-2026/Task_13-07-2026/Theme_Management_13-07-2026/Home_Theme';
import UserContext_AU from '../../../components_07-07-2026/Task_13-07-2026/Authentication_13-07-2026/UserContext_AU';
import Navbar from './../../../components_07-07-2026/Task_13-07-2026/Authentication_13-07-2026/Navbar';
import Dashboard from './../../../components_07-07-2026/Task_13-07-2026/Authentication_13-07-2026/Dashboard';
import Login from './../../../components_07-07-2026/Task_13-07-2026/Authentication_13-07-2026/Login';
import LanguageContext from "../../../components_07-07-2026/Task_13-07-2026/Language_Selector_13-07-2026/LanguageContext";
import LanguageSelector from "../../../components_07-07-2026/Task_13-07-2026/Language_Selector_13-07-2026/LanguageSelector";
import Header2 from "../../../components_07-07-2026/Task_13-07-2026/Language_Selector_13-07-2026/Header2";
import Home2 from "../../../components_07-07-2026/Task_13-07-2026/Language_Selector_13-07-2026/Home2";
import About2 from "../../../components_07-07-2026/Task_13-07-2026/Language_Selector_13-07-2026/About2";
import Contact2 from "../../../components_07-07-2026/Task_13-07-2026/Language_Selector_13-07-2026/Contact2";












function Context_ApI_page() {
    const user = "Nashu";
    const [count, setCount] = useState(0);
    const cart = ["laptop", "Mouse", "Keyboard"];

    const [theme,setTheme] = useState("Light");

    const[user1,setUser] = useState(null);

    const [language,setLanguage] = useState("English");
  return (
    <>
    <UserContext.Provider value = {user}>
        <Home/>
    </UserContext.Provider>

    <hr/>
    <CounterContext.Provider value = {{count, setCount}}>
        <Counter/>
    </CounterContext.Provider>

    <hr/>
    <CartContext.Provider value={cart}> <Cart/></CartContext.Provider>

    <hr/>
    <h2>Theme management</h2>

    <ThemeContext.Provider value={{theme,setTheme}}>
        <Header/>
        <Home_Theme/>
        <ThemeButton/>
    </ThemeContext.Provider>

    <hr/>
    <h2> Authentication Context API</h2>
    <UserContext_AU.Provider value={{user1,setUser}}>
        <Navbar/>
        <Dashboard/>
        <Login/>
    </UserContext_AU.Provider>

    <hr/>
    <h2>Language Selectors</h2>
    <LanguageContext.Provider value ={{language, setLanguage}}>
        <LanguageSelector/>
        <Header2/>
        <Home2/>
        <About2/>
        <Contact2/>

    </LanguageContext.Provider>
    </>
    

  )
}

export default Context_ApI_page