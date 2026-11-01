
// =====================================================
// 1. JAVASCRIPT EVENT LOOP
// Real-time example: Employee login process
// =====================================================

console.log("\n--- 1. EVENT LOOP ---");

console.log("1. Employee opens the application");

setTimeout(() => {
    console.log("3. Employee notification received");
}, 0);

console.log("2. Employee dashboard is loading");

// Output:
// 1. Employee opens the application
// 2. Employee dashboard is loading
// 3. Employee notification received


// =====================================================
// 2. CONVERT CALLBACKS INTO PROMISES
// Real-time example: Fetch employee details
// =====================================================

console.log("\n--- 2. CALLBACK TO PROMISE ---");

function getEmployeeCallback(callback) {
    setTimeout(() => {
        const employee = {
            id: 1,
            name: "Rahul",
            department: "IT"
        };

        callback(null, employee);
    }, 500);
}

getEmployeeCallback((error, employee) => {
    if (error) {
        console.log("Error:", error.message);
        return;
    }

    console.log("Callback employee:", employee.name);
});

// Promise version of the same operation
function getEmployeePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const employee = {
                id: 1,
                name: "Rahul",
                department: "IT"
            };

            resolve(employee);
        }, 500);
    });
}

getEmployeePromise()
    .then(employee => {
        console.log("Promise employee:", employee.name);
    })
    .catch(error => {
        console.log("Promise error:", error.message);
    });


// =====================================================
// 3. PROMISE CHAINING
// Real-time example: Employee salary calculation
// =====================================================

console.log("\n--- 3. PROMISE CHAINING ---");

function getMonthlySalary() {
    return Promise.resolve(30000);
}

getMonthlySalary()
    .then(salary => {
        console.log("Monthly salary:", salary);
        return salary * 12;
    })
    .then(annualSalary => {
        console.log("Annual salary:", annualSalary);
        return annualSalary + 5000;
    })
    .then(total => {
        console.log("Annual salary with bonus:", total);
    })
    .catch(error => {
        console.log("Salary error:", error.message);
    });


// =====================================================
// 4. PROMISE TO ASYNC/AWAIT
// Real-time example: Load employee details
// =====================================================

console.log("\n--- 4. ASYNC/AWAIT ---");

function fetchEmployeeDetails() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 2,
                name: "Priya",
                department: "HR"
            });
        }, 500);
    });
}

async function displayEmployeeDetails() {
    const employee = await fetchEmployeeDetails();

    console.log("Employee name:", employee.name);
    console.log("Department:", employee.department);
}

displayEmployeeDetails();


// =====================================================
// 5. ERROR HANDLING USING TRY...CATCH
// Real-time example: Invalid employee ID
// =====================================================

console.log("\n--- 5. TRY AND CATCH ---");

async function findEmployee() {
    try {
        const employeeId = 0;

        if (employeeId <= 0) {
            throw new Error("Employee ID must be greater than zero");
        }

        console.log("Employee ID:", employeeId);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Employee lookup completed");
    }
}

findEmployee();


// =====================================================
// 6. CONSUME A PUBLIC REST API
// Real-time example: Fetch employee-like user data
// API: JSONPlaceholder
// =====================================================

console.log("\n--- 6. PUBLIC REST API ---");

async function getPublicUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log("First user:", users[0].name);
        console.log("Total users:", users.length);
    } catch (error) {
        console.log("API error:", error.message);
    }
}

getPublicUsers();


// =====================================================
// 7. GET, POST, PUT, PATCH AND DELETE
// Real-time example: Manage an employee record
// =====================================================

console.log("\n--- 7. HTTP METHODS ---");

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function apiRequest(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
    }

    // DELETE commonly returns an empty response
    if (response.status === 204) {
        return null;
    }

    return response.json();
}

async function demonstrateHttpMethods() {
    try {
        // GET: Read an employee-like record
        const employee = await apiRequest(API_URL + "/1");
        console.log("GET employee:", employee.name);

        // POST: Create a record
        const newEmployee = await apiRequest(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Anu",
                email: "anu@example.com"
            })
        });

        console.log("POST created ID:", newEmployee.id);

        // PUT: Replace/update the record
        const updatedEmployee = await apiRequest(API_URL + "/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Rahul Updated",
                email: "rahul@example.com"
            })
        });

        console.log("PUT updated name:", updatedEmployee.name);

        // PATCH: Update selected fields
        const patchedEmployee = await apiRequest(API_URL + "/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Rahul Patched"
            })
        });

        console.log("PATCH updated name:", patchedEmployee.name);

        // DELETE: Remove the record
        await apiRequest(API_URL + "/1", {
            method: "DELETE"
        });

        console.log("DELETE request completed");
    } catch (error) {
        console.log("HTTP operation error:", error.message);
    }
}

