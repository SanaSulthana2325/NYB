
// ==========================================
// 1. OBJECT ORIENTED PROGRAMMING (OOP)
// ==========================================

// Employee class
class Employee {
    constructor(name, role) {
        this.id = Date.now() + Math.random();
        this.name = name;
        this.role = role;
    }
}

// Task class
class Task {
    constructor(title, employeeId, priority) {
        this.id = Date.now() + Math.random();
        this.title = title;
        this.employeeId = employeeId;
        this.priority = priority;
        this.status = "Pending";
        this.date = new Date();
    }

    // Method to change task status
    toggleStatus() {
        this.status =
            this.status === "Pending"
                ? "Completed"
                : "Pending";
    }
}


// ==========================================
// 2. LOCAL STORAGE
// ==========================================

let employees = JSON.parse(
    localStorage.getItem("employees")
) || [];

let tasks = JSON.parse(
    localStorage.getItem("tasks")
) || [];

function saveData() {
    try {
        localStorage.setItem(
            "employees",
            JSON.stringify(employees)
        );

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );
    } catch (error) {
        alert("Unable to save data: " + error.message);
    }
}


// ==========================================
// 3. REUSABLE FUNCTIONS
// ==========================================

function getElement(id) {
    return document.getElementById(id);
}

function showMessage(message) {
    console.log(message);
}


// ==========================================
// 4. ADD EMPLOYEE
// ==========================================

getElement("addEmployeeBtn").addEventListener("click", function () {

    let name = getElement("employeeName").value.trim();
    let role = getElement("employeeRole").value.trim();

    if (name === "" || role === "") {
        alert("Please enter employee name and role");
        return;
    }

    let employee = new Employee(name, role);

    employees.push(employee);

    saveData();
    displayEmployees();

    getElement("employeeName").value = "";
    getElement("employeeRole").value = "";

    showMessage("Employee added successfully");
});


// ==========================================
// 5. DISPLAY EMPLOYEES
// ==========================================

function displayEmployees() {

    let employeeList = getElement("employeeList");
    let employeeDropdown = getElement("taskEmployee");

    employeeList.innerHTML = "";
    employeeDropdown.innerHTML =
        '<option value="">Select Employee</option>';

    employees.forEach(function(employee) {

        employeeList.innerHTML += `
            <p>
                ${escapeHTML(employee.name)}
                - ${escapeHTML(employee.role)}
            </p>
        `;

        employeeDropdown.innerHTML += `
            <option value="${employee.id}">
                ${escapeHTML(employee.name)}
            </option>
        `;
    });

    updateDashboard();
}


// ==========================================
// 6. ADD TASK
// ==========================================

getElement("addTaskBtn").addEventListener("click", function() {

    let title = getElement("taskTitle").value.trim();

    let employeeId = getElement("taskEmployee").value;

    let priority = getElement("priority").value;

    if (title === "" || employeeId === "") {
        alert("Please enter task details and select employee");
        return;
    }

    let task = new Task(title, employeeId, priority);

    tasks.push(task);

    saveData();
    displayTasks();

    getElement("taskTitle").value = "";
    getElement("taskEmployee").value = "";

    showMessage("Task added successfully");
});


// ==========================================
// 7. ADVANCED ARRAY METHODS
// FILTER, FIND, MAP AND SORT
// ==========================================

function getFilteredTasks() {

    let search = getElement("searchTask").value.toLowerCase();

    let status = getElement("filterStatus").value;

    let sort = getElement("sortTasks").value;

    // FILTER: Search tasks by title or employee
    let result = tasks.filter(function(task) {

        let employee = employees.find(function(emp) {
            return emp.id == task.employeeId;
        });

        let titleMatch = task.title.toLowerCase().includes(search);

        let employeeMatch = employee &&
            employee.name.toLowerCase().includes(search);

        let statusMatch =
            status === "All" || task.status === status;

        return (titleMatch || employeeMatch) && statusMatch;
    });

    // SORT: Arrange tasks
    if (sort === "Title") {

        result.sort(function(a, b) {
            return a.title.localeCompare(b.title);
        });

    } else if (sort === "Priority") {

        let priorityOrder = {
            High: 1,
            Medium: 2,
            Low: 3
        };

        result.sort(function(a, b) {
            return priorityOrder[a.priority] -
                   priorityOrder[b.priority];
        });

    } else {

        result.sort(function(a, b) {
            return b.id - a.id;
        });
    }

    return result;
}


// ==========================================
// 8. DISPLAY TASKS
// ==========================================

