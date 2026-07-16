import { useContext } from "react";
import AddressContext from "./AddressContext";

function Checkout(){

const address=useContext(AddressContext);

return(

<h2>Shipping Address : {address}</h2>

);

}

export default Checkout;