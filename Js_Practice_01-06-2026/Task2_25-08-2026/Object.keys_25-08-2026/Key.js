// Object.keys() in JavaScript

// Object.keys() is a built-in JavaScript method used to get all the property names (keys) of an object.

// Syntax
// Object.keys(object)c

// It returns an array containing the object's own enumerable property names.

// example

const stu ={
    name:"Lusi",
    age:29,
    course:"Marketing"
};

const keys = Object.keys(stu);

console.log(keys);

// employee example

const emp ={
    name1:"sana",
    dept:"IT",
    salary:20000
}
console.log(Object.keys(emp))

// product

const product = {
    name:"Laptop",
    Quantity:"1++",
    Price:60500
};
console.log(Object.keys(product))

// Counting no.of Properties

const user2 = {
    name:"Ayesha",
    age:44,
    city:"hyd",
    role:"Developer"
};

const count = Object.keys(user2).length;

console.log(count);

// shopping cart

const cart = {
    laptop: 1,
    mouse:2,
    keyboard:2
}

console.log("Number of Product type:", Object.keys(cart).length);


//students Marks

const marks={
    maths:89,
    physics:90,
    biology:92,
    chemistry:79
};

Object.keys(marks).forEach((subject) =>{
    console.log(subject + ":",marks[subject]);
});

let total = 0;

Object.keys(marks).forEach((subject) =>{
    total += marks[subject];
});

console.log("Total:", total)


// finding higher price

const Pros={
    apple:300,
    mango:600,
    banana:200,
    orange:500

}
let highest = 0;

Object.keys(Pros).forEach((Pro) =>{
    if(Pros[Pro]> highest){
        highest = Pros[Pro];
    }
});

console.log("Highest Price:", highest)