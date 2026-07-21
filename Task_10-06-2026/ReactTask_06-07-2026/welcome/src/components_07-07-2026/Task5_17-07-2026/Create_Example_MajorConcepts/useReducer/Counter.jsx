import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;

    case "decrease":
      return state - 1;

    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={() =>
          dispatch({ type: "increase" })
        }
      >
        +
      </button>

      <button className="bg-green-500 !p-10 text-[25px] "
        onClick={() =>
          dispatch({ type: "decrease" })
        }
      >
        - decrease
      </button>

    </>
  );
}

export default Counter;