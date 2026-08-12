import React,{useReducer} from 'react'

const initialState = {
    balance: 1000
};
function reducer(state, action){
    switch (action.type){
        case "deposite":
            return{
                balance: state.balance + action.amount
            };

            case "withdraw":
                return{
                    balance:state.balance - action.amount

                };

                case "reset":
                    return initialState;

                    default:
                        return state;
    }
}

function Bank() {
    const[state, dispatch] = useReducer(reducer, initialState);
    
  return (
    <>
    <h2> Balance:₹{state.balance}</h2>
    <button onClick={()=> dispatch({type:"deposite", amount: 500})}
        className='bg-yellow-600'>Deposit ₹ 500</button>

    <button onClick={() => dispatch({ type:"withdraw",amount:300})}
        className='bg-green-700'> Withdraw ₹ 300</button>

    <button onClick={()=> dispatch({type: "reset"})}
        className='bg-blue-500'> Reset</button>
    </>
  );
}

export default Bank