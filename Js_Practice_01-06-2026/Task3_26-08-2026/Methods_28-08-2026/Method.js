// A method is simply a function that is stored inside an object or class.

// Simple definition

// A method is a function used to perform an action on an object.

const emp = {
    name:"KAAA",
    department:"HR",

    displayDetails: function(){
        console.log(this.name);
        console.log(this.department);

    }
};

emp.displayDetails();


// students examples

class rr{
    constructor(name,age,hobbies,place){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.place = place;
    }

    displayDetails(){
        console.log("Name:",this.name);
        console.log("Age:",this.age);
        console.log("Hobbies:",this.hobbies);
        console.log("place:",this.place);

    }
}

const uu = new rr("Ayesha",34,"Cooking", "Warangal");
uu.displayDetails();

// shopping cart example

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(product, "added to cart");
    }

    removeProduct(product) {
        this.products = this.products.filter(item => item !== product);
        console.log(product, "removed from cart");
    }

    showCart() {
        console.log("Cart:", this.products);
    }
}

const cart = new ShoppingCart();

cart.addProduct("Laptop");
cart.addProduct("Mouse");
cart.showCart();

cart.removeProduct("Mouse");
cart.showCart();


// mobile example

class Mobile{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    call(num){
        console.log("Calling",num);
    }
    sendMessage(message){
        console.log("Message:",message);
    }
}

const phone = new Mobile("Samsung","Galaxy","iphone");

console.log("8976543476");
phone.sendMessage("Hello!");


// with return value

class emp1{
    constructor(name,monthlySalary){
        this.name = name;
        this.monthlySalary= monthlySalary;

    }
    calculateAnnualSalary(){
        return this.monthlySalary * 12;
    }
}

const emp2 = new emp1("TATA",50000);
const annualSalary = emp2.calculateAnnualSalary();
console.log("Annual Salary:", annualSalary);