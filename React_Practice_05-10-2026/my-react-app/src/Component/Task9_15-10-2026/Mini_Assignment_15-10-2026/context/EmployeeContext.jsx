
import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  getEmployees,
  addEmployee as saveEmployee,
  deleteEmployee as removeEmployee,
} from "../services/employeeService";

export const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadEmployees = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch {
      setError("Unable to load employees.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  async function addEmployee(employee) {
    try {
      setError("");
      const newEmployee = await saveEmployee(employee);

      setEmployees((currentEmployees) => [
        ...currentEmployees,
        newEmployee,
      ]);

      return true;
    } catch {
      setError("Unable to add employee.");
      return false;
    }
  }

  async function deleteEmployee(id) {
    try {
      setError("");
      await removeEmployee(id);

      setEmployees((currentEmployees) =>
        currentEmployees.filter(
          (employee) => employee.id !== id
        )
      );

      return true;
    } catch {
      setError("Unable to delete employee.");
      return false;
    }
  }

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        isLoading,
        error,
        loadEmployees,
        addEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
