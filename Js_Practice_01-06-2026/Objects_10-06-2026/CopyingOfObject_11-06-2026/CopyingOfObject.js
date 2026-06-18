//Copying of Objects:means creating another object with the same data(properties and values)

let stu={
    name: "Sana",
    age:20
};
console.log(stu)

//TYPES OF OBJECT COPYING

//Normal Copy:It does not create a new object
// both variables point to the same memory location

let user1 = {
    name:"Sana",
    City:"warangal"
};

let user2 = user1;

user2.name = "Ayesha";

console.log(user1.name)
console.log(user2.name)

// example student registration form

let formData = {
    name:"tasan",
    course: "javascript"
};
let backup = formData
backup.course = "React";
console.log(formData.course)

//live object tracking

let liveLocation = {
    city: "Warangal"
};

let trackingSystem = liveLocation;
console.log(liveLocation)


// multiplayer game objects

let player = {
    health: 100
};

let teammateView = player;
console.log(player)


//Shallow Copy:creates a new outer object,but nestedobjects are still shared

//Method For Shallow Copy

// using Spread Operator(...)

let user3 = {
    name: "AAA",
    age: 20
};

let user4 = { ...user3 };

user4.name = "BBB";

console.log(user3.name);
console.log(user4.name);

// problem with nested object
let student1 = {
    name: "Sana",
    address: {
        city: "Warangal"
    }
};

let student2 = { ...student1 };

student2.address.city = "Hyderabad";

console.log(student1.address.city);
// Even after shallow copy,nested objects are still linked

//e-commerce cart

let cart = {
    item: "Shoes",
    price: 2000
};

let updatedCart = { ...cart };

updatedCart.price = 2500;

console.log(cart.price);
console.log(updatedCart.price);


//Deep Copy: creates a compeletely separate object,including nested object,outer objects,arrays

// using structuredClone()
let student11 = {
    name: "Sana",
    address: {
        city: "Warangal"
    }
};

let student22 = structuredClone(student11);

student22.address.city = "Hyderabad";

console.log(student11.address.city);
console.log(student22.address.city);

// using JSON
let obj1 = {
    name: "Sana",
    age: 20
};

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name = "Ayesha";

console.log(obj1.name);
console.log(obj2.name);

// Online profile editing
let originalProfile = {
    name: "Sana",
    settings: {
        theme: "dark"
    }
};

let draftProfile = structuredClone(originalProfile);

draftProfile.settings.theme = "light";

console.log(originalProfile.settings.theme);
console.log(draftProfile.settings.theme);


//