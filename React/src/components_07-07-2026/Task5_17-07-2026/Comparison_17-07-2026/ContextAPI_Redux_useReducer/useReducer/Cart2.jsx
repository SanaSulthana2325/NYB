import { useReducer } from "react";

const reducer = (state, action) => {

 switch(action.type){

   case "add":
     return { quantity: state.quantity + 1 };

   case "remove":
     return { quantity: state.quantity - 1 };

   default:
     return state;

 }

};

function Cart2(){

 const [state, dispatch] = useReducer(reducer,{quantity:0});

 return(

 <>
   <h2>Items : {state.quantity}</h2>

   <button onClick={()=>dispatch({type:"add"})}>
      Add
   </button>

   <button onClick={()=>dispatch({type:"remove"})}>
      Remove
   </button>

 </>

 );

}

export default Cart2;