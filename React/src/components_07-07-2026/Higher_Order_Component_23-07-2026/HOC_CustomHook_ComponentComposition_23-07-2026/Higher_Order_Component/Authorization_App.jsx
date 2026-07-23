
import DashBoard from "./DashBoard";
import withAuthorization from "./withAuthorization";

const ProtectedDashBoard = withAuthorization(DashBoard);

function Authorization_App() {
  return (
    <>
      <h1>HOC Example</h1>

      <ProtectedDashBoard />
    </>
  );
}

export default Authorization_App;