
// ============================================================
// 1. FUNCTIONS
// ============================================================

// Normal Function
function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}


// Arrow Function
const greetEmployee = (name) => {
    return `Welcome, ${name}!`;
};


// Function with default parameter
function calculateExperience(years = 0) {
    return `${years} years of experience`;
}


// Calling Functions
console.log("========== FUNCTIONS ==========");

console.log(calculateSalary(30000, 5000));

console.log(greetEmployee("Sana"));

console.log(calculateExperience(2));



// ============================================================
// 2. OBJECT MANIPULATION
// ============================================================

console.log("\n========== OBJECT MANIPULATION ==========");


// Creating an Object
let employee = {
    id: 101,
    name: "Sana",
    age: 22,
    department: "Web Development",
    salary: 30000
};

console.log("Original Employee:");
console.log(employee);


// Accessing Object Properties
console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);


// Adding a new property
employee.location = "Warangal";


// Updating a property
employee.salary = 35000;


// Deleting a property
delete employee.age;


console.log("Updated Employee:");
console.log(employee);


// Object Destructuring
const { id, name, department } = employee;

console.log("Destructured Data:");
console.log(id, name, department);


// Object.keys()
console.log("Object Keys:");
console.log(Object.keys(employee));


// Object.values()
console.log("Object Values:");
console.log(Object.values(employee));


// Object.entries()
console.log("Object Entries:");
console.log(Object.entries(employee));



// ============================================================
// 3. HIGHER ORDER FUNCTIONS
// ============================================================

console.log("\n========== HIGHER ORDER FUNCTIONS ==========");


let employees = [
    {
        id: 101,
        name: "Sana",
        department: "Web Development",
        salary: 35000
    },

    {
        id: 102,
        name: "Rahul",
        department: "Testing",
        salary: 30000
    },

    {
        id: 103,
        name: "Ayesha",
        department: "Web Development",
        salary: 40000
    },

    {
        id: 104,
        name: "Arjun",
        department: "HR",
        salary: 28000
    }
];


// forEach()
console.log("All Employees:");

employees.forEach((employee) => {
    console.log(employee.name);
});


// map()
const employeeNames = employees.map((employee) => {
    return employee.name;
});

console.log("Employee Names:");
console.log(employeeNames);


// filter()
const webDevelopers = employees.filter((employee) => {
    return employee.department === "Web Development";
});

console.log("Web Developers:");
console.log(webDevelopers);


// find()
const selectedEmployee = employees.find((employee) => {
    return employee.id === 103;
});

console.log("Employee with ID 103:");
console.log(selectedEmployee);


// findIndex()
const employeeIndex = employees.findIndex((employee) => {
    return employee.id === 102;
});

console.log("Employee Index:", employeeIndex);


// reduce()
const totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);



// ============================================================
// 4. HIGHER ORDER FUNCTION - FUNCTION AS ARGUMENT
// ============================================================

console.log("\n========== FUNCTION AS ARGUMENT ==========");


function processEmployee(employee, callback) {

    console.log("Processing employee:", employee.name);

    callback(employee);
}


function displayEmployee(employee) {

    console.log(
        `Employee: ${employee.name}, Department: ${employee.department}`
    );
}


processEmployee(employees[0], displayEmployee);



// ============================================================
// 5. CLASSES
// ============================================================

console.log("\n========== CLASSES ==========");


// Parent Class
class Employee {

    constructor(id, name, salary) {

        this.id = id;
        this.name = name;
        this.salary = salary;

    }


    displayDetails() {

        console.log(
            `ID: ${this.id}, Name: ${this.name}, Salary: ₹${this.salary}`
        );

    }


    calculateAnnualSalary() {

        return this.salary * 12;

    }

}


// Creating Object from Class
const emp1 = new Employee(
    105,
    "John",
    30000
);

emp1.displayDetails();

console.log(
    "Annual Salary:",
    emp1.calculateAnnualSalary()
);



// ============================================================
// 6. INHERITANCE
// ============================================================


// Child Class
class Developer extends Employee {

    constructor(id, name, salary, programmingLanguage) {

        super(id, name, salary);

        this.programmingLanguage = programmingLanguage;

    }


    displayDetails() {

        console.log(
            `Developer: ${this.name}, Language: ${this.programmingLanguage}, Salary: ₹${this.salary}`
        );

    }


