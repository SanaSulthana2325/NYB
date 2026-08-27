// What is Object.entries():

// Object.entries() is a built-in JavaScript method that converts an object into an array of key-value pairs.

// Syntax

// Object.entries(object)


// example:
const syu ={
    name:"sana",
    age:45,
    course:"js"
};

console.log(Object.entries(syu))


// for of
const emp = {
    name:"AAA",
    age:46,
    departmemt:"Development",
    salary:50000,
}

for(const[key,value] of Object.entries(emp)){
    console.log(key,":",value);
}


// products

const product ={
    name:"Laptop",
    brand:"samsung",
    Price:70000,

}

for(const[key,value] of Object.entries(product)){
    console.log(key,":",value);
}

// students marks

const mark = {
    maths:89,
    science:60,
    English:90,
    hindi:99
}


for (const[key,value]of Object.entries(mark)){
    console.log(key,":",value);
}
console.log(Object.entries(mark));

// finding greater number

const mars ={
    maths: 58,
    Eng:90,
    Telugu:80,
    social:59,
}

for(const[subject,mar] of Object.entries(mars)){

    if (mar >= 60){
        console.log(subject,":",mar);

    }
    
}

console.log(Object.entries(mars))

// employees salary

const emp1 = {
    AAA:45000,
    BBB:50000,
    CCC:35000,
    DDD:49000,
    EEE:55000,
}

for(const[name,salary] of Object.entries(emp1)){
    if(salary >= 50000){
        console.log(name,":",salary);
    }
}








// | Method             | Returns     |
// | ------------------ | ----------- |
// | `Object.keys()`    | Keys        |
// | `Object.values()`  | Values      |
// | `Object.entries()` | Key + Value |
