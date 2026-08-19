import React, { useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];

    case "delete":
      return state.filter(
        todo => todo.id !== action.payload
      );

    case "toggle":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
}

function Todo_List() {
  const [todos, dispatch] = useReducer(
    reducer,
    initialState
  );

  const addTodo = () => {
    dispatch({
      type: "add",
      payload: "Learn React"
    });
  };

  return (
    <div>
      <h1>Todo List</h1>

      <button onClick={addTodo} className="bg-orange-500 px-2 py-2">
        Add Todo
      </button>

      {todos.map(todo => (
        <div key={todo.id}>
          <span>
            {todo.completed ? "completed " : ""}
            {todo.text}
          </span>

          <button
            onClick={() =>
              dispatch({
                type: "toggle",
                payload: todo.id
              })} className="bg-red-500 px-2 py-2 mr-2">
            Toggle
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "delete",
                payload: todo.id
              })} className="bg-yellow-500 px-2 py-2 mr-2">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo_List;