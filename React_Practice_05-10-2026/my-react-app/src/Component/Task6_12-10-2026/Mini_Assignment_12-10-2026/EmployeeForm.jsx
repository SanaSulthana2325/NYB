
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployees } from "./EmployeeContext";

export default function EmployeeForm({ edit = false }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employees, addEmployee, updateEmployee } = useEmployees();

  const existingEmployee = employees.find((item) => item.id === id);

  const [name, setName] = useState(existingEmployee?.name || "");
  const [role, setRole] = useState(existingEmployee?.role || "");
  const [email, setEmail] = useState(existingEmployee?.email || "");

  if (edit && !existingEmployee) {
    return <p className="text-red-600">Employee not found.</p>;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const employee = {
      name: name.trim(),
      role: role.trim(),
      email: email.trim(),
    };

    if (edit) {
      updateEmployee(id, employee);
    } else {
      addEmployee(employee);
    }

    navigate("/employees");
  }

  return (
    <div className="max-w-lg rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        {edit ? "Edit Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block">Name</label>
          <input
            className="w-full rounded border p-3"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter employee name"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">Role</label>
          <input
            className="w-full rounded border p-3"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Enter employee role"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">Email</label>
          <input
            type="email"
            className="w-full rounded border p-3"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter employee email"
            required
          />
        </div>

        <button
          type="submit"
          className="rounded bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
        >
          {edit ? "Update Employee" : "Save Employee"}
        </button>
      </form>
    </div>
  );
}
