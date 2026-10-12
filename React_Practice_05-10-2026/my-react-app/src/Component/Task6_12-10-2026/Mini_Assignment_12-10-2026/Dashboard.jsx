
import { Link } from "react-router-dom";
import { useEmployees } from "./EmployeeContext";

export default function Dashboard() {
  const { employees } = useEmployees();

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">Dashboard</h2>

      <div className="max-w-sm rounded-xl bg-indigo-100 p-6">
        <p className="text-gray-600">Total Employees</p>
        <p className="my-3 text-4xl font-bold text-indigo-700">
          {employees.length}
        </p>

        <Link
          to="/employees"
          className="text-indigo-700 underline"
        >
          View Employees
        </Link>
      </div>
    </div>
  );
}
