import { useContext } from "react";
import CollegeContext from "../Context_16-07-2026/CollageContext";

function Dashboard(){

const college=useContext(CollegeContext);

return(

<h2>

Welcome to {college}

</h2>

);

}

export default Dashboard;