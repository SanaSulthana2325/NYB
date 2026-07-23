import Profile from "./Profile";
import withLogger from "./withLogger";


const NewProfile = withLogger(Profile);

function Logging_App() {
  return <NewProfile />;
}

export default Logging_App