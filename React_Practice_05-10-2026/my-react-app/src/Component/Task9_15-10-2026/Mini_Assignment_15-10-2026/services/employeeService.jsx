
let employees = [
  {
    id: 1,
    name: "Ravi Kumar",
    email: "ravi@example.com",
    role: "Developer",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    role: "HR",
  },
  {
    id: 3,
    name: "Arun Kumar",
    email: "arun@example.com",
    role: "Designer",
  },
  {
    id: 4,
    name: "Meena Das",
    email: "meena@example.com",
    role: "Developer",
  },
];

export async function getEmployees() {
  return [...employees];
}

export async function addEmployee(employee) {
  const newEmployee = {
    ...employee,
    id: Date.now(),
  };

  employees = [...employees, newEmployee];

  return newEmployee;
}

export async function deleteEmployee(id) {
  employees = employees.filter(
    (employee) => employee.id !== id
  );
}
