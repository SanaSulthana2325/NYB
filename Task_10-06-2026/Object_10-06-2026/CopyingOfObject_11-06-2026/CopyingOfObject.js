//Create examples demonstrating normal object copying.
// is also known as reference object
// both variable point to a same object in memory


// mobile setting
let mobileSettings = {
    brightness: 70,
    volume: 50
};

let backupSettings = mobileSettings;

backupSettings.volume = 100;

console.log(mobileSettings.volume);
console.log(backupSettings.volume);

//student Data
let student1 = {
    name: "Rahul",
    marks: 90
};

let student2 = student1;

student2.marks = 95;

console.log(student1.marks);
console.log(student2.marks);


// array inside object

let user1 = {
    name: "Sana",
    skills: ["HTML", "CSS"]
};

let user2 = user1;

user2.skills.push("JavaScript");

console.log(user1.skills);
console.log(user2.skills);

//primitive values vs objects

let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b)
// primitive vakues are copied separately

// object
let obj1 ={value: 10}
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value);
// because object are copied by reference


//Implement shallow copy using spread operator and Object.assign().

// shallow copy with spread operator:
let user11 = {
    name: "Tasan",
    age: 20
};

let user21 = { ...user11 };

user21.name = "tasleem";

console.log(user11.name);
console.log(user21.name);

// shallow copy using object.assign(): copyies properties from one object into nother object

let employee1 = {
    name: "Ali",
    salary: 30000
};

let employee2 = Object.assign({}, employee1);

employee2.salary = 50000;

console.log(employee1.salary);
console.log(employee2.salary);

// profile editing

let profile = {
    username: "Sana",
    theme: "dark"
};

let tempProfile = Object.assign({}, profile);

tempProfile.theme = "light";

console.log(profile.theme);
console.log(tempProfile.theme);


// nested object problem in object.assign()
let company1 = {
    name: "TechCorp",
    location: {
        city: "Warangal"
    }
};

let company2 = Object.assign({}, company1);

company2.location.city = "Hyderabad";

console.log(company1.location.city);


// combining spread operator with Nested copy: we can partially fix nested object problem
let user12 = {
    name: "Sana",
    address: {
        city: "Warangal"
    }
};

let user23 = {
    ...user12,
    address: {
        ...user12.address
    }
};

user23.address.city = "Hyderabad";

console.log(user12.address.city);
console.log(user23.address.city);


//Implement deep copy using JSON methods and alternative approaches.

// using JSON method
let student4 = {
    name: "Sana",
    address: {
        city: "HNK"
    }
};

let student3 = JSON.parse(JSON.stringify(student4));//JSON parse means converts in to new object

student3.address.city = "Mumbai";

console.log(student4.address.city);
console.log(student3.address.city);

// profile editing
let profile1 = {
    username: "JKJK",
    settings: {
        theme: "green"
    }
};

let draftProfile1 = JSON.parse(JSON.stringify(profile1));

draftProfile1.settings.theme = "light blue";

console.log(profile1.settings.theme);
console.log(draftProfile1.settings.theme);

// example
let obj11 = {
    today: new Date(),
    greet: function () {
        console.log("Hello");
    }
};

let obj22 = JSON.parse(JSON.stringify(obj11));

console.log(obj22);

//2. deep copy using StructuredClone(): it is modern and best approach
let employee11 = {
    name: "Aloo",
    details: {
        salary: 50000
    }
};

let employee22 = structuredClone(employee11);

employee22.details.salary = 80000;

console.log(employee11.details.salary);
console.log(employee22.details.salary);

//game save system
let gameState = {
    level: 5,
    player: {
        health: 100
    }
};

let savedState = structuredClone(gameState);

savedState.player.health = 50;

console.log(gameState.player.health);
console.log(savedState.player.health);

//deep copy using recursive function
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

let original = {
    name: "Sana",
    address: {
        city: "Warangal"
    }
};

let copied = deepCopy(original);

copied.address.city = "Hyderabad";

console.log(original.address.city);
console.log(copied.address.city);

//Compare behavior differences between shallow and deep copy.

//Feature                      Shallow Copy       Deep Copy

//Outer Object                   Copied             Copied

//Nested Objects                 Shared           Fully Copied

//Original Object Affected?   Sometimes Yes             No

//Memory                      Partially Separate      Completely Separate

//Performance                   Faster                  Slightly Slower



//Document observations with sample outputs.

// normal copy
let obj19 = {
    name: "Sonu"
};

let obj24 = obj19;

obj24.name = "Alia";

console.log(obj19.name);
console.log(obj24.name);

// both variables points to the same object
// changing copied object also changes original object
// no separate object is create


// shallow copy usong speard
let user13 = {
    name: "Sadiya"
};

let user24 = { ...user13 };

user24.name = "Arfath";

console.log(user13.name);
console.log(user24.name);

//outer object is copied separately
// top-level changes do not affect original object

//deep copy using JOSN method
let student44 = {
    name: "Sana",
    address: {
        city: "HNK"
    }
};

let student34 = JSON.parse(JSON.stringify(student44));

student34.address.city = "Mumbai";

console.log(student44.address.city);
console.log(student34.address.city);

//completely separate copy is created
//nested objects are independent
//Original objects remains safe
