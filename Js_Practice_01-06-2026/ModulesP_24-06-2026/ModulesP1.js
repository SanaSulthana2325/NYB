// default
import greet from"./ModulesP.js";
console.log(greet("Afsa"))


// banking
import { balance, deposit, withdraw } from "./ModulesP.js";
console.log("Initial Balance:", balance);
console.log("After Deposite:", deposit(500));
console.log("After Withdraw:", withdraw(200));


// user system
import { login, logout} from "./ModulesP.js";
console.log(login("Admin"));
console.log(logout("Admin"));

// string utility modules
import { toUpper,toLower,reverse } from "./ModulesP.js";
console.log(toUpper("hello"))
console.log(toLower("WORLD"))
console.log(reverse("javascript"))

// student module
import{student, getDetails} from "./ModulesP.js";
console.log(student)
console.log(getDetails())

//e-commerce cart
import { addItem, removeItem, getCart } from "./ModulesP.js";

addItem("Shoes");
addItem("Phone");

console.log("Cart:", getCart());

removeItem("Shoes");

console.log("Updated Cart:", getCart());


//weather app
import { getWeather } from "./ModulesP.js";

getWeather("Hyderabad").then(console.log);