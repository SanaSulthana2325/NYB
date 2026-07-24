import { useState } from "react";

function Student_Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    course: "",
    address: "",
    react: false,
    javascript: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Student Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Gender */}
          <div>
            <label className="font-semibold">Gender</label>

            <div className="flex gap-4 mt-2">

              <label>

                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />

                Male

              </label>

              <label>

                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />

                Female

              </label>

            </div>

          </div>

          {/* Course */}

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >

            <option value="">Select Course</option>

            <option>React</option>

            <option>Java</option>

            <option>Python</option>

          </select>

          {/* Skills */}

          <div>

            <label className="font-semibold">

              Skills

            </label>

            <div className="flex gap-5 mt-2">

              <label>

                <input
                  type="checkbox"
                  name="react"
                  checked={formData.cooking}
                  onChange={handleChange}
                />

                cooking

              </label>

              <label>

                <input
                  type="checkbox"
                  name="javascript"
                  checked={formData.dancing}
                  onChange={handleChange}
                />

                dancing

              </label>

            </div>

          </div>

          {/* Address */}

          <textarea
            name="address"
            rows="3"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Student_Form;