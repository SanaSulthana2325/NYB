import React,{useReducer} from 'react'

const initialState = {
    name:"",
    age:0,
    place:""
};

function reducer(state, action){
    switch(action.type){
        case "setName":
            return{...state,name: action.payload};

            case "setAge":
                return{
                   ...state,age:action.payload
                };
                case "setPlace":
                    return{
                        ...state,
                        place:action.payload
                    };
                    default:
                        return state;
    }
}
function Object_Reducer() {
    const[user,dispatch] = useReducer( reducer, initialState);
  return (
    <div>
        <h2>User Details</h2>
        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Place:{user.place}</p>

        <button onClick={()=>dispatch({type:"setName", payload:"Nashu"})} className='bg-yellow-500 px-2 py-2 mr-2'>Set Name</button>

        <button onClick={()=> dispatch({type:"setAge",payload:22})} className='bg-blue-500 px-2 py-2 mr-2'>Set Age</button>
    </div>
  );
}

export default Object_Reducer