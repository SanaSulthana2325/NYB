import {useSelector,useDispatch} from "react-redux";

import {markPresent, markAbsent}
from "../Student_Attendance_14-07-2026/AttendanceSlice";


function StudentList(){


const students =
useSelector(
(state)=>state.attendance.students
);


const dispatch=useDispatch();



return(

<div>


<h2>Students</h2>


{
students.map(student=>(


<div key={student.id}>


<h3>
{student.name}
:
{student.status}
</h3>


<button

onClick={()=>
dispatch(markPresent(student.id))
}

>

Present

</button>



<button

onClick={()=>
dispatch(markAbsent(student.id))
}

>

Absent

</button>



</div>


))

}


</div>

);


}


export default StudentList;