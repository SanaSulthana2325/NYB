
"use strict";

// =====================================
// 1. EMPLOYEE DATA USING OBJECTS
// =====================================

const employees = [
    { id: 101, name: "Sam", department: "IT", salary: 25000 },
    { id: 102, name: "Ayesha", department: "HR", salary: 29000 },
    { id: 103, name: "Zeba", department: "IT", salary: 35000 },
    { id: 104, name: "Zobia", department: "Finance", salary: 45000 },
    { id: 105, name: "Ravi", department: "HR", salary: 32000 }
];

// The array currently shown in the table.
let currentEmployees = [...employees];

// =====================================
// 2. REUSABLE CURRENCY FUNCTION
// =====================================

function formatSalary(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);
}

// =====================================
// 3. DISPLAY EMPLOYEES IN HTML TABLE
// =====================================

function displayEmployees(employeeList) {
    const table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employeeList.forEach(employee => {
        // Object destructuring
        const { id, name, department, salary } = employee;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${department}</td>
            <td>${formatSalary(salary)}</td>
        `;

        table.appendChild(row);
    });

    document.getElementById("message").textContent =
        employeeList.length === 0
            ? "No employees found."
            : `Showing ${employeeList.length} employee(s).`;
}

// =====================================
// 4. CALCULATE SALARY STATISTICS
// =====================================

function calculateStatistics(employeeList) {
    // Reduce: calculate total salary
    const total = employeeList.reduce(
        (sum, employee) => sum + employee.salary,
        0
    );

    const average = employeeList.length > 0
        ? total / employeeList.length
        : 0;

    // Reduce: find highest salary
    const highest = employeeList.reduce(
        (max, employee) =>
            employee.salary > max.salary ? employee : max,
        employeeList[0]
    );

    // Reduce: find lowest salary
    const lowest = employeeList.reduce(
        (min, employee) =>
            employee.salary < min.salary ? employee : min,
        employeeList[0]
    );

    document.getElementById("totalEmployees").textContent =
        employeeList.length;

    document.getElementById("totalSalary").textContent =
        formatSalary(total);

    document.getElementById("averageSalary").textContent =
        formatSalary(average);

    document.getElementById("highestSalary").textContent =
        highest
            ? `${highest.name} - ${formatSalary(highest.salary)}`
            : "-";

    document.getElementById("lowestSalary").textContent =
        lowest
            ? `${lowest.name} - ${formatSalary(lowest.salary)}`
            : "-";
}

// =====================================
// 5. FILTER BY DEPARTMENT
// =====================================

function filterByDepartment(department) {
    if (department === "All") {
        currentEmployees = [...employees];
    } else {
        currentEmployees = employees.filter(
            employee => employee.department === department
        );
    }

    displayEmployees(currentEmployees);
    calculateStatistics(currentEmployees);
}

// =====================================
// 6. FIND EMPLOYEE BY ID
// =====================================

function findEmployeeById(id) {
    return employees.find(employee => employee.id === id);
}

function searchEmployee() {
    const input = document.getElementById("employeeId").value;
    const id = Number(input);

    if (input.trim() === "" || !Number.isInteger(id)) {
        currentEmployees = [];
        displayEmployees(currentEmployees);
        calculateStatistics(currentEmployees);
        document.getElementById("message").textContent =
            "Please enter a valid employee ID.";
        return;
    }

    const employee = findEmployeeById(id);

    // Show the matching employee, or an empty list.
    currentEmployees = employee ? [employee] : [];

    displayEmployees(currentEmployees);
    calculateStatistics(currentEmployees);

    if (!employee) {
        document.getElementById("message").textContent =
            "Employee ID not found.";
    }
}

// =====================================
// 7. SORT EMPLOYEES BY SALARY
// =====================================

function sortBySalary() {
    // Spread copies the array before sorting.
    currentEmployees = [...currentEmployees].sort(
        (a, b) => a.salary - b.salary
    );

    displayEmployees(currentEmployees);
    calculateStatistics(currentEmployees);
}

// =====================================
// 8. RESET TO ALL EMPLOYEES
// =====================================

function resetEmployees() {
    currentEmployees = [...employees];

    document.getElementById("department").value = "All";
    document.getElementById("employeeId").value = "";

    displayEmployees(currentEmployees);
    calculateStatistics(currentEmployees);
}

// =====================================
// 9. CONNECT HTML BUTTONS TO FUNCTIONS
// =====================================

document.getElementById("filterBtn").addEventListener("click", () => {
    const department = document.getElementById("department").value;
    filterByDepartment(department);
});

document.getElementById("searchBtn").addEventListener("click", searchEmployee);

document.getElementById("sortBtn").addEventListener("click", sortBySalary);

document.getElementById("resetBtn").addEventListener("click", resetEmployees);

// =====================================
// 10. INITIAL DISPLAY
// =====================================

displayEmployees(currentEmployees);
calculateStatistics(currentEmployees);
