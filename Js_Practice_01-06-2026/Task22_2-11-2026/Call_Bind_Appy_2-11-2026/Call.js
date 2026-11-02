// call() method
// What is call()?
// The call() method invokes a function immediately and lets you specify what this refers to. You can pass function arguments one by one.

function showSalary(bonus,allowance){
    console.log("Employee Name:",this.name);
    console.log("Basic Salary:",this.salary);
    console.log("Bonus:",bonus);
    console.log("Allowance:",allowance);

    console.log("Total Salary:", this.salary + bonus + allowance);

}

const employee1 = {
    name:"Rahul",
    salary:30000
};

const employee2 = {
    name:"sam",
    salary:40000
};

showSalary.call(employee1, 5000,2000);

console.log("-------------");

showSalary.call(employee2,6000,3000);



// apply() method
// What is apply()?
// The apply() method also invokes a function immediately and sets the value of this. The difference is that it accepts the function's arguments as an array (or another array-like object).



function calculatePayment(bonus, allowance) {
    console.log("Employee Name:", this.name);
    console.log("Basic Salary:", this.salary);
    console.log("Bonus:", bonus);
    console.log("Allowance:", allowance);

    console.log(
        "Total Payment:",
        this.salary + bonus + allowance
    );
}

const employee = {
    name: "Anu",
    salary: 25000
};

const extraPayments = [3000, 1500];

calculatePayment.apply(employee, extraPayments);


// bind() method
// What is bind()?
// The bind() method creates and returns a new function with a specific this value. It does not execute the function immediately.



function showEmployee(role) {
    console.log("Employee Name:", this.name);
    console.log("Employee Role:", role);
}

const employee3 = {
    name: "Rahul"
};

const showRahulDetails = showEmployee.bind(employee3);

console.log("Function created successfully");

showRahulDetails("Developer");
showRahulDetails("Team Leader");



// Feature                        call()	              apply()	                             bind()

// Executes immediately?	        Yes	                     Yes	                               No

// Sets this?	                      Yes	                  Yes	                              Yes

// How are arguments passed?	Individually	    As an array or array-like object	   Individually when binding or calling

// What does it return?	   The function's result	The function's result	              A new function

// Common use	              Immediate function call	Passing existing argument arrays	Reusing a function later


//

function greet(greeting) {
    console.log(greeting + ", " + this.name);
}

const person = {
    name: "Priya"
};

// call(): executes immediately
greet.call(person, "Hello");

// apply(): executes immediately with an array of arguments
greet.apply(person, ["Welcome"]);

// bind(): returns a function for later
const greetPerson = greet.bind(person, "Good morning");
greetPerson();
