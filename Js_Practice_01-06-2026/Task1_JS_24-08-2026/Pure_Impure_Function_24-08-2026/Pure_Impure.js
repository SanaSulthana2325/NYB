// Pure function → same input, same output, no outside changes.

// example
function square(num){
    return num * num;
}

console.log(square(5));
console.log(square(15));
console.log(square(10));


// calculate salary

function calculateSalary(basicSalary, bonus){
    return basicSalary + bonus;
}

console.log(calculateSalary(40000,5000));
console.log(calculateSalary(70000,500));


// shopping cart

function calculateTotal(price,quantity){
    return price * quantity;
}

console.log(calculateTotal(500,4));
console.log(calculateTotal(900,4));


// discount calculation

function calDisc(price,disc){
    return price -(price * disc/100);
}

console.log(calDisc(1000, 10));
console.log(calDisc(2000, 90));


// with array

function AA(num1){
    return num1.map(function(num1){
        return num1 * 2;
    });
}

const num1 =[1,2,3,4,5];

const result = AA(num1)

console.log(result);
console.log(num1);

// ceating new array
function addItem(cart,item){
    return[...cart, item];
}
const cart=["Laptop"];

const newCart = addItem(cart,"Apple");

console.log(cart);
console.log(newCart);


// Impure function → depends on or changes something outside itself
// What is an Impure Function?

// An impure function is a function that:

// Changes something outside itself, or
// Depends on something outside itself, so the same input may produce different results.

// example

let count=0;

function increment(){
    count++;
    return count;
}

console.log(increment());
console.log(increment());
console.log(increment());

console.log(increment(2));


// math.random()

function num2(){
    return Math.random()
}

console.log(num2());
console.log(num2());

// current time

function time(){
    return new Date().toLocaleTimeString();
}

console.log(time());

// bank account

let balance = 1000;

function withdraw(amount){
    balance = balance-amount;
    return balance;
}

console.log(withdraw(200));
console.log(withdraw(500));


// with modify Array

const cart1=["laptop","Mouse"];

function addItem(item){
    cart.push(item);
}

addItem("Mango");
console.log(cart);

// marks

const marks = [80,90,70];

function addBonus(){
    marks.push(10);
}

addBonus();

console.log(marks)




// | Pure Function                | Impure Function                              |
// | ---------------------------- | -------------------------------------------- |
// | Same input → same output     | Output may change                            |
// | No external side effects     | Has side effects or external dependencies    |
// | Doesn't modify external data | May modify external data                     |
// | Easier to test               | Harder to test                               |
// | Easier to understand         | Can be harder to predict                     |
// | Good for calculations        | Useful when interacting with outside systems |
