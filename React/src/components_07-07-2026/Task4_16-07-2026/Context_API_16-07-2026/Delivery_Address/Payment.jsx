import { useContext } from "react";
import AddressContext from "./AddressContext";

function Payment(){

const address=useContext(AddressContext);

return(

<h2>Order will be delivered to {address}</h2>

);

}

export default Payment;