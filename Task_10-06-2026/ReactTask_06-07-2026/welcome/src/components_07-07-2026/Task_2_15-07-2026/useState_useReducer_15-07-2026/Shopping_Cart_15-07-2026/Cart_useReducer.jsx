import { useReducer } from "react";

const initialState={
quantity:1
};

function reducer(state,action){

switch(action.type){

case "increase":

return{
quantity:state.quantity+1
};

case "decrease":

return{
quantity:state.quantity-1
};

case "reset":

return initialState;

default:

return state;

}

}

function Cart_useReducer(){

const[cart,dispatch]=useReducer(reducer,initialState);

return(

<>

<h2>Quantity : {cart.quantity}</h2>

<button
onClick={()=>dispatch({type:"increase"})}
>
+
</button>

<button
onClick={()=>dispatch({type:"decrease"})}
>
-
</button>

<button
onClick={()=>dispatch({type:"reset"})}
>
Reset
</button>

</>

);

}

export default Cart_useReducer;