import { useReducer } from "react";

const initialState = {
  present: 0
};

function reducer(state, action) {

  switch (action.type) {

    case "PRESENT":
      return {
        present: state.present + 1
      };

    case "ABSENT":
      return {
        present: state.present
      };

    case "RESET":
      return {
        present: 0
      };

    default:
      return state;
  }

}

function Student_useReducer() {

  const [state, dispatch] =
    useReducer(reducer, initialState);

  return (
    <>
      <h2>
        Present Students : {state.present}
      </h2>

      <button
        onClick={() =>
          dispatch({ type: "PRESENT" })
        }
      >
        Rahul Present
      </button>

      <button
        onClick={() =>
          dispatch({ type: "PRESENT" })
        }
      >
        Sana Present
      </button>

      <button
        onClick={() =>
          dispatch({ type: "RESET" })
        }
      >
        Reset
      </button>
    </>
  );
}

export default Student_useReducer;