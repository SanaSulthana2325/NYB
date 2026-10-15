
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEmployees } from "../hooks/useEmployees";

const initialForm = {
  name: "",
  email: "",
  role: "Developer",
};

export default function EmployeeForm() {
  const [formData, setFormData] = useState(initialForm);
  const [formError, setFormError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const { addEmployee } = useEmployees();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormError("");
    setIsSaving(true);

    try {
      const success = await addEmployee(formData);

      if (success) {
        setFormData(initialForm);
      } else {
        setFormError("Could not save employee. Please try again.");
      }
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl bg-white p-5 shadow-sm"
    >
      <h2 className="text-lg font-bold text-gray-800">
        Add Employee
      </h2>

      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter employee name"
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email address"
      />

      <div className="space-y-1">
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700"
        >
          Role
        </label>

        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        >
          <option>Developer</option>
          <option>HR</option>
          <option>Designer</option>
          <option>Manager</option>
        </select>
      </div>

      {formError && (
        <p role="alert" className="text-sm text-red-600">
          {formError}
        </p>
      )}

      <Button type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Add Employee"}
      </Button>
    </form>
  );
}
