import { useReducer } from "react";

const initialState={
patients:0
};

function reducer(state,action){

switch(action.type){

case "ARRIVAL":

return{
patients:state.patients+1
};

case "DISCHARGE":

return{
patients:state.patients-1
};

default:

return state;

}

}

function Hospital_Queue(){

const[state,dispatch]=useReducer(reducer,initialState);

return(

<div>

<h2>Patients : {state.patients}</h2>

<button
onClick={()=>dispatch({type:"ARRIVAL"})}
>
New Patient
</button>

<button
onClick={()=>dispatch({type:"DISCHARGE"})}
>
Discharge
</button>

</div>

);

}

export default Hospital_Queue;