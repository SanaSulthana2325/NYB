// What is Lexical Scope?
// Lexical Scope means a function can access variables from the scope in which the function was defined.

// In simple words, JavaScript determines variable accessibility based on where you write or define your functions in the code, not where you call them.

function company(){
    let companyName = "Tasan company";

    function employee(){
        let employeeName = "Affu";

        console.log("Employee Name:", employeeName);
        console.log("Company Name:",companyName);
    }

    employee();
}
company();

//

// Scope Chain in JavaScript
// What is a Scope Chain?
// The Scope Chain is the process JavaScript uses to search for a variable in the current scope and then in its outer scopes until it finds the variable or reaches the global scope.

// If JavaScript cannot find the variable in any accessible scope, it throws a ReferenceError.


let websiteName = "shopEasy";

function shopping(){
    let customerName = "nashu";

    function checkout(){
        let orderAmount = 2500;

        console.log("Order Amount:",orderAmount);
        console.log("Customer Name:", customerName);
        console.log("Website Name:", websiteName);
    }
    checkout();
}
shopping();




// Lexical Scope	                                                                                   Scope Chain
// Determines which outer variables a function can access based on where it is defined.	Describes how JavaScript searches for a variable through accessible scopes.
// Focuses on the structure of the code.	                                                  Focuses on the variable lookup process.
// Example: employee() can access companyName.	                                              Example: JavaScript searches for websiteName in checkout(), then its outer scopes.


//
let color ="Blue";

function outer(){
    let color ="Red";

    function inner(){
        console.log(color);
    }
    inner();
}
outer();


// What is a Closure?
// A closure is created when a function remembers and can access variables from its outer scope, even after the outer function has finished executing.

// In simple words, a function remembers the variables that were available where it was created.


function createBankAccount(){
    let balance = 1000;

    function deposit(amount){
        balance = balance + amount;
        console.log("Deposited:",amount);
        console.log("Current Balance:",balance);
    }
    return deposit;
}
const muAccount = createBankAccount();

muAccount(500);
muAccount(800);

//

function createCart(){
    let quantity = 0;

    return{
        addItem:function(){
            quantity++;
            console.log("Item added.quantity:",quantity);
        },

        getQuantity: function(){
            console.log("Cart Quantity:",quantity);
        }
    };
}

    const cart = createCart();

    cart.addItem();
    cart.addItem();
    cart.addItem();
    console.log(cart.quantity)


// counter

function createCounter(){
    let count = 0;
    return function (){
        count++;
        console.log("Button Clicked:",count,"times");
    };
}
const buttonCounter = createCounter();
buttonCounter();
buttonCounter();
buttonCounter();


// debouncing search

function debounce(callback, delay){
    let timer;

    return function (value){
        clearTimeout(timer);

        timer = setTimeout(function (){
            callback(value);
        },delay);
    };
}

function searchProduct(productName){
    console.log("Searching for:" , productName);
}

const delayedSearch = debounce(searchProduct,1000);

delayedSearch("la");
delayedSearch("lap");
delayedSearch("laptop");
delayedSearch("laptop bag");

//
function outer(){
    let msg = "hello";

    return function (){
        console.log(msg);
    };
}

const result = outer();
result();


// What is this in JavaScript?
// The this keyword refers to a value determined mainly by how a function is called.

// In simple words, this helps JavaScript identify the object associated with the current function call.

// this inside object
const emp = {
    name:"ayesha",
    age:25,

    displayDetails: function(){
        console.log("Employee Name:", this.name);
        console.log("Employee Age:", this.age);
    }
};

emp.displayDetails();


// this inside regular function

function showDetails(){
    console.log(this);
}
showDetails();

// inside arrow function

const com = {
    name:"Mirasu solutions",

    showCompany: function(){
        const display = () =>{
            console.log("Company Name:",this.name);
        };

        display();
    }
};

com.showCompany();

// this is an event handler

const button = document.getElementById("submitBtn");

button.addEventListener("click",function(){
    console.log("Button Text:",this.textContent);
});


// changing this using call()


function showEmp(){
    console.log("employee Name:",this.name);
}

const emp1 = {
    name:"AAA"
};

const emp2 = {
    name:"BBB"
};

showEmp.call(emp1);
showEmp.call(emp2);



// Situation	                                                   What this refers to
// Object method	                                              The object used to call the method
// Standalone regular function in a non-strict browser script	   Global window object
// Standalone regular function in strict mode	                     undefined
// Arrow function	                                                Inherits this from the surrounding scope
// Regular DOM event handler	                                    The element receiving the event
// Function invoked with call()	                                The value supplied as the first argument

//
const stu = {
    name:"Anu",

    showName: function(){
        console.log(this.name);
    }
};

stu.showName();