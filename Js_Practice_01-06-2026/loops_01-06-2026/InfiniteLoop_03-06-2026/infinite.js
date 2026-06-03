// infinite loop: a loop that never stops executing because its condition is always remains true

let i = 1
while(i < 50){
    console.log(i)
    i++
}

//
while(true){
    console.log("running")
    break
}

// use safety counter
let count = 0;
while (true) {
    console.log("loop running");

    count++;
    if (count === 5) break;
}

//
let p = 1
while(p <= 5){
    console.log("p =", p)
    p++
}

// for loop we can use
for(let u = 1;u<=5;u++){
    console.log(u)
}

//
let input;

do{
    input = "admin";
} while (input !== "admin");
console.log(input)

