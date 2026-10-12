
import { Link, useParams } from "react-router-dom";
import { useEmployees } from "./EmployeeContext";

export default function EmployeeDetails() {
  const { id } = useParams();
  const { employees } = useEmployees();

  const employee = employees.find((item) => item.id === id);

  if (!employee) {
    return (
      <div>
        <h2 className="text-2xl font-bold">Employee Not Found</h2>
        <Link to="/employees" className="text-blue-600 underline">
          Back to Employee List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg rounded-xl bg-white p-6 shadow">
      <h2 className="mb-5 text-2xl font-bold">Employee Details</h2>

      <p className="mb-3">
        <strong>ID:</strong> {employee.id}
      </p>
      <p className="mb-3">
        <strong>Name:</strong> {employee.name}
      </p>
      <p className="mb-3">
        <strong>Role:</strong> {employee.role}
      </p>
      <p className="mb-5">
        <strong>Email:</strong> {employee.email}
      </p>

      <Link to="/employees" className="text-indigo-600 underline">
        Back to Employee List
      </Link>
    </div>
  );
}
