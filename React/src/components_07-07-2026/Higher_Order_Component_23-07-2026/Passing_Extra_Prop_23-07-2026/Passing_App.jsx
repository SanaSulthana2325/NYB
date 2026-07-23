import Employee from "./Employee";
import withCompany from "./withCompany";

const NewEmployee = withCompany(Employee);

function Passing_App() {

  return (
    <NewEmployee
      name="Sana"
    />
  );
}

export default Passing_App;