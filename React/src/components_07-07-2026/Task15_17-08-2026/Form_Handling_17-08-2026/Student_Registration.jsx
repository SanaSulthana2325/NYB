import React, { useState } from "react";

function Student_Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Student Details:");
    console.log(formData);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-96 border-2 border-blue-500 rounded-lg p-6 shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-5">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit}>
          
          {/* Name */}
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="w-full border border-gray-400 p-2 rounded"
          />

          <br />
          <br />

          {/* Email */}
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Student Email"
            className="w-full border border-gray-400 p-2 rounded"
          />

          <br />
          <br />

          {/* Age */}
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full border border-gray-400 p-2 rounded"
          />

          <br />
          <br />

          {/* Course */}
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2 rounded"
          >
            <option value="">Select Course</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
          </select>

          <br />
          <br />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
}

export default Student_Registration;