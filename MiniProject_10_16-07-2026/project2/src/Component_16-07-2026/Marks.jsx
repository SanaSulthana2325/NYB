import { useReducer } from "react";
import Result from "./Result";

const initialState={

marks:0

};

function reducer(state,action){

switch(action.type){

case "ADD":

return{

marks:state.marks+10

};

case "REMOVE":

return{

marks:state.marks-10

};

case "RESET":

return{

marks:0

};

default:

return state;

}

}

function Marks(){

const[state,dispatch]=useReducer(

reducer,

initialState

);

return(

<div>

<h2>

Marks : {state.marks}

</h2>

<button
onClick={()=>dispatch({type:"ADD"})}
>

Add Marks

</button>

<button
onClick={()=>dispatch({type:"REMOVE"})}
>

Remove Marks

</button>

<button
onClick={()=>dispatch({type:"RESET"})}
>

Reset

</button>

<Result marks={state.marks}/>

</div>

);

}

export default Marks;