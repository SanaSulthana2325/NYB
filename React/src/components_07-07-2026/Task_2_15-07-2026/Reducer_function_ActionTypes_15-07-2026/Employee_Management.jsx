import{useReducer} from "react";
const initialState =[];
function reducer(state,action){
    switch(action.type){
        case"ADD_EMPLOYEE":
        return[...state, action.payload];
        
        case"DELETE_EMPLOYEE":
        return state.filter((emp)=> emp.id !==action.payload);

        case "RESET":
            return [];
            default:
                return state;



    }
}
function Employee_Management(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
        <button
    onClick={() => {

        dispatch({
            type: "ADD_EMPLOYEE",
            payload: {
                id: 1,
                name: "John"
            }
        });

        dispatch({
            type: "ADD_EMPLOYEE",
            payload: {
                id: 2,
                name: "Sonu"
            }
        });

    }}
>
    Add Employee
</button>
    

            <button
                onClick={() =>
                    dispatch({
                        type: "DELETE_EMPLOYEE",
                        payload: 1
                    })
                }
            >
                Delete Employee
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "RESET"
                    })
                }
            >
                Reset
            </button>

            <h2>Employees</h2>

            {state.map((emp) => (
                <p key={emp.id}>
                    {emp.id} - {emp.name}
                </p>
            ))}

        </>
    )
}

export default Employee_Management;
