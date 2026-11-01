// ES Modules
// Meaning: ES Modules allow you to split JavaScript code into separate files and share variables, functions, classes, and other values using export and import.


// Iterators
// Meaning: An iterator is an object that produces values one at a time when its next() method is called. Each call returns an object containing a value and a done property.

const da = ["AAA","BBB","CCC"];

const iterator = da[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Generators — Introduction
// Meaning: A generator is a special function that can pause and resume its execution. You define one using function* and produce values using yield.

function* employeeIDs(){
    yield 101;
    yield 102;
    yield 103;
}

const ids = employeeIDs();

console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());


// Symbols
// Meaning: A Symbol is a primitive data type that creates a unique value. Symbols are often used as object property keys to avoid accidentally conflicting with other property names.


const internalID = Symbol("id");

const employee = {
    id:201,
    name:"Ganga",
    [internalID]:"Gp-2098-DA"
};

console.log(employee.id);
console.log(employee.name);
console.log([internalID]);

console.log(Object.keys(employee));


// Sets
// Meaning: A Set is a collection that stores unique values. If you add the same value multiple times, it is stored only once.


const Sub = new Set();

Sub.add("san@gmail.com");
Sub.add("affu@gmail.com");
Sub.add("san@gmail.com");
Sub.add("amit@gmail.com");

console.log(Sub);
console.log("Total Subscribes:", Sub.size);
console.log(Sub.has("Affu@gmail.com"));

Sub.delete("amit@gmail.com");

console.log("After deletion:",[...Sub]);


//
const num = [10,20,30,10,20,40,50,60,66,55];

console.log([...new Set(num)]);


// Maps
// Meaning: A Map stores key-value pairs. Unlike a regular object, a Map can use values of different types—including objects—as keys. It also provides convenient methods for managing entries.

const fa = new Map();

fa.set(101,"AAA");
fa.set(102,"BBB");
fa.set(103,"CCC");

console.log(fa.get(102));
console.log("Total employees:", fa.size);
console.log(fa.has(101));

fa.delete(103);

console.log([...fa]);


// WeakMap — Introduction
// Meaning: A WeakMap stores key-value pairs where the keys must be objects or non-registered Symbols. Unlike a regular Map, a WeakMap does not keep an object key alive solely because it is used as a key.

const ha = new WeakMap();

let emp1 = {
    name:"Tasan",
    department:"IT"
};
ha.set(emp1,{
    accessLevel:"Admin",
    lastLogin:"10:30 AM" 
});

console.log(ha.get(emp1));
console.log(ha.has(emp1));

// set() associates metadata with the employee object.

// get() retrieves that metadata.

// has() checks whether an entry exists.

// Assigning null to employee removes that particular reference, but it does not guarantee that the object is immediately garbage-collected.


// WeakSet — Introduction
// Meaning: A WeakSet is a collection of unique objects held weakly. It can tell you whether an object has been added, but it does not let you iterate through the collection.

const onboardedEmployees = new WeakSet();

const employee1 = {
    name: "Rahul"
};

const employee2 = {
    name: "Priya"
};

onboardedEmployees.add(employee1);

console.log(onboardedEmployees.has(employee1));
console.log(onboardedEmployees.has(employee2));

onboardedEmployees.add(employee2);

console.log(onboardedEmployees.has(employee2));

onboardedEmployees.delete(employee1);

console.log(onboardedEmployees.has(employee1));



// Concept          	Main purpose	              Useful methods or syntax

// ES Modules	   Share code between files	               export, import

// Iterators	  Retrieve values one at a time	             next()

// Generators     	Create pausable sequences	            function*, yield

// Symbols	       Create unique primitive values	         Symbol()

// Sets	           Store unique values	                  add(), has(), delete()

// Maps	          Store key-value pairs	                  set(), get(), has()

// WeakMap	        Associate values with object keys weakly	set(), get(), has()

// WeakSet	      Track object membership weakly	           add(), has(), delete()