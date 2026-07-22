import { useContext } from "react";
import { ThemeContext } from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Context_API/ThemeContext";

import Navbar4 from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Components2-15-07-2026/Navbar4";
import ProductList from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Components2-15-07-2026/ProductList";
import Cart2 from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Components2-15-07-2026/Cart2";
import Wishlist from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Components2-15-07-2026/WishList";
import Checkout from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Components2-15-07-2026/Checkout";
import Login1 from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Components2-15-07-2026/Login1";
import ThemeButton from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Components2-15-07-2026/ThemeButton";
import Search from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Components2-15-07-2026/Search";

function Context_Redux_Page(){
    const {theme}=useContext(ThemeContext);
    

return(

<div
style={{
backgroundColor: theme==="light" ? "white" : "black",
color: theme==="light" ? "black" : "white",
minHeight:"100vh",
padding:"20px"
}}
>


<h1>Shopping Cart Application</h1>

<ThemeButton/>

<Login1/>

<Navbar4/>

<Search/>

<ProductList/>

<Cart2/>

<Wishlist/>

<Checkout/>



</div>

);

}

export default Context_Redux_Page;