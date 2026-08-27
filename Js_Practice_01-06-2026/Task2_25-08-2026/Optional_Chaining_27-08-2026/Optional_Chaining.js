// Optional Chaining (?.) :  is used when you want to safely access a property, method, or array element without getting an error if something is null or undefined.

// object?.property
// (or)

// ?. checks whether the value before it exists. If it is null or undefined, JavaScript stops and returns undefined instead of throwing an error.

// example

const stu = {
    name:"JUJU",
    age:45
}

console.log(stu.address?.city);

// The ?. means:

// "If address exists, access city; otherwise, return undefined."

// example2

const user ={
    name:"GAGA"
};

console.log(user?.name)


// With nested object

const emp ={
    name:"Priya",
    address:{
        City:"HYD",
        country:"India"
    }
};
console.log(emp.address?.City)
console.log(emp.address?.country)

// user Profile

var user1 = {
    name:"sonu",
    email:"sonu23@gamil.com",
    address:{
        city:"HYD"
    }

};
console.log(user1?.name);
console.log(user1?.address?.city);

// employee data

const emp1 = {
    Id: 101,
    name:"Rahul",
    age:43,
    department:{
        name:"developmemt",
        manager:{
            name:"Nisha"
        }
    }
};

console.log(emp1?.name);
console.log(emp1?.Id);
console.log(emp1?.age);
console.log(emp1?.department?.name);
console.log(emp1?.department?.manager?.name);


// with arrays
// syntax   array?.[index]

const stu1 = ["nana","lala","kuku","kaka"];

console.log(stu1?.[0]);
console.log(stu1?.[1]);
console.log(stu1?.[2]);
console.log(stu1?.[3]);
console.log(stu1?.[5]);

// with function

const user2 = {
    name:"TATA",
    greet(){
        console.log("Hello Lusi");
    }
};

user2.greet?.();

// with callback

function processUser(name,callback){
    console.log("Processing " + name);

    callback?.();
}
processUser("Dada");

// to make uppercase

const user3 ={
    name:"mira"
};

console.log(user3.name.toUpperCase());
console.log(user3.name.toLocaleLowerCase());
