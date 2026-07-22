import { useState } from "react";

function Multiple_State() {

  const [name, setName] = useState("Sana");

  const [course, setCourse] = useState("React");

  return (

    <div>

      <h2>{name}</h2>

      <h2>{course}</h2>

      <button onClick={() => {

        setName("Aisha");

        setCourse("Redux");

      }}>

        Update

      </button>

    </div>

  );

}

export default Multiple_State;