function displayTasks() {

    let taskList = getElement("taskList");

    // Get filtered and sorted tasks
    let filteredTasks = getFilteredTasks();

    // MAP: Convert task objects into HTML
    taskList.innerHTML = filteredTasks.map(function(task) {

        let employee = employees.find(function(emp) {
            return emp.id == task.employeeId;
        });

        let statusClass =
            task.status === "Completed" ? "completed" : "";

        return `
            <div class="task" data-id="${task.id}">

                <h3>${escapeHTML(task.title)}</h3>

                <p>
                    Employee:
                    ${escapeHTML(employee?.name || "Unknown")}
                </p>

                <p>
                    Priority:
                    ${escapeHTML(task.priority)}
                </p>

                <p class="${statusClass}">
                    Status: ${task.status}
                </p>

                <button data-action="toggle">
                    ${task.status === "Pending"
                        ? "Complete"
                        : "Reopen"}
                </button>

                <button class="delete" data-action="delete">
                    Delete
                </button>

            </div>
        `;

    }).join("");

    updateDashboard();
}


// ==========================================
// 9. EVENT DELEGATION
// ==========================================

// One event listener handles all task buttons

getElement("taskList").addEventListener("click", function(event) {

    let button = event.target.closest("button[data-action]");

    if (!button) return;

    let taskElement = button.closest(".task");

    let taskId = Number(taskElement.dataset.id);

    let task = tasks.find(function(item) {
        return item.id === taskId;
    });

    if (!task) return;

    if (button.dataset.action === "toggle") {

        task.toggleStatus();

    } else if (button.dataset.action === "delete") {

        tasks = tasks.filter(function(item) {
            return item.id !== taskId;
        });
    }

    saveData();
    displayTasks();
});


// ==========================================
// 10. DASHBOARD
// ==========================================

function updateDashboard() {

    let completed = tasks.filter(function(task) {
        return task.status === "Completed";
    }).length;

    let pending = tasks.filter(function(task) {
        return task.status === "Pending";
    }).length;

    getElement("employeeCount").textContent = employees.length;

    getElement("taskCount").textContent = tasks.length;

    getElement("completedCount").textContent = completed;

    getElement("pendingCount").textContent = pending;
}


// ==========================================
// 11. CLOSURES - DEBOUNCING
// ==========================================

function debounce(callback, delay) {

    let timer;

    return function() {

        clearTimeout(timer);

        timer = setTimeout(function() {
            callback();
        }, delay);

    };
}

// Search runs after the user stops typing

getElement("searchTask").addEventListener(
    "input",
    debounce(displayTasks, 300)
);


// ==========================================
// 12. THROTTLING
// ==========================================

function throttle(callback, delay) {

    let waiting = false;

    return function() {

        if (waiting) return;

        callback();

        waiting = true;

        setTimeout(function() {
            waiting = false;
        }, delay);
    };
}


// ==========================================
// 13. FILTER AND SORT EVENTS
// ==========================================

getElement("filterStatus").addEventListener(
    "change",
    displayTasks
);

getElement("sortTasks").addEventListener(
    "change",
    displayTasks
);


// ==========================================
// 14. PROMISE HANDLING
// ==========================================

function delay(ms) {

    return new Promise(function(resolve, reject) {

        if (ms < 0) {
            reject(new Error("Invalid delay"));
        } else {
            setTimeout(function() {
                resolve("Operation completed");
            }, ms);
        }

    });
}

// Promise using then() and catch()

delay(1000)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error.message);
    });


// ==========================================
// 15. ASYNC / AWAIT AND API INTEGRATION
// ==========================================

// Add API button dynamically

let apiButton = document.createElement("button");

apiButton.textContent = "Load Sample Tasks from API";

apiButton.id = "apiButton";

getElement("taskList").parentElement.appendChild(apiButton);


// Fetch tasks from an external API

async function loadAPITasks() {

    try {

        apiButton.disabled = true;
        apiButton.textContent = "Loading...";

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        let data = await response.json();

        // Create an employee if none exists
        if (employees.length === 0) {

            employees.push(
                new Employee("API Employee", "Developer")
            );
        }

        // Convert API data into Task objects
        data.forEach(function(item) {

            let task = new Task(
                item.title,
                employees[0].id,
                item.completed ? "Low" : "Medium"
            );

            task.status = item.completed
                ? "Completed"
                : "Pending";

            tasks.push(task);
        });

        saveData();
        displayTasks();

        alert("5 sample tasks loaded successfully!");

    } catch (error) {

        console.error(error);

        alert("Error: " + error.message);

    } finally {

        apiButton.disabled = false;
        apiButton.textContent = "Load Sample Tasks from API";
    }
}


// Throttle the API button

apiButton.addEventListener(
    "click",
    throttle(loadAPITasks, 1000)
);


// ==========================================
// 16. PERFORMANCE AND CLEAN CODE
// ==========================================

// Prevent unsafe HTML insertion for user-provided text

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, function(char) {

        let entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[char];
    });
}


// ==========================================
// 17. INITIALIZE APPLICATION
// ==========================================

function initializeApp() {

    displayEmployees();

    displayTasks();

    console.log("Task Management Application Started");
}

initializeApp();
