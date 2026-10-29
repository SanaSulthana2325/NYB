// async keyword
// The async keyword is used before a function declaration to make that function return a Promise.

// Even if you return a normal value from an async function, JavaScript wraps that value in a fulfilled Promise.


async function calculateTotal(){
    return 1500;
}
calculateTotal().then(total =>{
    console.log("Total amount:", total)
});

// 
async function getPrice(){
    return 2500;
}
console.log(getPrice())


// await keyword
// The await keyword pauses the execution of the surrounding async function until a Promise settles. If the Promise fulfills, await gives you its result. If it rejects, await throws the rejection reason.


function getEmployee() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Employee: Rahul");
        }, 2000);
    });
}

async function displayEmployee() {
    console.log("Loading employee details...");

    const result = await getEmployee();

    console.log(result);
    console.log("Employee details displayed");
}

displayEmployee();


// Error handling with try...catch
// Sometimes an asynchronous operation fails. For example, a login request may fail because the password is incorrect, or an API server may be unavailable.

// We use try...catch to handle these errors without letting them become unhandled Promise rejections.
// - try contains code that may fail.
// - catch handles an error thrown inside try, including a rejection thrown by await.

function loginUser() {
    return new Promise((resolve, reject) => {
        const passwordCorrect = false;

        setTimeout(() => {
            if (passwordCorrect) {
                resolve("Login successful!");
            } else {
                reject(new Error("Incorrect password!"));
            }
        }, 1000);
    });
}

async function login() {
    try {
        console.log("Checking login details...");

        const message = await loginUser();

        console.log(message);
    } catch (error) {
        console.log("Login error:", error.message);
    }
}

login();


// Multiple async operations
// In real applications, you often need to perform several asynchronous operations.

// For example, an employee dashboard may need to load:
// 1. Employee details.
// 2. Department details.
// 3. Salary details.


function loginUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("1. Login successful");
            resolve({ userId: 101 });
        }, 1000);
    });
}

function getProfile(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("2. Profile loaded for user", userId);
            resolve("Affu");
        }, 1000);
    });
}

async function loadDashboard() {
    const user = await loginUser();
    const name = await getProfile(user.userId);

    console.log("3. Welcome", name);
}

loadDashboard();

//Parallel execution — at the same time

function getEmployees() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Employees loaded");
        }, 2000);
    });
}

function getDepartments() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Departments loaded");
        }, 2000);
    });
}

function getSalary() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Salary details loaded");
        }, 2000);
    });
}

async function loadDashboard() {
    const [employees, departments, salary] = await Promise.all([
        getEmployees(),
        getDepartments(),
        getSalary()
    ]);

    console.log(employees);
    console.log(departments);
    console.log(salary);
    console.log("Dashboard loaded successfully");
}

loadDashboard();


// Sequential	                              Parallel
// Operations run one after another.	   Independent operations run concurrently.
// Use await before each operation.	   Use Promise.all() with multiple Promises.
// Useful when one result is needed 
// by the next operation.	                 Useful for loading independent API data.
// Three 2-second operations take about 6  
// seconds.	                               Three 2-second operations take about 2 seconds.



// Concept	                What it does
// async	          Makes a function return a Promise.
// await	         Waits for a Promise's result inside an async function.
// try	               Contains code that may throw an error.
// catch	            Handles an error or rejected Promise.
// Sequential await	 Runs dependent operations in order.
// Promise.all()	   Waits for multiple Promises to fulfill and collects their results.