import {useSelector,useDispatch} from "react-redux";
import {deleteTodo} from "./TodoSlice";


function TodoList(){

    const todos = useSelector(
        (state)=>state.todo.todos
    );


    const dispatch = useDispatch();


    return(

        <div>

            <h2>Todo List</h2>


            {
                todos.map((todo,index)=>(

                    <div key={todo.id}>

                    <h3>
                    {index+1}. {todo.text}
                    </h3>


                    <button
                    onClick={()=>
                    dispatch(deleteTodo(todo.id))
                    }>
                    Delete
                    </button>


                    </div>

                ))
            }


        </div>

    )

}


export default TodoList;