demonstrateHttpMethods();


// =====================================================
// 8. LOADING AND ERROR MESSAGES
// Real-time example: Loading the employee list
// =====================================================

console.log("\n--- 8. LOADING AND ERROR UI ---");

async function loadEmployeesOnPage() {
    const status = document.getElementById("status");
    const output = document.getElementById("output");

    status.textContent = "Loading employees...";
    output.textContent = "";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to load employees");
        }

        const employees = await response.json();

        status.textContent = "Employees loaded successfully";

        const list = document.createElement("ul");

        employees.forEach(employee => {
            const item = document.createElement("li");
            item.textContent = employee.name;
            list.appendChild(item);
        });

        output.appendChild(list);

        console.log("Employee list loaded:", employees.length);
    } catch (error) {
        status.textContent = "Error: " + error.message;
        console.log("Loading failed:", error.message);
    }
}

loadEmployeesOnPage();


// =====================================================
// 9. PROMISE UTILITY METHODS
// Real-time example: Several employee services
// =====================================================

console.log("\n--- 9. PROMISE METHODS ---");

const employeeService1 = Promise.resolve("Employee profile loaded");

const employeeService2 = Promise.resolve("Employee salary loaded");

const failedService = Promise.reject(
    new Error("Attendance service unavailable")
);

// Promise.all: succeeds only if all promises fulfill
Promise.all([employeeService1, employeeService2])
    .then(results => console.log("Promise.all:", results))
    .catch(error => console.log("Promise.all error:", error.message));

// Promise.allSettled: reports every result
Promise.allSettled([
    employeeService1,
    failedService
]).then(results => {
    console.log("Promise.allSettled:", results);
});

// Promise.race: settles with the first settled promise
Promise.race([
    new Promise(resolve =>
        setTimeout(() => resolve("Profile service responded"), 100)
    ),
    new Promise(resolve =>
        setTimeout(() => resolve("Salary service responded"), 200)
    )
]).then(result => console.log("Promise.race:", result));

// Promise.any: returns the first fulfilled promise
Promise.any([
    Promise.reject(new Error("Service 1 failed")),
    Promise.resolve("Service 2 succeeded")
]).then(result => console.log("Promise.any:", result));


// =====================================================
// 10. REUSABLE MODULES
// Real-time example: Employee utility functions
// Single-file demonstration of the module pattern
// =====================================================

console.log("\n--- 10. REUSABLE MODULE PATTERN ---");

const EmployeeUtils = (() => {
    function formatName(name) {
        return name.trim().toUpperCase();
    }

    function calculateAnnualSalary(monthlySalary) {
        return monthlySalary * 12;
    }

    return {
        formatName,
        calculateAnnualSalary
    };
})();

console.log("Formatted name:", EmployeeUtils.formatName(" rahul "));
console.log(
    "Annual salary:",
    EmployeeUtils.calculateAnnualSalary(30000)
);


// =====================================================
// 11. SEPARATE API LOGIC FROM APPLICATION LOGIC
// Real-time example: Display employees using an API service
// =====================================================

console.log("\n--- 11. API AND APP SEPARATION ---");

// API layer: Responsible only for communicating with the server
const EmployeeAPI = {
    async getEmployees() {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Could not retrieve employees");
        }

        return response.json();
    }
};

// Application layer: Responsible for using and displaying data
async function startEmployeeApp() {
    const status = document.getElementById("status");
    const output = document.getElementById("output");

    try {
        status.textContent = "Loading employees from API...";

        const employees = await EmployeeAPI.getEmployees();

        output.textContent = "";

        const list = document.createElement("ul");

        employees.forEach(employee => {
            const item = document.createElement("li");
            item.textContent = employee.name;
            list.appendChild(item);
        });

        output.appendChild(list);
        status.textContent = "Application ready";

        console.log("Application employee count:", employees.length);
    } catch (error) {
        status.textContent = error.message;
        console.log("Application error:", error.message);
    }
}

startEmployeeApp();

console.log("\n--- ALL EXAMPLES STARTED ---");
