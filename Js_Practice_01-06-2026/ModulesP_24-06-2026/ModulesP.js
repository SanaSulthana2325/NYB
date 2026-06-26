// Modules
//Modules:
//Modules are a way to split code into separate files and reuse them wherever needed.

//Instead of writing everything in one file, we break code into small reusable parts.


// default export: in whole file we can export only one code
// onli 1 export can be done
// we can import with any name
//no need to use {} at the time of input

// default export:
export default function greet(name){
    return "Hello " + name;
}


// named export: banking

export let balance = 1000;
export function deposit(amount) {
    balance += amount;
    return balance;
}

export function withdraw(amount){
    balance -= amount;
    return balance;
}

// user system
export function login(username){
    return username + " logged in successfully";

}
export function logout(username){
    return username + "logged out";
}

// string utility module
export function toUpper(text){
    return text.toUpperCase()
}
export function toLower(text){
    return text.toLowerCase();

}
export function reverse(text){
    return text.split("").reverse().join("")
}

// student module
export const student = {
    name: "Tasan",
    age: 34,
    course: "Computer Science"

};
export function getDetails(){
    return `${student.name} is studying ${student.course}`;
}

// e-commerce cart
let cart = [];

export function addItem(product) {
    cart.push(product);
    return cart;
}

export function removeItem(product) {
    cart = cart.filter(item => item !== product);
    return cart;
}

export function getCart() {
    return cart;
}

// weather app
export async function getWeather(city) {
    return `Weather in ${city}: Sunny `;
}