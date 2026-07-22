import { useContext } from "react";
import AddressContext from "./AddressContext";

function Navbar6(){

const address=useContext(AddressContext);

return(

<h2>Deliver To : {address}</h2>

);

}

export default Navbar6;