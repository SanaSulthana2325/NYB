export const employees = [
    {
        id: 1,
        name: "Rahul",
        department: "HR",
        salary: 15000
    },
    {
        id: 2,
        name: "Priya",
        department: "IT",
        salary: 25000
    },
    {
        id: 3,
        name: "Arjun",
        department: "Finance",
        salary: 20000
    }
];

export function displayEmployees() {
    employees.forEach((emp) => {
        console.log(emp.name, emp.department, emp.salary);
    });
}