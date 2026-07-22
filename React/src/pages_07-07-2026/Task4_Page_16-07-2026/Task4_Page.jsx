import { useState } from "react";


import AddressContext from "../../components_07-07-2026/Task4_16-07-2026/Context_API_16-07-2026/Delivery_Address/AddressContext";
import Navbar6 from "../../components_07-07-2026/Task4_16-07-2026/Context_API_16-07-2026/Delivery_Address/Navbar6";
import Payment from "../../components_07-07-2026/Task4_16-07-2026/Context_API_16-07-2026/Delivery_Address/Payment";
import Checkout from "../../components_07-07-2026/Task4_16-07-2026/Context_API_16-07-2026/Delivery_Address/Checkout";
import RestaurantContext from "../../components_07-07-2026/Task4_16-07-2026/Context_API_16-07-2026/Food_Delivery/RestaurantContext";
import Menu from "../../components_07-07-2026/Task4_16-07-2026/Context_API_16-07-2026/Food_Delivery/Menu";
import Cart from "../../components_07-07-2026/Task4_16-07-2026/Context_API_16-07-2026/Food_Delivery/Cart";
import MovieContext from "../../components_07-07-2026/Task4_16-07-2026/useContext_Hook/Movie_Booking_16-07-2026/MovieContext";
import Seat from "../../components_07-07-2026/Task4_16-07-2026/useContext_Hook/Movie_Booking_16-07-2026/Seat";
import Ticket from "../../components_07-07-2026/Task4_16-07-2026/useContext_Hook/Movie_Booking_16-07-2026/Ticket";
import Hospital_Queue from "../../components_07-07-2026/Task4_16-07-2026/useReducer_Hook/Hospital_Queue";
import Multiple_useReducer from "../../components_07-07-2026/Task4_16-07-2026/useReducer_Hook/Multiple_useReducer";
import AttendanceContext from "../../components_07-07-2026/Task4_16-07-2026/ContextApi_Redux_useReducer_16-07-2026/ContextApi_16-07-2026/AttendanceContext";
import Attendance from "../../components_07-07-2026/Task4_16-07-2026/ContextApi_Redux_useReducer_16-07-2026/ContextApi_16-07-2026/Attendance";
import Navbar8 from "../../components_07-07-2026/Task4_16-07-2026/ContextApi_Redux_useReducer_16-07-2026/ContextApi_16-07-2026/Navbar8";
import Student_useReducer from "../../components_07-07-2026/Task4_16-07-2026/ContextApi_Redux_useReducer_16-07-2026/useReducer_16-07-2026/Student_useReducer";
import Attendance1 from "../../components_07-07-2026/Task4_16-07-2026/ContextApi_Redux_useReducer_16-07-2026/Redux_Toolkit_16-07-2026/Attendance1";
import Navbar9 from "../../components_07-07-2026/Task4_16-07-2026/ContextApi_Redux_useReducer_16-07-2026/Redux_Toolkit_16-07-2026/Navbar9";

function Task4_Page() {

const address="Hyderabad, Telangana";

const restaurant="Paradise Biryani";

const movie={ title: "Maa Inti Bangaram", time:"7:00 PM"};

const [presentCount, setPresentCount] = useState(0);
const markPresent = () => {
    setPresentCount(presentCount + 1);
};

return(
    <>

<AddressContext.Provider value={address}>

<Navbar6/>
<Checkout/>
<Payment/>

</AddressContext.Provider>
<hr/>
<RestaurantContext.Provider value={restaurant}>
    <Menu/>
    <Cart/>
</RestaurantContext.Provider>
<hr/>
<h4>movie ticket booking</h4>
<MovieContext.Provider value={movie}>
    <Seat/>
    <Ticket/>
</MovieContext.Provider>
<hr/>
<h4>use Reducer</h4>

<Hospital_Queue/>
<hr/>
<h4> multiple useReducer</h4>

<Multiple_useReducer/>
<hr/>
<h4>contextAPI</h4>
<AttendanceContext.Provider value={{presentCount, markPresent}}>
    <Navbar8/>
    <Attendance/>
</AttendanceContext.Provider>
<br/>
<h4>use reducer example</h4>
<Student_useReducer/>
<br/>
<h4> using redux</h4>
<Attendance1/>

<Navbar9/>


</>

);

}

export default Task4_Page;