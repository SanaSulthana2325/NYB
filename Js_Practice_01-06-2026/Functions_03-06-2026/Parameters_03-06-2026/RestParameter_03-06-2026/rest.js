// Rest Parameter:  allow function to accept any number of argument and store them in a real array

//
function showNumber(...number){
    console.log(number)
}
showNumber(20,56,47,84,97,90)

// Pros of rest parameter
// Real array
// Works with array method
// Easier to read
// works with arrow function

// shopping cart used with forOf loop
function cart(...items){
    console.log("cart items:")
    for (let item of items){
        console.log(item)
    }
}
cart("laptop","mouse","keyboard","ipad")

// find maximum number
function maxNumber(...numbers){
    console.log(Math.max(...numbers))
}
maxNumber(90,67,54,32,12,889)

// mim number
function minNumber(...numbers){
    console.log(Math.min(...numbers))
}
minNumber(90,67,54,32,12,889)


// calculate average
function average(...marks){
    let total = 0
    for(let mark of marks){
        total += mark
    }
    console.log(total / marks.length)
}
average(80,90,67,54,32,23,21)

//creat dynamic tags
function createtags(...tags){
    console.log(tags.join(", "))
}
createtags(
    "js",
    "HTML",
    "CSS",
    "react"
)


//count Words
function countWords(...words){
    console.log("Total Words:", words.length)
}
countWords("sana","sulthana","is","a","beautiful","girl")


// filter even numbers
function evenNumbers(...numbers){
    let results = numbers.filter(
        num => num % 2 === 0
    )
    console.log(results)
}
evenNumbers(6,7,8,9,0,77,66,55,4,55,43,67,323,111,22,3,4,5,6,7,8)


// odd numbers
function oddNumbers(...numbers){
    let results = numbers.filter(
        num => num % 3 === 0
    )
    console.log(results)
}
oddNumbers(6,7,8,9,0,77,66,55,4,55,43,67,323,111,22,3,4,5,6,7,8)

// Arrow function with rest parameter
const sum = (...numbers) => {
    return numbers.reduce(
        (total, num) => total + num, 
        0
    )

}
console.log(sum(39,78,690))

// first + rest parameter
function introduce(name, ...skills){
    console.log("Name:", name)
    console.log("skills:", skills)
}
introduce(
    "sana sulthana",
    "HTML",
    "JS",
    "CSS",
)

// compare rest parameter with argument object

// argument object
function showArguments() {
    console.log(arguments);
    console.log("First Value:", arguments[0]);
    console.log("Total Values:", arguments.length);
}

showArguments("HTML", "CSS", "JavaScript");

// how it works
// stores all passed values
// access values using indexes
// has a length property
// not a real array

// parameter
function introduce(name, ...skills){
    console.log("Name:", name)
    console.log("skills:", skills)
}
introduce(
    "malli",
    "HTML",
    "JS",
    "CSS",
)

// how it works
// collects all arguments into an array
// supports array method directly


// compare od both

//shoping cart
function calculateBill() {
    let total = 0;

    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    console.log("Bill Amount: ₹" + total);
}

calculateBill(100, 200, 300);

// rest parameter
function calculateBill(...prices) {
    let total = prices.reduce(
        (sum, price) => sum + price,
        0
    );

    console.log("Bill Amount: ₹" + total);
}

calculateBill(100, 200, 300);


// the rest parameter version is shorter and easier to read


// arrow function comparison
//argument object
//const test = () => {
  //  console.log(arguments);
//};

//test(10, 20); // output  come error

//arrow function do not have their own arguments object


// rest parameter
const test1 = (...numbers) => {
    console.log(numbers);
};

test1(10, 20);



//
function studentMarks(...marks) {
    let total = marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

    let average = total / marks.length;

    console.log("Marks:", marks);
    console.log("Total:", total);
    console.log("Average:", average);
}

studentMarks(80, 90, 75, 85);



// Practice parameter priority and execution flow.
//Call Function
//↓
//Assign Arguments to Parameters
//↓
//Execute Statements
//↓
//Return Result (optional)
//↓
//End Function

//ex:
function report(name, department = "HR", ...skills) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Skills:", skills);
}

report(
    "Sana",
    "Training",
    "Communication",
    "Excel",
    "Recruitment"
);

//its parameter priority:
//name = "Sana"
//department = "Training"

//Remaining values
//|
//skills = ["Communication", "Excel", "Recruitment"]