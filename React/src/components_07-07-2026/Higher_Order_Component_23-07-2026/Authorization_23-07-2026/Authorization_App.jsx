import AdminPanel from "./AdminPanel";
import withAuthorization from "./withAuthorization";

const ProtectedAdmin = withAuthorization(AdminPanel);

function Authorization_App() {
  return <ProtectedAdmin />;
}

export default Authorization_App;