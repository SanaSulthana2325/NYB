import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";


function AddTodo(){

    const [task,setTask] = useState("");

    const dispatch = useDispatch();


    const saveTodo = () => {

        dispatch(addTodo(task));

        setTask("");

    };


    return(

        <>
            <h2>Add Todo Component</h2>


            <input 
                type="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
            />


            <button onClick={saveTodo}>
                Add
            </button>

        </>

    );

}

export default AddTodo;