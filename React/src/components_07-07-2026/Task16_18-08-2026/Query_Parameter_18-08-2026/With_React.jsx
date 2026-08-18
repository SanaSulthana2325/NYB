import React, { useState } from "react";

function With_React() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const searchStudents = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${name}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Username"
      className="bg-pink-300"/>

      <button onClick={searchStudents}
      className="bg-yellow-600">
        Search
      </button>

      {students.map((student) => (
        <p key={student.id}>
          {student.name}
        </p>
      ))}
    </div>
  );
}

export default With_React;