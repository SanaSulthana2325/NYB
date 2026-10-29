// Template Literals
// Template literals allow you to create strings using backticks (`) and insert variables or expressions using ${}.

const name = "sana";
const department = "IT";
const salary = 35000;

const message = `Employee:${name} 
Department:${department} 
Monthly Salary:₹${salary}`;
console.log(message)

//
const price = 1000;
const quantity = 3;
console.log(`Total price:₹${price * quantity}`);


// Destructuring
// Destructuring extracts values from arrays or properties from objects into separate variables.
// A. Object destructuring

const Ab = {
    name1:"sam",
    department:"Hr",
    salary1:40000
};
const{name1,salary1} = Ab;

console.log(name1);
console.log(salary1);

// B. Array destructuring

const cd = ["laptop","tv","fridge","mobile"]

const[first,second] = cd;

console.log(first);
console.log(second);


// Spread Operator (...)
// The spread operator expands the elements of an array or the properties of an object. It is useful for copying and combining data.

const ef = ["AAA","BBB","CCC","DDD"];

const updatedef = [...ef,"Jaja"];

console.log(updatedef);
console.log(ef);


// Rest Operator (...)
// The rest operator collects multiple remaining values into an array or object. Although it uses the same ... syntax as spread, it performs the opposite operation.

const gh =[
    "table",
    "Chair",
    "bed",
    "dainingTable"
];

const [firstgh, ...remaininggh] = gh;

console.log(firstgh);
console.log(remaininggh);


// Default Parameters
// Default parameters provide a fallback value when a function argument is omitted or is undefined.

function calculateBill(foodPrice,deliveryFee = 40){
    return foodPrice + deliveryFee;

}

console.log(calculateBill(200));
console.log(calculateBill(300,60));


// Optional Chaining (?.)
// Optional chaining lets you safely access a property or method when an intermediate value might be null or undefined.

const ij = {
    name:"tasan",
    address:{
        city:"Mehendipatnam"
    }
};

console.log(ij.address?.city);
console.log(ij.contact?.phone);


// Nullish Coalescing (??)
// The nullish coalescing operator returns a fallback value when the left side is null or undefined.

const kl = {
    name:"raga"
};

const mn={
    name:null
};

console.log(kl.name??"Guest");
console.log(mn.name??"guest")


// Why not always use ||?
// The || operator uses the fallback for any falsy value, including 0, false, and "". The ?? operator only uses the fallback for null and undefined.


// Enhanced Object Literals
// Enhanced object literals are modern JavaScript syntax improvements that make creating objects easier. Three common features are property shorthand, method shorthand, and computed property names.

// A. Property shorthand
// When the variable name and property name are the same, you can write the name only once.

const name2= "nashu";
const department2 = "IT";
const salary2 = 30000;

const emp1 = {
    name2,
    department2,
    salary2
};

console.log(emp1)


// B. Method shorthand
// You can define a method without writing function.

const employee = {
    name: "Priya",

    greet() {
        console.log(`Welcome, ${this.name}!`);
    }
};

employee.greet();


//c.computed property

const field = "department";

const employee1 = {
    name: "Arun",
    [field]: "HR"
};

console.log(employee1);


// Modules — Introduction
// JavaScript modules allow you to divide code into separate files and reuse functions, variables, and classes across your application.


// There are two important concepts:
// - Export: Make a function, variable, or class available to other modules.
// - Import: Bring an exported function, variable, or class into another module.

// Named export: You export something by its name and import it using curly braces.

// Default export: A module can have one default export, which you can import using your chosen local name.



// Concept	                       Main purpose	                           Real-time use

// 1. Template Literals	    Insert values into strings	            Display employee details

// 2. Destructuring	       Extract values from arrays or objects	Read API data

// 3. Spread Operator	       Expand or copy values	                 Update an employee record

// 4. Rest Operator	        Collect remaining values	              Accept multiple prices

// 5. Default Parameters	    Provide fallback argument values	      Default delivery fee

// 6. Optional Chaining	    Safely access potentially missing properties	Handle incomplete API responses

// 7. Nullish Coalescing	    Supply a fallback for null or undefined	        Display a default name or city

// 8. Enhanced Object              Literals	Simplify object creation	     Create employee profiles

// 9. Modules	                  Split code across reusable files	            Organize a React application