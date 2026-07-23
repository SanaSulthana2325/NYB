import Counter from "./Counter";
import withCounter from "./withCounter";

const EnhancedCounter = withCounter(Counter);

function Counter_App() {

  return (
    <EnhancedCounter />
  );
}

export default Counter_App;