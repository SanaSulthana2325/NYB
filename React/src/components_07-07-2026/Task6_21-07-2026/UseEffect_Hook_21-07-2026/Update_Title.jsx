import { useState, useEffect } from "react";

function Update_Title() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>

      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </div>
  );
}

export default Update_Title;