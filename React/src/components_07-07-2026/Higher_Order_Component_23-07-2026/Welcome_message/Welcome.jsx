import Home from "./Home";
import withWelcome from "./withWelcome";

const EnhancedHome = withWelcome(Home);

function Welcome() {
  return <EnhancedHome />;
}

export default Welcome;