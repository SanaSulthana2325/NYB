
console.log("Employee Management System Started");

// =====================================
// 1. PARENT CLASS - EMPLOYEE
// =====================================

class Employee {

    // Private salary property
    #salary;

    // Static ID counter
    static nextId = 1;

    constructor(name, department, salary) {

        this.id = Employee.nextId++;

        this.name = name;
        this.department = department;

        this.#salary = salary;
    }

    // Getter
    get salary() {
        return this.#salary;
    }

    // Setter
    set salary(newSalary) {

        if (newSalary > 0) {
            this.#salary = newSalary;
        } else {
            throw new Error("Salary must be greater than zero");
        }

    }

    // Reusable method
    displayDetails() {

        return "Regular Employee";

    }

}


// =====================================
// 2. CHILD CLASS - MANAGER
// =====================================

class Manager extends Employee {

    constructor(name, department, salary, teamSize) {

        // Calling parent constructor
        super(name, department, salary);

        this.teamSize = teamSize;

    }

    // Overriding parent method
    displayDetails() {

        return "Manages a team of " + this.teamSize + " employees";

    }

}


// =====================================
// 3. EMPLOYEE MANAGEMENT CLASS
// =====================================

class EmployeeManagement {

    constructor() {

        this.employees = [];

    }

    // Add employee
    addEmployee(employee) {

        this.employees.push(employee);

        console.log("Employee added:", employee.name);

    }

    // Delete employee
    deleteEmployee(id) {

        this.employees = this.employees.filter(
            employee => employee.id !== id
        );

        this.displayEmployees();

    }

    // Search employee
    searchEmployee(searchText) {

        let searchValue = searchText.toLowerCase();

        return this.employees.filter(employee => {

            return (
                employee.name.toLowerCase().includes(searchValue) ||
                employee.department.toLowerCase().includes(searchValue)
            );

        });

    }

    // Display employees
    displayEmployees(employeeList = this.employees) {

        const tableBody =
            document.getElementById("employeeTableBody");

        const emptyMessage =
            document.getElementById("emptyMessage");

        const employeeCount =
            document.getElementById("employeeCount");

        // Clear previous rows
        tableBody.innerHTML = "";

        // Update total employee count
        employeeCount.textContent = this.employees.length;

        // Show empty message when no results
        emptyMessage.style.display =
            employeeList.length === 0 ? "block" : "none";

        // Create table rows
        employeeList.forEach(employee => {

            const row = document.createElement("tr");

            const values = [
                employee.id,
                employee.name,
                employee.department,
                employee instanceof Manager ? "Manager" : "Employee",
                "₹" + employee.salary,
                employee.displayDetails()
            ];

            values.forEach(value => {

                const cell = document.createElement("td");

                cell.textContent = value;

                row.appendChild(cell);

            });

            // Create delete button
            const actionCell = document.createElement("td");

            const deleteButton = document.createElement("button");

            deleteButton.textContent = "Delete";

            deleteButton.className = "delete-btn";

            deleteButton.dataset.id = employee.id;

            actionCell.appendChild(deleteButton);

            row.appendChild(actionCell);

            tableBody.appendChild(row);

        });

    }

}


// =====================================
// 4. CREATE MANAGEMENT OBJECT
// =====================================

const management = new EmployeeManagement();


// =====================================
// 5. FORM SUBMISSION
// =====================================

const employeeForm =
    document.getElementById("employeeForm");

employeeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    const name =
        document.getElementById("name").value.trim();

    const department =
        document.getElementById("department").value.trim();

    const salary =
        Number(document.getElementById("salary").value);

    const role =
        document.getElementById("role").value;

    const teamSize =
        Number(document.getElementById("teamSize").value);

    const message =
        document.getElementById("message");

    // Basic validation
    if (!name || !department || salary <= 0) {

        message.style.color = "red";
        message.textContent = "Please enter valid employee details.";

        return;

    }

    let employee;

    // Create object based on role
    if (role === "Manager") {

        if (!Number.isInteger(teamSize) || teamSize <= 0) {

            message.style.color = "red";
            message.textContent = "Please enter a valid team size.";

            return;

        }

        employee = new Manager(
            name,
            department,
            salary,
            teamSize
        );

    } else {

        employee = new Employee(
            name,
            department,
            salary
        );

    }

    // Add employee
    management.addEmployee(employee);

    // Update table
    management.displayEmployees();

    // Success message
    message.style.color = "green";
    message.textContent = "Employee added successfully!";

    // Clear form
    employeeForm.reset();

});


// =====================================
// 6. DELETE EMPLOYEE
// =====================================

document
    .getElementById("employeeTableBody")
    .addEventListener("click", function(event) {

        if (event.target.classList.contains("delete-btn")) {

            const id = Number(event.target.dataset.id);

            management.deleteEmployee(id);

            document.getElementById("message").textContent =
                "Employee deleted successfully!";

        }

    });


// =====================================
// 7. SEARCH EMPLOYEE
// =====================================

document
    .getElementById("searchInput")
    .addEventListener("input", function() {

        const searchText = this.value;

        const result = management.searchEmployee(searchText);

        management.displayEmployees(result);

    });


// =====================================
// 8. INITIAL DISPLAY
// =====================================

management.displayEmployees();

console.log("Application Ready");
