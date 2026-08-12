import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.text];

    case "remove":
      return state.filter((_, index) => index !== action.index);

    default:
      return state;
  }
}

function Todo_List() {
  const [text, setText] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      className="border border-green-500px"/>

      <button
        onClick={() => {
          dispatch({ type: "add", text });
          setText("");
        }}
       className="bg-pink-400">
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button
              onClick={() =>
                dispatch({ type: "remove", index })
              } className="bg-yellow-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo_List;