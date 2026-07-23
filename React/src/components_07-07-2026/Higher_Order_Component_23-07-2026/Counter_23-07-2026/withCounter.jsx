import { useState } from "react";

function withCounter(Component) {

  return function(props) {

    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return (
      <Component
        {...props}
        count={count}
        increment={increment}
      />
    );
  };
}

export default withCounter;