// an object stores related information as key-value pairs.

const emp = {
    name:"ayesha",
    age:34,
    department:"IT",
    salary:30000
};

console.log(emp);

// Creating Objects
// You can create an object using curly braces {} and define its properties as key-value pairs.

const emp1={
    id:101,
    name:"sam",
    department:"Finance",
    salary:35000
};

console.log(emp1);
console.log(emp1.name);
console.log(emp1.salary);


// Properties
// Properties are the values associated with an object. You can read, add, update, and delete properties.

const customer = {
    name:"sara",
    city:"Hyd"
};

//access property

console.log(customer.name);

//update a property
customer.city = "warangal";

//add a new property
customer.email = "sara@gmail.com"

//display the updated object
console.log(customer)

// delete object
delete customer.email;
console.log(customer)

// Methods
// A method is a function stored as an object property. Methods allow an object to perform actions using its own data.

const aa = {
    name:"Musab",
    department:"IT",

    greet:function(){
        console.log("Welcome "+ this.name);
        console.log("Department: "+ this.department);
    }
};

aa.greet();


// Nested Objects
// A nested object is an object stored as a property inside another object.

const bb = {
    name:"Priya",
    id:103,

    address:{
        city:"warangal",
        state:"Telangana",
        pincode:506004
    }
};
console.log(bb.name);
console.log(bb.address.city);
console.log(bb.address.state);
console.log(bb.address.pincode);


//  Object Destructuring
// Object destructuring lets you extract property values from an object into variables using a shorter syntax.

const cc={
    name:"monu",
    age:28,
    department:"IT",
    salary:30000
};

const {name, salary} = cc;

console.log(name);
console.log(salary);


// Array Destructuring
// Array destructuring allows you to extract array elements into separate variables using their positions.

const pro = ["laptop","tv","fridge","mobile","AC"];

const [first, second, third, fourth, fifth] = pro;

console.log(first);

console.log(fifth)
console.log(third)

// skipping elements

const colors = ["red","green","blue"];
const[firstColor, , thirdColor] = colors;

console.log(firstColor);
console.log(thirdColor);


// Spread Operator (...)
// The spread operator expands an array or object into its individual elements or properties. It is often used to copy or combine arrays and objects.

const dd = ["gana","bana"];

const updateddd = [...dd,"tana"];

console.log(updateddd);
console.log(dd)

// spread with objects

const employee = {
    name: "Rahul",
    department: "IT",
    salary: 30000
};

const updatedEmployee = {
    ...employee,
    salary: 35000
};

console.log(updatedEmployee);
console.log(employee);


// Rest Operator (...)
// The rest operator collects multiple remaining values into a single array or object.

const ee = ["AAA","BBB","CCC","DDD","EEE"];

const[firstee, ...remainingee] = ee;

console.log(firstee);
console.log(remainingee);

// with objects

const employee1 = {
    name1: "Priya",
    department: "HR",
    salary: 35000,
    city: "Warangal"
};

const { name1, ...otherDetails } = employee1;

console.log(name1);
console.log(otherDetails);

// Spread                                	   Rest
// Expands elements or properties	      Collects remaining elements or properties
// Used when copying or combining	      Used when grouping remaining values
// const copy = [...items]	             const [first, ...rest] = items



// Computed Properties
// Computed properties allow you to use an expression or variable as an object's property name. The property name is written inside square brackets [].

const propertyName = "department";
const ff={
    name:"jaja",
    [propertyName]:"IT"
};

console.log(ff);
console.log(ff.department);


// Object.keys()
// The Object.keys() method returns an array containing all the object's own, enumerable property names.

const gg = {
    id:201,
    name:"sara",
    department:"IT",
    salary:35000
};

const keys = Object.keys(gg);
console.log(keys);
console.log(Object.keys(gg).length);


// Object.values()
// The Object.values() method returns an array containing the object's own, enumerable property values.

const hh = {
    id:301,
    name:"Affu",
    department:"IT",
    salary:30000
};

const values = Object.values(hh);

console.log(values)


//
const productPrices = {
    Laptop: 50000,
    Mouse: 500,
    Keyboard: 1500
};

const total = Object.values(productPrices).reduce(
    (sum, price) => sum + price,
    0
);

console.log(total);


// Object.entries()
// The Object.entries() method returns an array of key-value pairs. Each pair is represented as a two-element array: [key, value].

const ii = {
    name:"Abbu",
    department:"Hr",
    salary:40000
};

const entries = Object.entries(ii);

console.log(entries)


// display each property

const employee2 = {
    name: "Priya",
    department: "HR",
    salary: 35000
};

Object.entries(employee2).forEach(([key, value]) => {
    console.log(key + ": " + value);
});



// Concept	                          Meaning	                          Real-time use

// 1. Creating Objects	        Store related data as key-value pairs	 Employee records

// 2. Properties	            Access and modify object data	         Update customer details

// 3. Methods	                 Functions inside objects	              Display product details

// 4. Nested Objects	          Objects inside objects	               Employee address

// 5. Object Destructuring	        Extract properties into variables	   Read employee details

// 6. Array Destructuring	       Extract elements by position	           Select products

// 7. Spread Operator	                Expand or copy values	           Update employee records

// 8. Rest Operator	             Collect remaining values	          Separate remaining fields

// 9. Computed Properties	         Create property names dynamically	     Dynamic form fields

// 10. Object.keys()	                 Get property names	                  List employee fields

// 11. Object.values()	                Get property values	                   Calculate total prices

// 12. Object.entries()	            Get key-value pairs	                   Generate reports