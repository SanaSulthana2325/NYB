import { useReducer } from "react";

const initialState = {

present:0,
absent:0

};

function reducer(state,action){

switch(action.type){

case "present":

return{

...state,
present:state.present+1

};

case "absent":

return{

...state,
absent:state.absent+1

};

case "reset":

return initialState;

default:

return state;

}

}

function Student_attendance1(){

const[attendance,dispatch]=useReducer(reducer,initialState);

return(

<>

<h2>Present : {attendance.present}</h2>

<h2>Absent : {attendance.absent}</h2>

<button
onClick={()=>dispatch({type:"present"})}
>
Present
</button>

<button
onClick={()=>dispatch({type:"absent"})}
>
Absent
</button>

<button
onClick={()=>dispatch({type:"reset"})}
>
Reset
</button>

</>

);

}

export default Student_attendance1;