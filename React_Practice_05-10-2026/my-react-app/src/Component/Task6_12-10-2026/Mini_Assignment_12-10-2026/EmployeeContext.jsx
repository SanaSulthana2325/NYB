
import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

const initialEmployees = [
  { id: "1", name: "Rahul", role: "Developer", email: "rahul@example.com" },
  { id: "2", name: "Priya", role: "Designer", email: "priya@example.com" },
  { id: "3", name: "Arun", role: "Manager", email: "arun@example.com" },
];

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(initialEmployees);

  function addEmployee(employee) {
    setEmployees((previous) => [
      ...previous,
      { ...employee, id: Date.now().toString() },
    ]);
  }

  function updateEmployee(id, updatedEmployee) {
    setEmployees((previous) =>
      previous.map((employee) =>
        employee.id === id
          ? { ...employee, ...updatedEmployee }
          : employee
      )
    );
  }

  function deleteEmployee(id) {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  }

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmployeeContext);
}
