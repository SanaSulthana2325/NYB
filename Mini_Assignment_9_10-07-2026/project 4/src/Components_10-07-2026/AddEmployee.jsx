import { addData } from "../Services/AxiosApi";

function AddEmployee() {

    const saveEmployee = async () => {

        const employee = {

            title:"React Developer",
            body:"Working in IT",
            userId:1

        };

        const result = await addData(employee);

        console.log(result);

        alert("Employee Added");

    }

    return (

        <button onClick={saveEmployee}>
            Add Employee
        </button>

    );

}

export default AddEmployee;