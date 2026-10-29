// Function Declaration
// A function declaration defines a function using the function keyword and a function name.

function calculateTotal(){
    let price = 500;
    let quantity = 3;

    let total = price * quantity;

    console.log(total);
}

calculateTotal();


// Function Expression
// A function expression stores a function inside a variable.


const calculateSalary = function(){
    let basicSalary = 30000;

    let bonus = 4000;

    console.log(basicSalary + bonus);
};

calculateSalary();


// Arrow Functions
// An arrow function is a shorter way to write a function, using =>.


const calculateDiscount = (price,discount) =>{
    return price - (price * discount/100);
};
console.log(calculateDiscount(1000,40));

//

const double = number => number * 4;

console.log(double(5));


// Parameters
// Parameters are variable names listed inside a function's parentheses. They receive values when the function is called.


function greetEmp(name){
    console.log("Welcome," + name)
}

greetEmp("Mira");
greetEmp("Ayesha");


// Arguments
// Arguments are the actual values passed to a function when calling it.

function calculateTotal(price,quantity){
    console.log(price * quantity);
}

calculateTotal(200,4);
calculateTotal(400,5);

//
function calculateTotal1(price,quantity){
    console.log(price % quantity);

}
calculateTotal1(500,8);


// Default Parameters
// A default parameter provides a fallback value when an argument is missing or undefined.

function calculateBill(foodPrice,deliveryCharger = 40){
    console.log(foodPrice + deliveryCharger);
}

calculateBill(200);
calculateBill(400,80);


// Rest Parameters
// A rest parameter allows a function to accept any number of arguments and collect them into an array. It uses three dots (...).

function calculateBonuses(...bonuses){
    let total = 0;
    for(let bonus of bonuses){
        total = total + bonus;
    }

    console.log(total);
}

calculateBonuses(1000,2000,1500);
calculateBonuses(3087,654);


// Return Values
// The return statement sends a result back to the code that called the function.


function calculateTotal2(price,quantity){
    return price * quantity;
}

const result = calculateTotal2(500,5);

console.log(result);
console.log(result + 200);


// console.log() vs return

// console.log()	                                 return
// Displays a value in the console.	           Sends a value back to the caller.
// Does not itself provide a reusable result.	  Allows the result to be stored or calculated with.


function add1(){
    console.log(10 + 20);
}

function add2(){
    return 10 + 20;
}

const result1 = add2();
console.log(result1)


// Callback Functions
// A callback function is a function passed as an argument to another function, so the receiving function can execute it.


function LoginEmp(name,callback){
    console.log(name + " logged in successfully.");

    callback();
}

function showDashboard(){
    console.log("Opening employee dashboard...");
}

LoginEmp("Fatima",showDashboard);


// Higher-Order Functions
// A higher-order function is a function that accepts another function as an argument, returns a function, or does both.


function applyDiscount(price,discountFunction){
    return discountFunction(price);
}

function tenPercentDiscount(price){
    return price * 0.90;
}

function twentyPercentDiscount(price){
    return price * 0.80;
}

console.log(applyDiscount(1000,tenPercentDiscount));
console.log(applyDiscount(600,twentyPercentDiscount));


//

const prices = [100,150,200,250,300,350];

const increasedPrices = prices.map(price => price + 50);

console.log(increasedPrices);


// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function expression that runs immediately after it is created.

(function(){
    const appName = "Employee Portal";
    console.log(appName);
})();


// Pure Functions
// A pure function produces the same output for the same inputs and does not cause side effects, such as modifying external variables or changing the DOM

function calculateAnnualSalary(monthlySalary){
    return monthlySalary * 12;
}

console.log(calculateAnnualSalary(56000));
console.log(calculateAnnualSalary(62000));


// Function Scope
// Function scope means that a variable declared inside a function is accessible within that function, but not directly outside it.

function calSalary(){
    let Salary = 30000;

    console.log("Salary inside:",Salary);
}
calSalary();
console.log("Salary outside:",typeof salary);


// Lexical Scope
// Lexical scope means a function can access variables from the scope in which it was defined, including an outer function's scope.

function companyPortal(){
    const companyName = "Sam Comapny";
    function showCompany(){
        console.log(companyName);
    }

    showCompany();
}

companyPortal();

//

const msg = "Global message";

function showMsg(){
    console.log(msg);
}

function anotherFunction(){
    const msg = "Local message";
    showMsg(); 
}

anotherFunction()


// Closures
// A closure happens when an inner function remembers and can access variables from its outer function's scope, even after the outer function has finished executing.


function createNotificationCounter(){
    let count = 0;

    return function(){
        count ++;
        console.log("Notification Clicked:",count);
    };
}

const notificationCounter = createNotificationCounter();

notificationCounter();
notificationCounter();
notificationCounter();


//

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
            console.log("Balance:", balance);
        },

        checkBalance: function() {
            console.log("Current balance:", balance);
        }
    };
}

const account = createBankAccount(1000);

account.checkBalance();
account.deposit(500);
account.checkBalance();




// Concept	                       Meaning	                                Example use

// 1. Function Declaration	      Defines a named function	               Calculate a bill

// 2. Function Expression	     Stores a function in a variable	        Calculate salary

// 3. Arrow Function	         Shorter function syntax	                 Calculate discounts

// 4. Parameters	             Names that receive input	                  Employee name

// 5. Arguments	                 Actual values passed in	               "Rahul"

// 6. Default Parameters	     Fallback values for missing inputs       	Default delivery fee

// 7. Rest Parameters	         Collects multiple arguments into an array	     Sum bonuses

// 8. Return Values	         Sends a result back to the caller	           Return total price

// 9. Callback Functions	     Functions passed to other functions	         Run a dashboard action

// 10. Higher-Order Functions	  Accepts or returns functions	                 Apply discount rules

// 11. IIFE	                  Function that runs immediately	             Initialize an application

// 12. Pure Functions	          Predictable output without side effects	      Calculate annual salary

// 13. Function Scope	           Variables belong to their function	           Local salary variable

// 14. Lexical Scope	          Access depends on where a function is defined	    Access company name

// 15. Closures	              Inner function remembers outer variables	        Notification counter