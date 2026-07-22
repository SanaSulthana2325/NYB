import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    country: "",
    state: "",
    address: "",
    skills: [],
    resume: null
  });

  const [errors, setErrors] = useState({});

  const states = {
    India: ["Telangana", "Andhra Pradesh", "Karnataka"],
    USA: ["California", "Texas", "Florida"],
    Canada: ["Ontario", "Quebec", "Alberta"]
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      let updatedSkills = [...formData.skills];

      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter(
          (skill) => skill !== value
        );
      }

      setFormData({
        ...formData,
        skills: updatedSkills
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        resume: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });

      if (name === "country") {
        setFormData((prev) => ({
          ...prev,
          country: value,
          state: ""
        }));
      }
    }
  };

  const validate = () => {
    let newErrors = {};

    if (formData.name.trim() === "")
      newErrors.name = "Name is required";

    if (!formData.email.includes("@"))
      newErrors.email = "Enter valid email";

    if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (formData.age < 18)
      newErrors.age = "Age must be above 18";

    if (!formData.gender)
      newErrors.gender = "Select Gender";

    if (!formData.country)
      newErrors.country = "Select Country";

    if (!formData.state)
      newErrors.state = "Select State";

    if (formData.skills.length === 0)
      newErrors.skills = "Select at least one skill";

    if (!formData.resume)
      newErrors.resume = "Upload Resume";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Registration Successful");

      console.log(formData);
    }
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <p>{errors.age}</p>

        <h3>Gender</h3>

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

        <p>{errors.gender}</p>

        <h3>Country</h3>

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
        </select>

        <p>{errors.country}</p>

        <h3>State</h3>

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Select State</option>

          {formData.country &&
            states[formData.country].map((state) => (
              <option key={state}>{state}</option>
            ))}
        </select>

        <p>{errors.state}</p>

        <h3>Skills</h3>

        <label>
          <input
            type="checkbox"
            value="React"
            onChange={handleChange}
          />
          React
        </label>

        <label>
          <input
            type="checkbox"
            value="Java"
            onChange={handleChange}
          />
          Java
        </label>

        <label>
          <input
            type="checkbox"
            value="Python"
            onChange={handleChange}
          />
          Python
        </label>

        <p>{errors.skills}</p>

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <h3>Resume</h3>

        <input
          type="file"
          onChange={handleChange}
        />

        <p>{errors.resume}</p>

        <button>Register</button>
      </form>

      <hr />

      <h2>Live Preview</h2>

      <p>Name : {formData.name}</p>
      <p>Email : {formData.email}</p>
      <p>Country : {formData.country}</p>
      <p>State : {formData.state}</p>
      <p>Skills : {formData.skills.join(", ")}</p>
    </div>
  );
}

export default RegistrationForm;