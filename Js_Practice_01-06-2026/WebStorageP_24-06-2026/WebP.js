//Web Storage is a browser feature that allows websites to store data in the user’s browser (on their computer) so it can be used later.
// It is used in JavaScript to save data without a server database.

//1. localStorage : Stores data permanently in browser

// Data does NOT expire
// Even after closing browser, data stays

localStorage.setItem("name", "Sana");

console.log(localStorage.getItem("name"));

// login status
localStorage.setItem("isLoggedIn", "true");

console.log(localStorage.getItem("isLoggedIn"));

//shopping cart
let cart = ["Shoes", "Watch"];

localStorage.setItem("cart", JSON.stringify(cart));

let data = JSON.parse(localStorage.getItem("cart"));

console.log(data);



//2. sessionStorage : Stores data only for one tab session

// Data disappears when tab is closed

sessionStorage.setItem("page", "home");

console.log(sessionStorage.getItem("page"));

// form data
sessionStorage.setItem("email", "test@gmail.com");

console.log(sessionStorage.getItem("email"));

// step form
sessionStorage.setItem("step", "2");

console.log(sessionStorage.getItem("step"));


// setItem () : used to store data

// getItem (): used to read data

// removeItem(): used to delete a specific item

// example
localStorage.setItem("name", "Sana");

localStorage.removeItem("name");

console.log(localStorage.getItem("name"));


// example of remove item
localStorage.setItem("language", "JavaScript");

console.log(localStorage.getItem("language"));

localStorage.removeItem("language");

console.log(localStorage.getItem("language"));

// clear(): deletes everything in storage

//localStorage.setItem("a", "1");
//localStorage.setItem("b", "2");

//localStorage.clear();

//console.log(localStorage.getItem("a"));
//console.log(localStorage.getItem("b"));

// comparison of local and session storage
localStorage.setItem("data", "Permanent Data");
sessionStorage.setItem("data", "Temporary Data");

console.log("Local:", localStorage.getItem("data"));
console.log("Session:", sessionStorage.getItem("data"));

// login system
localStorage.setItem("user", "admin");

console.log("Logged user:", localStorage.getItem("user"));

localStorage.removeItem("user");

console.log("After logout:", localStorage.getItem("user"));

// user profile save

localStorage.setItem("name", "Sana");
localStorage.setItem("age", "21");
localStorage.setItem("city", "Hyderabad");

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("city"));

// registration form
sessionStorage.setItem("step1", "Personal Info");
sessionStorage.setItem("step2", "Address Info");

console.log(sessionStorage.getItem("step1"));
console.log(sessionStorage.getItem("step2"));

//loss demo
sessionStorage.setItem("tempUser", "Rahul");

console.log(sessionStorage.getItem("tempUser"));

// counter app
let count = localStorage.getItem("counter");

if (!count) {
    count = 0;
}

count = Number(count) + 1;

localStorage.setItem("counter", count);

console.log("Counter:", count);

// visitor tracker
let visit = sessionStorage.getItem("visit");

if (!visit) {
    visit = 1;
} else {
    visit = Number(visit) + 1;
}

sessionStorage.setItem("visit", visit);

console.log("Session Visits:", visit);