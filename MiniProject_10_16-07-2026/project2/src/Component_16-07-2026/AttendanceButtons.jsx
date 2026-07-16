import { useDispatch } from "react-redux";
import { markPresent,resetAttendance } from "../Redux_16-07-2026/AttendanceSlice";

function AttendanceButtons(){

const dispatch=useDispatch();

return(

<div>

<button
onClick={()=>dispatch(markPresent())}
>

Student Present

</button>

<button
onClick={()=>dispatch(resetAttendance())}
>

Reset

</button>

</div>

);

}

export default AttendanceButtons;