
import { EmployeeProvider } from "../context/EmployeeContext";
import ErrorBoundary from "../components/ErrorBoundary";
import EmployeeDashboard from "../employees/EmployeeDashboard";

export default function Gh() {
  return (
    <ErrorBoundary>
      <EmployeeProvider>
        <main className="min-h-screen bg-gray-100">
          <header className="bg-blue-700 px-6 py-6 text-white shadow">
            <div className="mx-auto max-w-7xl">
              <h1 className="text-2xl font-bold">
                Employee Management Portal
              </h1>
              <p className="mt-1 text-sm text-blue-100">
                Manage employees, roles, and team information
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-7xl p-6">
            <EmployeeDashboard />
          </div>
        </main>
      </EmployeeProvider>
    </ErrorBoundary>
  );
}
