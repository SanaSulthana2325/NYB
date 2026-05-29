//Bitwise operator:it works on  binary numbers (0 and 1)
// it include:
//a.AND (&): returns 1 only when both bits are 1

let a = 5
let b = 3
console.log(a & b)

//0-> 0000
//1-> 0001
//2-> 0010S
//3-> 0011
//5-->0101

//1&2
//0001
//0010
//0000

// b. OR(|)
let e = 5
let f = 3
console.log(a | b)


// XOR(^): return 1 when bits are different
let t= 5
let s= 3
console.log(t ^ s)

// NOT(~) : Reverses all bits

let k = 5
console.log(~k)

//Left Shift(<<): Shifts bits to the left

let p = 5
console.log(p << 1)

//right shift(>>): shifts bits to the right
let G = 10
console.log(G >> 1)


//ex
let A = 5
let B = 3
console.log("AND:", A & B)
console.log("OR:", A | B)
console.log("XOR:", A ^ B)



// Ternary Operator: it is shortcut method for if-else statement injs
// condition ?true : false

// ex
let age = 20
let results = (age >=18) ? "Eligible to vote" : "not Eligible"
console.log(results)

//
let age1 = 10
let result = (age1 >=18) ? "Eligible to vote" : "not Eligible"
console.log(result)

// ex
let marks = 45
let results1 = (marks >= 45) ? "pass" : "Fail"
console.log(results1)
