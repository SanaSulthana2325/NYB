import { deleteData } from "../Services/AxiosApi";

function DeleteEmployee(){

    const removeEmployee=async()=>{

        await deleteData(1);

        alert("Deleted Successfully");

    }

    return(

        <button onClick={removeEmployee}>
            Delete Employee
        </button>

    );

}

export default DeleteEmployee;