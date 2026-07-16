import Navbar from "./Component_16-07-2026/Navbar";
import Dashboard from "./Component_16-07-2026/Dashboard";
import Footer from "./Component_16-07-2026/Footer";
import AttendanceButtons from "./Component_16-07-2026/AttendanceButtons";
import AttendanceReport from "./Component_16-07-2026/AttendanceReport";
import Marks from "./Component_16-07-2026/Marks";

import CollegeContext from "./Context_16-07-2026/CollageContext";

function App(){

return(

<CollegeContext.Provider

value="ABC Engineering College"

>

<Navbar/>

<Dashboard/>

<hr/>

<AttendanceButtons/>

<AttendanceReport/>

<hr/>

<Marks/>

<hr/>

<Footer/>

</CollegeContext.Provider>

);

}

export default App;