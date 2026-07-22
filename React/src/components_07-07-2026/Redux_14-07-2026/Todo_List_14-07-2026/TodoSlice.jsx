import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const TodoSlice = createSlice({

    name: "todo",

    initialState,

    reducers: {
        addTodo:(state,action)=>{
            state.todos.push({
                id:Date.now(),
                text:action.payload
            });
        },
        deleteTodo:(state, action)=>{
            state.todos = state.todos.filter(
                todo => todo.id !== action.payload
            );
        }

    }

});

export const {addTodo, deleteTodo} = TodoSlice.actions;

export default TodoSlice.reducer;