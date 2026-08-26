// The simplest definition is:

// A prototype is an object from which another object can inherit properties and methods.

// JavaScript uses prototype-based inheritance.

// example

const person ={
    greet: function(){
        console.log("Hello!");
    }
};

const stu = Object.create(person);

stu.name = "Tasan";

console.log(stu.name);

stu.greet();

// create a student

let stu1 ={
    name:"AAA",
    age:56
};

console.log(stu1.name)
console.log(stu1.age)


//

const stu2 = {
    name2:"VVV",

    study: function(){
        console.log("VVV is studying")
    }
};

stu2.study();


//
const stuMethod = {
    study: function(){
        console.log(this.name + " is studying");
},
eat: function(){
    console.log(this.name + " is eating");
}
};

const stu3 = Object.create(stuMethod);

stu3.name = "lali";

stu3.study();
stu3.eat();


// mobile cart

function phone(brand){
    this.brand = brand;
}
phone.prototype.call = function(){
    console.log(this.brand+" is making a call");
};

phone.prototype.message = function(){
    console.log(this.brand +" is sending a message");
}

const phone1 = new phone("iphone");
const phone2 = new phone("samsung");

phone1.call();
phone2.call();

phone1.message();
phone2.message();



// shopping cart

function shoppingCart(user){
    this.user = user;
    this.item = [];
}

shoppingCart.prototype.addItem = function (item){
    this.item.push(item);
    console.log(item + " added to cart");
};

shoppingCart.prototype.showCart = function(){
    console.log(this.user + "'s cart:", this.item);
};

const cart1 = new shoppingCart("Afsa");
const cart2 = new shoppingCart("Minnu");

cart1.addItem("Laptop");
cart1.addItem("Mouse");

cart2.addItem("Mobile")

cart1.showCart();
cart2.showCart();
