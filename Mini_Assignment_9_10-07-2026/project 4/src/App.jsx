import EmployeeList from "./Components_10-07-2026/EmployeeList";
import AddEmployee from "./Components_10-07-2026/AddEmployee";
import UpdateEmployee from "./Components_10-07-2026/UpdateEmployee";
import PatchEmployee from "./Components_10-07-2026/PatchEmployee";
import DeleteEmployee from "./Components_10-07-2026/DeleteEmployee";

function App(){

  return(

    <div>

      <h1>Employee Management System</h1>

      <AddEmployee/>

      <UpdateEmployee/>

      <PatchEmployee/>

      <DeleteEmployee/>

      <EmployeeList/>

    </div>

  );

}

export default App;