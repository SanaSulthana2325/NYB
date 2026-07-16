import { useReducer } from "react";

import { attendanceReducer,initialState } from "../reducer/attendanceReducer";

function Attendance(){

const [state,dispatch]=useReducer(attendanceReducer,initialState);

return(

<div>

<h2>Attendance</h2>

<h3>Present : {state.present}</h3>

<h3>Absent : {state.absent}</h3>

<button
onClick={()=>dispatch({type:"PRESENT"})}
>

Present

</button>

<button
onClick={()=>dispatch({type:"ABSENT"})}
>

Absent

</button>

</div>

);

}

export default Attendance;