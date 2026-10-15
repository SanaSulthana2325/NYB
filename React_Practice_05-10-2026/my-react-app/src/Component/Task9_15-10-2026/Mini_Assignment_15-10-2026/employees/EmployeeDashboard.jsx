
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";
import { useEmployees } from "../hooks/useEmployees";
import StatusMessage from "../components/StatusMessage";

export default function EmployeeDashboard() {
  const {
    employees,
    isLoading,
    error,
    loadEmployees,
  } = useEmployees();

  if (isLoading || error) {
    return (
      <StatusMessage
        loading={isLoading}
        error={error}
        onRetry={loadEmployees}
      />
    );
  }

  const developerCount = employees.filter(
    (employee) => employee.role === "Developer"
  ).length;

  const hrCount = employees.filter(
    (employee) => employee.role === "HR"
  ).length;

  const designerCount = employees.filter(
    (employee) => employee.role === "Designer"
  ).length;

  const summaryCards = [
    {
      label: "Total Employees",
      count: employees.length,
      color: "text-blue-600",
    },
    {
      label: "Developers",
      count: developerCount,
      color: "text-green-600",
    },
    {
      label: "HR",
      count: hrCount,
      color: "text-purple-600",
    },
    {
      label: "Designers",
      count: designerCount,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-gray-500">
              {card.label}
            </p>
            <p className={`mt-2 text-3xl font-bold ${card.color}`}>
              {card.count}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <EmployeeForm />
        </div>

        <div className="lg:col-span-2">
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
}
