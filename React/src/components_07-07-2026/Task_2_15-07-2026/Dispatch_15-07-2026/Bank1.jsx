import { useReducer } from "react";

const initialState = 5000;

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return state + action.payload;

    case "withdraw":
      return state - action.payload;

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function Bank1() {
  const [balance, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Balance : ₹{balance}</h2>

      <button
        onClick={() =>
          dispatch({
            type: "deposit",
            payload: 1000,
          })
        }
      >
        Deposit ₹1000
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "withdraw",
            payload: 500,
          })
        }
      >
        Withdraw ₹500
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </>
  );
}

export default Bank1;