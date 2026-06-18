//Practice for...in loop with objects.
// print key values
let car={
    brand:"Toyota",
    model:"Innova",
    color:"black"

}
for(let key in car){
    console.log(key)
}

// print all values
let car1={
    brand:"Toyota",
    model:"Innova",
    color:"black"

};
for(let key in car1){
    console.log(car1[key])
}

// print keys and values together
let car2={
    brand:"Toyota",
    model:"Innova",
    color:"black"

}
for(let key in car2){
    console.log(key +" : "+car2[key])
}

//count object properties:
let car4={
    brand:"Toyota",
    model:"Innova",
    color:"black"

}
let count =0
for(let key in car4){
    count++;
}
console.log("Total properties =", count)


// total marks count:
let marks = {
    math:90,
    science:87,
    englich:99
}
let total = 0;
for (let subject in marks){
    total += marks[subject];
}

console.log("Total Marks =", total);

//find heighest marks
let marks1 = {
    math:34,
    science:87,
    englich:99
}
let heighest = 0;
for (let subject in marks1){
    if(marks[subject] > heighest){
        heighest = marks1[subject]
    }
}

console.log("Heighest Marks1 =", heighest);

// prints only string values
let car5={
    brand:"Toyota",
    model:"Innova",
    color:"black",
    price: 70000,

}
for(let key in car5){
    if(typeof car5[key] === "string"){
        console.log(car5[key])
    }
}

// print even values
let numbers = {
    a: 10,
    b: 15,
    c: 20,
    d: 25
};

for (let key in numbers) {
    if (numbers[key] % 2 === 0) {
        console.log(numbers[key]);
    }
}

// convert objects into sentences
let user = {
    name: "Sana",
    city: "Warangal",
    profession: "Developer"
};

let sentence = "";

for (let key in user) {
    sentence += user[key] + " ";
}

console.log(sentence);

//Create programs using JavaScript Date object (current date, formatting, etc.).


//Implement template strings with dynamic values.


//Use Math object methods (round, floor, ceil, random).


//Practice string object methods (length, slice, substring, replace, etc.).


//Create small programs combining all concepts.