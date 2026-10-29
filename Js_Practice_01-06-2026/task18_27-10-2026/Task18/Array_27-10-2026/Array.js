// An array in JavaScript is a variable that stores multiple values in a single place. Arrays are useful when working with lists of employees, products, students, shopping cart items, or orders.


const emp = ["aaa","bbb","ccc","ddd"];

console.log(emp)

// Creating Arrays
// You can create an array using square brackets [].

const pro = ["Laptop","Mouse","keyboard","Monitor"];

console.log(pro);
console.log(pro.length);

// Accessing Elements
// You access an array element using its index. Array indexes start from 0, not 1.


const Products = ["Laptopo","Mouse","keyboard","Monitor"];

console.log(Products[0]);
console.log(Products[1]);
console.log(Products[2]);
console.log(Products[3]);
console.log(Products[Products.length -1]);

// Adding and Removing Elements
// You can add or remove elements from an array using methods such as push(), pop(), shift(), unshift(), and splice().


// push() adds an element to the end.

// pop() removes the last element.
const cart = ["tv","Fridge","Mobile"];

cart.push("machine")   // add at the end
console.log(cart);

cart.pop();   // remove from the end
console.log(cart)

// shift()
// The shift() method removes the first element from an array and returns it.

const orders=["order101","order102","order103","order104"];

const completeOrder = orders.shift();

console.log(completeOrder);
console.log(orders);


// unshift()
// The unshift() method adds one or more elements to the beginning of an array.

const colors = ["green","yellow","blue"];

colors.unshift("pink","red","purple");

console.log(colors);


// slice()
// The slice() method returns a portion of an array without changing the original array.

// array.slice(start, end);


const pro1 = ["AAA","BBB","CCC","DDD","EEE"];

const featurePro1 = pro1.slice(1,3);

console.log(featurePro1);

console.log(pro1);
console.log(pro1.slice(-2));


// splice()
// The splice() method adds, removes, or replaces elements in an array. Unlike slice(), it modifies the original array.

//syntax

// array.splice(start, deleteCount, item1, item2);


const pro2 = ["laptop","Mobile","Keyboard","Monitor","fridge"];

pro2.splice(2,6);

console.log(pro2)


// 1 means start at index 1, which contains "Mouse".

// The second 1 means remove one element.

const chips = ["Lays","Bingo"];

chips.splice(1,0,"Noodles")

console.log(chips)


// slice()	                                               splice()
// Extracts a portion of an array.	             Adds, removes, or replaces elements.
// Does not modify the original array.	         Modifies the original array.
// slice(1, 3) selects elements at indexes
//  1 and 2.	                                splice(1, 2) removes two elements starting at index 1.

// concat()
// The concat() method combines two or more arrays and returns a new array. It does not modify the original arrays.

const a = [1,2,3,4,5];

const b=[101,202,301,401,501];

const allc = a.concat(b);

console.log(allc);
console.log(a);
console.log(b);


// includes()
// The includes() method checks whether an array contains a particular value. It returns true or false.


const d = ["sasa","mama","kaka","lala"];

console.log(d.includes("rara"));
console.log(d.includes("kaka"));
console.log(d.includes("gaga"));


// indexOf()
// The indexOf() method returns the index of the first matching element. If the value does not exist, it returns -1.

const emp1 = ["AAA","BBB","CCC","DDD","EEE"];

console.log(emp1.indexOf("FFF"));
console.log(emp1.indexOf("DDD"));
console.log(emp1.indexOf("AAA"));


// find()
// The find() method returns the first element that satisfies a condition. If no element matches, it returns undefined.


const e = [
    { name:"Sam",salary:25000},
    { name:"Ayesha",salary:49000},
    { name:"Zeba",salary:45000},
    { name:"Zobia",salary:40000}

];

const f = e.find(emp => emp.salary > 30000);

console.log(f);


// findIndex()
// The findIndex() method returns the index of the first element that satisfies a condition. If no element matches, it returns -1.


