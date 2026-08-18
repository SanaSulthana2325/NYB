import React, { useState } from "react";

function Post_Add_Date() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = {
      name: name,
      course: course
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(student)
        }
      );

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-yellow-500"
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="bg-pink-500"
      />

      <button type="submit"
      className="bg-green-300">
        Add Student
      </button>
    </form>
  );
}

export default Post_Add_Date;