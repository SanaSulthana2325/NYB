//Create examples using Object and Array Destructuring.

// array destructuring:

// skipping values
const numbers = [10, 20, 30, 40];

const [a1, , c1] = numbers;

console.log(a1);
console.log(c1);

// swapping variables
let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x);
console.log(y);

//function returning array
function getValues() {
    return [100, 200];
}

const [a, b] = getValues();

console.log(a);
console.log(b);

// database results
const data = ["Sana", 22, "Developer"];

const [name, age, role] = data;

console.log(name);
console.log(role);

// swapping varible
let currentUser = "Admin";
let nextUser = "Manager";

[currentUser, nextUser] = [nextUser, currentUser];

console.log(currentUser);
console.log(nextUser);

// Array destructuring in loops
const users = [
    ["Sana", 20],
    ["Ali", 25]
];

for (const [name, age] of users) {
    console.log(name, age);
}

// object destructuring:

// function parameter destructuring
function displayUser({ name, age }) {
    console.log(`${name} is ${age} years old`);
}

displayUser({
    name: "Sara",
    age: 25
});

// e- commerce
const product = {
    title: "Laptop",
    price: 50000,
    brand: "HP"
};

const { title, price } = product;

console.log(title);
console.log(price);


//Implement Iterators and understand iteration protocols.(>next is protocal)
//An iterator is an object that helps us access elements one by one.
// example
let queue = ["AAA", "BBB", "CCC"];
let G = queue[Symbol.iterator]();
console.log(G.next());
console.log(G.next())
console.log(G.next())
console.log(G.next())

// music play list
let songs = ["Song A", "Song B", "Song C"];
for(let song of songs){
    console.log(song)
}

// 
let colors = ["red","white", "pink","blue"];
let it = colors[Symbol.iterator]();

console.log(it.next())
console.log(it.next())
console.log(it.next().value)
console.log(it.next(). value)

//build in array iterator
let arr9 = [10, 20, 30];

let iterator3 = arr9[Symbol.iterator]();

console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());

//using for ..of loop
const chips = ["salted", "chees", "masala"];

for (let chip of chips) {
    console.log(chip);
}

//Create Generator functions and compare them with normal functions.

//
function* instagramFeed(){
    yield "post 1";
    yield "post 2";
    yield "post 3";
}
let feed = instagramFeed();
console.log(feed.next())
console.log(feed.next().value)
console.log(feed.next())
console.log(feed.next())

// infinite generator
function* infiniteNumber(){
    let i = 1;
    while(true){
        yield i++;
    }
}
let num3 = infiniteNumber();
console.log(num3.next().value)
console.log(num3.next().value)
console.log(num3.next().value)
console.log(num3.next().value)
console.log(num3.next().value)
console.log(num3.next().value)
console.log(num3.next().value)

// generator with for ..of
function*fruits(){
    yield "apple";
    yield "mango";
    yield"banana";
}
for(let fruit of fruits()){
    console.log(fruit)
}

// loading user pageby page
function* users1() {
    yield "User1 1";
    yield "User1 2";
    yield "User1 3";
}

let user1 = users1();

console.log(user1.next().value);
console.log(user1.next().value);

// Game development
function* playerMoves() {
    yield "Move Left";
    yield "Move Right";
    yield "Jump";
}

let move = playerMoves();

console.log(move.next().value);
console.log(move.next().value);

// reading large files
function* readFile() {
    yield "Line 1";
    yield "Line 2";
    yield "Line 3";
}

let file = readFile();

console.log(file.next().value);
console.log(file.next().value);

//OTP generator
function* otpGenerator() {
    yield 1234;
    yield 5678;
    yield 9876;
}

let otp = otpGenerator();

console.log(otp.next().value);
console.log(otp.next().value);

// trafic signal system
function* trafficLight() {
    while (true) {
        yield "Red";
        yield "Yellow";
        yield "Green";
    }
}

let signal = trafficLight();

console.log(signal.next().value);
console.log(signal.next().value);
console.log(signal.next().value);

// notification
function* notifications() {
    yield "New Message";
    yield "Friend Request";
    yield "Payment Received";
}

let notify = notifications();

console.log(notify.next().value);
console.log(notify.next().value);

// banking transaction processing
function* transactions() {
    yield "Transaction 1";
    yield "Transaction 2";
    yield "Transaction 3";
}

let tx = transactions();

console.log(tx.next().value);
console.log(tx.next().value);



//Build small programs combining Async/Await and Destructuring concepts.


// example
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "Sana",
                email: "sana@gmail.com"
            });
        }, 2000);
    });
}

async function displayUser() {
    const user = await getUser();

    const { id, name, email } = user;

    console.log(id);
    console.log(name);
    console.log(email);
}

displayUser();

// student marks
function getMarks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([85, 90, 95]);
        }, 1000);
    });
}

async function displayMarks() {
    const marks = await getMarks();

    const [maths, science, english] = marks;

    console.log(maths);
    console.log(science);
    console.log(english);
}

displayMarks();
