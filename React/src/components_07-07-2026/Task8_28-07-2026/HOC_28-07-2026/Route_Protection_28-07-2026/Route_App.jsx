import Profile from "./Profile";
import withAuth from "./withAuth";

const ProtectedProfile = withAuth(Profile);


function Route_App() {
  return (
    <ProtectedProfile isLoggedIn={true} />
  );
}

export default Route_App;