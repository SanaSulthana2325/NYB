import { useState } from "react";

function Multiple_Inputs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <h2>User Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        className="border border-black p-2 rounded w-64"
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        className="border-2 border-pink-500 rounded-md px-3 py-2 w-72 focus:outline-none focus:border-blue-600"

      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
        className="border border-black p-2 rounded w-64"

      />

      <hr />

      <h3>Output</h3>

      <p>Name : {formData.name}</p>
      <p>Email : {formData.email}</p>
      <p>Age : {formData.age}</p>
    </div>
  );
}

export default Multiple_Inputs;