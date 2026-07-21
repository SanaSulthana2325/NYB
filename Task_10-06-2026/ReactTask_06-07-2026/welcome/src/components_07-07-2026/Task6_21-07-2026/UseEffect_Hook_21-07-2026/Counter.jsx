import { useState, useEffect } from "react";

function Counter() {

  const [text, setText] = useState("");

  useEffect(() => {

    document.title = `${text.length} Characters`;

  }, [text]);

  return (

    <div>

      <h2>Character Counter</h2>

      <textarea

        rows="5"

        cols="30"

        value={text}

        onChange={(e) => setText(e.target.value)}

      />

      <h3>Total Characters : {text.length}</h3>

    </div>

  );

}

export default Counter;