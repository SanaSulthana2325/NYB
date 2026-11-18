import { employees, displayEmployees } from "./employee.js";

import {
    calculateBonus,
    calculateTotalSalary
} from "./salary.js";

import { getDepartment } from "./department.js";

console.log("Employee Details:");

displayEmployees();

console.log("\nSalary Details:");

employees.forEach((emp) => {
    console.log("Name:", emp.name);

    console.log("Bonus:", calculateBonus(emp.salary));

    console.log("Total Salary:", calculateTotalSalary(emp.salary));

    console.log(getDepartment(emp.department));

    console.log("-------------------");
});