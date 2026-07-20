import { useState } from "react";

function Details() {

  const [open, setOpen] = useState(false);

  return (

    <div>

      <button onClick={() => setOpen(!open)}>
        {open ? "Hide Details" : "Show Details"}
      </button>

      {
        open &&
        <p>
          This World is beautiful and everyone once open your eyes and see it and feel it then you all  will understand!
        </p>
      }

    </div>

  );

}

export default Details;