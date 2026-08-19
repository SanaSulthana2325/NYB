import React from "react";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  increaseBy,
  decreaseBy
} from "../Payload_Count_19-08-2026/CounterSlice";

function Counter_App() {

  const count = useSelector(
    (state) => state.counter1.count
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button
        onClick={() => dispatch(increaseBy(5))}
      >
        +5
      </button>

      <button
        onClick={() => dispatch(increaseBy(10))}
      >
        +10
      </button>

      <button
        onClick={() => dispatch(decreaseBy(3))}
      >
        -3
      </button>
    </div>
  );
}

export default Counter_App;