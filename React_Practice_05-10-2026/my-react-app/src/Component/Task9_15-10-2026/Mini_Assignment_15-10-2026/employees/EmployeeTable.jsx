
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useEmployees } from "../hooks/useEmployees";

export default function EmployeeTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const { employees, deleteEmployee } = useEmployees();

  const filteredEmployees = employees.filter((employee) => {
    const searchableText =
      `${employee.name} ${employee.email} ${employee.role}`;

    return searchableText
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  async function handleDelete(id) {
    if (window.confirm("Delete this employee?")) {
      await deleteEmployee(id);
    }
  }

  return (
    <section className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-gray-800">
        Employee Directory
      </h2>

      <div className="mb-4">
        <Input
          label="Search employees"
          name="search"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          placeholder="Search name, email, or role"
          required={false}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b border-gray-100"
              >
                <td className="p-3 font-medium">
                  {employee.name}
                </td>
                <td className="p-3">{employee.email}</td>
                <td className="p-3">
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700">
                    {employee.role}
                  </span>
                </td>
                <td className="p-3">
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}

            {filteredEmployees.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-gray-500"
                >
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
