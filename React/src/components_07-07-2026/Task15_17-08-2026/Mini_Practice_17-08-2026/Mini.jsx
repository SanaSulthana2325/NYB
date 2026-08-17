import React, { useState } from "react";

function Mini() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for current field
    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName =
        "Full name must be at least 3 characters";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    // Age
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (
      Number(formData.age) < 18 ||
      Number(formData.age) > 100
    ) {
      newErrors.age = "Age must be between 18 and 100";
    }

    // Phone Number
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Registration successful!");

      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        {/* Heading */}

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Registration Form
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Create your account
        </p>

        <form onSubmit={handleSubmit}>

          {/* Full Name */}

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Age */}

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Age
            </label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {errors.age && (
              <p className="text-red-500 text-sm mt-1">
                {errors.age}
              </p>
            )}
          </div>

          {/* Phone Number */}

          <div className="mb-6">
            <label className="block font-medium mb-1">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10 digit phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Success Message */}

          {success && (
            <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
              {success}
            </p>
          )}

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
}

export default Mini;