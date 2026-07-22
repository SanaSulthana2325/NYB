import { useReducer } from "react";

const initialState = {
name:" Sulthana",
age:22,
city:"Hyderabad"
};

function reducer(state,action){

switch(action.type){

case "SET_NAME":

return{
...state,
name:action.payload
};

case "SET_CITY":

return{
...state,
city:action.payload
};

default:

return state;

}

}

function Multiple_useReducer(){

const[state,dispatch]=useReducer(reducer,initialState);

return(

<div>

<h2>Name : {state.name}</h2>

<h2>City : {state.city}</h2>

<button
onClick={()=>dispatch({
type:"SET_NAME",
payload:"Sana"
})}
>
Change Name
</button>

<button
onClick={()=>dispatch({
type:"SET_CITY",
payload:"Vijayawada"
})}
>
Change City
</button>

</div>

);

}

export default Multiple_useReducer;