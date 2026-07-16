import { useContext } from "react";
import CollegeContext from "../Context_16-07-2026/CollageContext";

function Footer(){

const college=useContext(CollegeContext);

return(

<h3>

© {college}

</h3>

);

}

export default Footer;