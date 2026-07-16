import { useSelector } from "react-redux";

function AttendanceReport(){

const present=useSelector(

state=>state.attendance.present

);

return(

<h2>

Present Students : {present}

</h2>

);

}

export default AttendanceReport;