
"use strict";

// ==================================
// 1. EMPLOYEE DATA
// ==================================

let employees = [
    {
        id: 101,
        name: "Rahul",
        department: "HR",
        age: 25,
        salary: 25000
    },
    {
        id: 102,
        name: "Priya",
        department: "IT",
        age: 27,
        salary: 35000
    },
    {
        id: 103,
        name: "Arjun",
        department: "Finance",
        age: 29,
        salary: 30000
    },
    {
        id: 104,
        name: "Sneha",
        department: "HR",
        age: 24,
        salary: 22000
    },
    {
        id: 105,
        name: "Kiran",
        department: "IT",
        age: 26,
        salary: 40000
    },
    {
        id: 106,
        name: "Anjali",
        department: "Finance",
        age: 28,
        salary: 32000
    }
];


// ==================================
// 2. DISPLAY EMPLOYEES
// ==================================

function displayEmployees(list = employees) {

    const table = document.getElementById("employeeTable");

    table.innerHTML = "";

    if (list.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="7">No employees found!</td>
            </tr>
        `;
        return;
    }

    list.forEach(emp => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.age}</td>
            <td>₹${emp.salary.toLocaleString("en-IN")}</td>
            <td>₹${(emp.salary * 0.10).toLocaleString("en-IN")}</td>
            <td>
                <button class="delete-btn"
                    data-id="${emp.id}">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);

    });

}


// ==================================
// 3. SEARCH EMPLOYEES
// ==================================

function searchEmployees() {

    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase().trim();

    let result = employees.filter(emp =>

        emp.name.toLowerCase().includes(searchValue) ||
        String(emp.id).includes(searchValue)

    );

    displayFilteredEmployees(result);
}


// ==================================
// 4. FILTER EMPLOYEES
// ==================================

function filterEmployees() {

    const department = document
        .getElementById("departmentFilter").value;

    const minSalary = Number(
        document.getElementById("salaryFilter").value
    ) || 0;

    let result = employees.filter(emp => {

        const departmentMatch =
            department === "All" ||
            emp.department === department;

        const salaryMatch = emp.salary >= minSalary;

        return departmentMatch && salaryMatch;

    });

    displayFilteredEmployees(result);
}


// ==================================
// 5. SORT EMPLOYEES
// ==================================

function sortEmployees() {

    let result = [...employees];

    const sortType = document
        .getElementById("sortFilter").value;

    if (sortType === "name") {

        result.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    }

    else if (sortType === "salaryLow") {

        result.sort((a, b) =>
            a.salary - b.salary
        );

    }

    else if (sortType === "salaryHigh") {

        result.sort((a, b) =>
            b.salary - a.salary
        );

    }

    displayFilteredEmployees(result);
}


// ==================================
// 6. COMBINED SEARCH, FILTER AND SORT
// ==================================

function displayFilteredEmployees() {

    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase().trim();

    const department = document
        .getElementById("departmentFilter").value;

    const minSalary = Number(
        document.getElementById("salaryFilter").value
    ) || 0;

    const sortType = document
        .getElementById("sortFilter").value;

    let result = employees.filter(emp => {

        const searchMatch =
            emp.name.toLowerCase().includes(searchValue) ||
            String(emp.id).includes(searchValue);

        const departmentMatch =
            department === "All" ||
            emp.department === department;

        const salaryMatch = emp.salary >= minSalary;

        return searchMatch && departmentMatch && salaryMatch;

    });

    if (sortType === "name") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    else if (sortType === "salaryLow") {
        result.sort((a, b) => a.salary - b.salary);
    }

    else if (sortType === "salaryHigh") {
        result.sort((a, b) => b.salary - a.salary);
    }

    displayEmployees(result);
}


// ==================================
// 7. SALARY CALCULATIONS
// ==================================

function calculateTotalSalary() {

    return employees.reduce(
        (total, emp) => total + emp.salary, 0
    );

}

function calculateAverageSalary() {

    if (employees.length === 0) return 0;

    return calculateTotalSalary() / employees.length;

}


// ==================================
// 8. DISPLAY DASHBOARD
// ==================================

function displayDashboard() {

    document.getElementById("totalEmployees")
        .textContent = employees.length;

    document.getElementById("totalSalary")
        .textContent = "₹" +
        calculateTotalSalary().toLocaleString("en-IN");

    document.getElementById("averageSalary")
        .textContent = "₹" +
        calculateAverageSalary().toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });

}


// ==================================
// 9. DEPARTMENT-WISE GROUPING
// ==================================

function groupEmployeesByDepartment() {

    const groups = employees.reduce((result, emp) => {

        const department = emp.department;

        if (!result[department]) {
            result[department] = [];
        }

        result[department].push(emp);

        return result;

    }, {});

    const container = document.getElementById("departmentGroups");

    container.innerHTML = "";

    Object.entries(groups).forEach(([department, members]) => {

        const card = document.createElement("div");

        card.className = "department-card";

        card.innerHTML = `
            <h3>${department}</h3>
            <p>Total Employees: ${members.length}</p>
            <p>Employees: ${members.map(emp => emp.name).join(", ")}</p>
        `;

        container.appendChild(card);

    });

}


// ==================================
// 10. ADD NEW EMPLOYEE
// ==================================

document.getElementById("employeeForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const newEmployee = {

            id: Number(document.getElementById("empId").value),

            name: document.getElementById("empName").value.trim(),

            department: document.getElementById("empDepartment").value,

            age: Number(document.getElementById("empAge").value),

            salary: Number(document.getElementById("empSalary").value)

        };

        if (employees.some(emp => emp.id === newEmployee.id)) {

            alert("Employee ID already exists!");

            return;
        }

        employees.push(newEmployee);

        this.reset();

        updateApplication();

        alert("Employee added successfully!");

    });


// ==================================
// 11. DELETE EMPLOYEE
// ==================================

document.getElementById("employeeTable")
    .addEventListener("click", function(event) {

        if (event.target.classList.contains("delete-btn")) {

            const id = Number(event.target.dataset.id);

            employees = employees.filter(emp => emp.id !== id);

            updateApplication();

        }

    });


// ==================================
// 12. UPDATE APPLICATION
// ==================================

function updateApplication() {

    displayFilteredEmployees();

    displayDashboard();

    groupEmployeesByDepartment();

}


// ==================================
// 13. EVENT LISTENERS
// ==================================

document.getElementById("searchInput")
    .addEventListener("input", displayFilteredEmployees);

document.getElementById("departmentFilter")
    .addEventListener("change", displayFilteredEmployees);

document.getElementById("salaryFilter")
    .addEventListener("input", displayFilteredEmployees);

document.getElementById("sortFilter")
    .addEventListener("change", displayFilteredEmployees);


// ==================================
// 14. INITIAL APPLICATION
// ==================================

updateApplication();
