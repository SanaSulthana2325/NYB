import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    students:[
        {
            id:101,
            name:"Tasan",
            status:"Not Marked"
        },
        {
            id:102,
            name:"minnu",
            status:"Not Marked"


        },
        {
        id:103,
        name:"Lulu",
        status:"Not Marked"
        },
        {
        id:104,
        name:"Ayesha",
        status:"Not Marked"
        },
        {
        id:105,
        name:"Aly",
        status:"Not Marked"
        },
        {
        id:106,
        name:"Jannu",
        status:"Not Marked"
        }

    ]
};
const AttendanceSlice = createSlice({
    name:"attendance",
    initialState,
    reducers:{
        markPresent:(state,action)=>{
            const student = state.students.find(
                student=>student.id===action.payload
            );
            if(student){
                student.status="Present";
            }
        },
        markAbsent:(state,action)=>{
            const student = state.students.find(
                student=>student.id===action.payload
            );
            if(student){
                student.status="Absent";
            }
        },
        resetAttendance:(status)=>{
            state.students.forEach(
                student=>{
                    student.status="Not Marked";
                }
            );
        }
    }
});

export const{ markPresent, markAbsent, resetAttendance}=AttendanceSlice.actions;

export default AttendanceSlice.reducer;