    writeCode() {

        console.log(
            `${this.name} is writing ${this.programmingLanguage} code.`
        );

    }

}


// Creating Developer Object
const developer1 = new Developer(
    106,
    "Sana",
    40000,
    "JavaScript"
);


developer1.displayDetails();

developer1.writeCode();

console.log(
    "Annual Salary:",
    developer1.calculateAnnualSalary()
);



// ============================================================
// 7. PROMISE
// ============================================================

console.log("\n========== PROMISE ==========");


function fetchEmployeeData() {

    return new Promise((resolve, reject) => {

        console.log("Fetching employee data...");


        setTimeout(() => {

            const success = true;


            if (success) {

                resolve(
                    "Employee data fetched successfully"
                );

            } else {

                reject(
                    "Failed to fetch employee data"
                );

            }

        }, 2000);

    });

}


// Promise handling
fetchEmployeeData()
    .then((message) => {

        console.log("SUCCESS:", message);

    })
    .catch((error) => {

        console.log("ERROR:", error);

    });



// ============================================================
// 8. ASYNC / AWAIT
// ============================================================


async function processEmployeeData() {

    console.log("\n========== ASYNC / AWAIT ==========");

    console.log("Starting employee processing...");


    try {

        const result = await fetchEmployeeData();


        console.log("Result:", result);

        console.log(
            "Employee processing completed."
        );

    } catch (error) {

        console.log("Error:", error);

    }

}


processEmployeeData();



// ============================================================
// 9. EVENT LOOP
// ============================================================

console.log("\n========== EVENT LOOP ==========");


console.log("1. Synchronous Code");


setTimeout(() => {

    console.log("4. setTimeout - Macrotask");

}, 0);


Promise.resolve().then(() => {

    console.log("3. Promise - Microtask");

});


console.log("2. Synchronous Code");



// ============================================================
// 10. MODERN ES6+ FEATURES
// ============================================================

console.log("\n========== ES6+ FEATURES ==========");


// Spread Operator
const employeeCopy = {
    ...employee
};

console.log("Employee Copy:");
console.log(employeeCopy);


// Rest Operator
function calculateTotal(...numbers) {

    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);

}

console.log(
    "Total:",
    calculateTotal(100, 200, 300, 400)
);


// Template Literals
console.log(
    `Employee ${employee.name} works in ${employee.department}.`
);


// Optional Chaining
console.log(
    "Phone:",
    employee.contact?.phone
);


// Nullish Coalescing
const city = employee.city ?? "City Not Available";

console.log(
    "City:",
    city
);


// Ternary Operator
const status = employee.salary >= 30000
    ? "Eligible"
    : "Not Eligible";

console.log(
    "Salary Status:",
    status
);



// ============================================================
// 11. PRACTICAL TASK PROCESSING SYSTEM
// ============================================================

console.log("\n========== TASK MANAGEMENT ==========");


const tasks = [
    {
        id: 1,
        title: "Create Login Page",
        status: "completed"
    },

    {
        id: 2,
        title: "Create Dashboard",
        status: "pending"
    },

    {
        id: 3,
        title: "Test Application",
        status: "pending"
    }
];


// Display tasks
tasks.forEach((task) => {

    console.log(
        `${task.id}. ${task.title} - ${task.status}`
    );

});


// Get pending tasks
const pendingTasks = tasks.filter((task) => {

    return task.status === "pending";

});

console.log("Pending Tasks:");
console.log(pendingTasks);


// Convert task names
const taskNames = tasks.map((task) => {

    return task.title;

});

console.log("Task Names:");
console.log(taskNames);



// ============================================================
// 12. ASYNCHRONOUS TASK PROCESSING
// ============================================================

function completeTask(task) {

    return new Promise((resolve) => {

        setTimeout(() => {

            task.status = "completed";

            resolve(
                `${task.title} completed successfully`
            );

        }, 1500);

    });

}


async function completePendingTasks() {

    console.log(
        "\nStarting pending task processing..."
    );


    for (const task of pendingTasks) {

        const result = await completeTask(task);

        console.log(result);

    }


    console.log(
        "All pending tasks completed!"
    );

}


completePendingTasks();



// ============================================================
// 13. FINAL MESSAGE
// ============================================================

console.log(
    "========== APPLICATION STARTED =========="
);

console.log(
    "Employee Management System is running..."
);