import React, { useState } from 'react';

function Multiple_Variables() {
  const [name, setName] = useState("Jasmine");
  const [age, setAge] = useState(21);

  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>

      <button
        onClick={() => setName("Ruby")}
        className="bg-blue-500"
      >
        Change Name
      </button>

      <br />
      <br />

      <button
        onClick={() => setAge(22)}
        className="bg-pink-700"
      >
        Increase Age
      </button>
    </>
  );
}

export default Multiple_Variables;