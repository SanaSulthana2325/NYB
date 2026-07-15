import { useReducer, useState } from "react";

const initialState=[];

function reducer(state,action){

switch(action.type){

case "ADD":

return[
...state,
action.payload
];

case "DELETE":

return state.filter((item,index)=>index!==action.payload);

case "CLEAR":

return[];

default:

return state;

}

}

function Todo_List1(){

const[text,setText]=useState("");

const[todos,dispatch]=useReducer(reducer,initialState);

return(

<>

<input

value={text}

onChange={(e)=>setText(e.target.value)}

/>

<button

onClick={()=>{

dispatch({

type:"ADD",

payload:text

});

setText("");

}}

>

Add

</button>

<button

onClick={()=>dispatch({

type:"CLEAR"

})}

>

Clear

</button>

<ul>

{

todos.map((item,index)=>

<li key={index}>

{item}

<button

onClick={()=>dispatch({

type:"DELETE",

payload:index

})}

>

Delete

</button>

</li>

)

}

</ul>

</>

);

}

export default Todo_List1;