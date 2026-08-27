// The Nullish Coalescing operator (??) is used to provide a default value when a value is null or undefined.

// Simple definition

// ?? means: "If the value is null or undefined, use the value on the right side."

// Syntax
// value ?? defaultValue

// exsmple
const username = null;
const result = username ?? "guest";
console.log(result);


// undefined

let username1 = "sana";
const result1 = username1 ?? "Guest";

console.log(result1);


// The most important rule

// ?? only checks for:

// null
// undefined

// example with age

const age =9;
console.log(age ?? 18)

// login

const isLoggedIn = true;
console.log(isLoggedIn ?? true)

// empty string

const username2=".";
console.log(username2 ?? "Guest");


// ||  → checks falsy values
// ??  → checks only null / undefined


// userName

const User = null;
const displayName = User ?? "AAA";
console.log(displayName);


//Product Price

const ProductPrice = 67000;
const price = ProductPrice ?? 0;

console.log(price);

// example

const pprice = 0;
console.log(pprice || 100);

// employee salary

const salary = 50000
const employeeSalary = salary ?? 0;
console.log(employeeSalary)

// User Setting

const setting ={
    theme:null,
    language:"English"
};

const theme = setting.theme ?? "light";
const language = setting.language ?? "English";

console.log(theme);
console.log(language);

// notification
const noti = {
    count:5
};

const count = noti.count ?? 0;

console.log(`you have ${count} notification`);