import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function Counter6() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Counter : {count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </>
  );
}

export default Counter6;