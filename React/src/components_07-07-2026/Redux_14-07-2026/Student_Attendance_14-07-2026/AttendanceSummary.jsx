import {useSelector} from "react-redux";


function AttendanceSummary(){


const students = useSelector(state=>state.attendance.students);



const present = students.filter(
student=>student.status==="Present"
).length;



const absent = students.filter(
student=>student.status==="Absent"
).length;



return(

<div>


<h2>
Attendance Summary
</h2>


<h3>
Total Students :
{students.length}
</h3>


<h3>
Present :
{present}
</h3>


<h3>
Absent :
{absent}
</h3>


</div>

);


}


export default AttendanceSummary;