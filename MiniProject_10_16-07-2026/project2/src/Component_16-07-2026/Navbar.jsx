import { useContext } from "react";
import CollegeContext from "../Context_16-07-2026/CollageContext";

function Navbar(){

const college=useContext(CollegeContext);

return(

<h2>

College : {college}

</h2>

);

}

export default Navbar;