const gi = [
    {name:"dada" ,salary:15000},
    {name:"haji" ,salary:200000},
    {name:"ola" ,salary:30000},

];

const index = gi.findIndex(emp => emp.salary > 30000);
console.log(index);


// Remember:
// - find() returns the matching element.
// - findIndex() returns the matching element's index.


// filter()
// The filter() method returns a new array containing all elements that satisfy a condition.


const ta = [
    {name:"Tasleem",salary:12000},
    {name:"nashu",salary:22000},
    {name:"ayesha",salary:32000},
    {name:"sonu",salary:42000},
    {name:"sara",salary:52000},
    {name:"Mira",salary:62000},

    
];

const highEarners = ta.filter(emp =>emp.salary>30000);

console.log(highEarners);



// map()
// The map() method creates a new array by transforming each element of an existing array.

const p = [300,400,467,500,589,600];

const updatedp = p.map(p =>p + 100);
console.log(updatedp);
console.log(p);



// map() vs filter()
// - map() transforms each element.
// - filter() selects elements that match a condition.


// reduce()
// The reduce() method processes array elements and combines them into a single accumulated result. That result can be a number, string, object, or even another array.

const h = [200,309,478,564];
const total = h.reduce((sum,h) =>{
    return sum + h;
},0);
console.log(total);


// some()
// The some() method checks whether at least one element satisfies a condition. It returns true or false.

const da =[1200,1300,300,800,900];

const ja = da.some(da => da <500);

console.log(ja);

//
const prices1 = [1200, 800, 600];

console.log(prices1.some(price => price < 500));

// every()
// The every() method checks whether all elements satisfy a condition. It returns true only when every element matches.

const ka = [10,20,30,45,67];
const ya = ka.every(quantity =>quantity > 0);

console.log(ya);


// some() vs every()
// Method	           Meaning	                         Example
// some()	           At least one element matches	    Is at least one product affordable?
// every()           All elements match	            Are all products in stock?


// sort()
// The sort() method sorts array elements. By default, it sorts elements as strings and modifies the original array.


const fa = ["sneha","Arun","Kavya","lallu","Ayesha"];
fa.sort();
console.log(fa)


//numbers

const r=[100,2,4,1,30,29];
r.sort();
console.log(r);

//
const prices2 = [100, 20, 3, 45];

prices2.sort((a, b) => a - b);

console.log(prices2);


//
const prices3 = [100, 20, 3, 45];

prices3.sort((a, b) => b - a);

console.log(prices3);


// forEach()
// The forEach() method runs a callback function once for each element in an array. It is useful when you want to perform an action for every element, rather than create a transformed array.

const u = ["aaa","bbb","ccc","ddd","eee"];

u.forEach(u=>{
    console.log("Employees:",u);
});

//

const products = ["Laptop", "Mouse", "Keyboard"];

products.forEach((product, index) => {
    console.log(index + ": " + product);
});



// Method	                        What it does	                            Changes original array?

// Creating arrays []	         Stores multiple values	                                 —

// Accessing [index]	            Gets an element	                                     No

// Adding/removing elements	Changes array contents	                           Depends on method

// push()	                      Adds to the end	                                    Yes

// pop()	                     Removes from the end	                                Yes

// shift()	                     Removes from the beginning	                             Yes

// unshift()	                 Adds to the beginning	                                  Yes

// slice()	                         Extracts a portion	                                   No

// splice()	                    Adds, removes, or replaces	                          Yes

// concat()	                     Combines arrays	                                   No

// includes()	                    Checks if a value exists	                          No

// indexOf()	                   Finds the first matching index	                      No

// find()	                         Returns first matching element	                       No

// findIndex()	                   Returns first matching index by condition	           No

// filter()	                    Returns all matching elements	                        No

// map()	                      Transforms each element into a new array	                No

// reduce()	                 Combines elements into one result	                     No, if the callback does not mutate the array

// some()	                       Checks if at least one element matches	                 No

// every()	                         Checks if all elements match	                         No

// sort()	                          Sorts elements	                                     Yes

// forEach()	                 Executes an action for each element	                Depends on the callback