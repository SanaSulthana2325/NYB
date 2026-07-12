import { patchData } from "../Services/AxiosApi";

function PatchEmployee(){

    const patchEmployee = async()=>{

        const result = await patchData(1,{
            title:"Frontend Developer"
        });

        console.log(result);

        alert("Patched Successfully");

    }

    return(

        <button onClick={patchEmployee}>
            Patch Employee
        </button>

    );

}

export default PatchEmployee;