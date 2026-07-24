import Student1 from "./Student1";
import withStyle from "./withStyle";

const StyledStudent = withStyle(Student1);

function Student1_App(){

return(

<div className="min-h-screen bg-gray-100 flex justify-center items-center">

<StyledStudent/>

</div>

)

}

export default Student1_App;