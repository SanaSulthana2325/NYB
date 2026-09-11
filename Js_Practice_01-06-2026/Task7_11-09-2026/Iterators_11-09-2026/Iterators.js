
// What is an Iterator?

// An iterator is an object that allows us to access elements one at a time.

// Think about a queue at a ticket counter.

// Person 1 → Person 2 → Person 3 → Person 4

// You process one person at a time.

// That's the basic idea of an iterator.

// Array ierator:
let num = [20,34,56,78,54];

let iterator = num[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// iterator with string

let word = "sana"

let iterator1 = word[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());


// for..of
let num1 = [10,20,30,40];

for(let number of num1){
    console.log(num1)
}

// What is a Generator?

// A generator function is a special function that can pause its execution and continue later.

// yield: pauses the generator

function* num2(){
    yield 10;
    yield 20;
    yield 30;
}
let result = num2();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());


// example
function* test() {

    console.log("First");

    yield 10;

    console.log("Second");

    yield 20;

    console.log("Third");

}

let generator = test();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// example

function* test() {

    console.log("First");

    yield 10;

    console.log("Second");

    yield 20;

    console.log("Third");

}

let generator1 = test();

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());


//example 

function* colors() {

    yield "Red";
    yield "Green";
    yield "Blue";

}

for (let color of colors()) {
    console.log(color);
}


// | Iterator                   | Generator                      |
// | -------------------------- | ------------------------------ |
// | Uses `next()`              | Uses `yield` and `next()`      |
// | We can manually create one | Easier way to create iterators |
// | More code to implement     | Less code                      |
// | Returns `{value, done}`    | Returns `{value, done}`        |


// What is an Object?

// An object stores related data and behavior together.

// What is a Class?

// A class is like a blueprint for creating objects

class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }

}

let student1 = new Student("Sana", 22);

student1.introduce();

// What is constructor()?

// The constructor is a special method that runs automatically when we create an object using new.

class Student6 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name + " is " + this.age + " years old");
    }

}

let student11 = new Student6("Sana", 22);
let student2 = new Student6("Rahul", 21);

student11.display();
student2.display();