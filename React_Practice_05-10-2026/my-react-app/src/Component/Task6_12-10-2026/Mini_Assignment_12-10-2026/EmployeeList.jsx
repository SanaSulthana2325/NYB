
import { Link } from "react-router-dom";
import { useEmployees } from "./EmployeeContext";

export default function EmployeeList() {
  const { employees, deleteEmployee } = useEmployees();

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-3xl font-bold">Employee List</h2>

        <Link
          to="/add"
          className="rounded bg-indigo-600 px-4 py-2 text-white"
        >
          + Add Employee
        </Link>
      </div>

      {employees.length === 0 ? (
        <p className="text-gray-500">No employees found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg bg-white shadow">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Role</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-t">
                  <td className="p-3">{employee.name}</td>
                  <td className="p-3">{employee.role}</td>

                  <td className="flex flex-wrap gap-3 p-3">
                    <Link
                      to={`/employees/${employee.id}`}
                      className="text-blue-600"
                    >
                      View
                    </Link>

                    <Link
                      to={`/edit/${employee.id}`}
                      className="text-green-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteEmployee(employee.id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
