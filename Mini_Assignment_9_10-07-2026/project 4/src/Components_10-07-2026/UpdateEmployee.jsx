import { updateData } from "../Services/AxiosApi";

function UpdateEmployee(){

    const update = async()=>{

        const employee={

            id:1,
            title:"Senior React Developer",
            body:"Updated Employee",
            userId:1

        };

        const result=await updateData(1,employee);

        console.log(result);

        alert("Updated Successfully");

    }

    return(

        <button onClick={update}>
            Update Employee
        </button>

    );

}

export default UpdateEmployee;