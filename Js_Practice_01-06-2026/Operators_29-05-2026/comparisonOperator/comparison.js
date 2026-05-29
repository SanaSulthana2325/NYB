// comparison operatos:used to compare two values injs
// returns: true--> if condition is correct
 //         false--> if condition is wrong
//includes:

//a.equal To(==): checks only values

console.log(10 =="10")
console.log(40=="60")

//b.strict equal to(===): checks values and datatypes 

console.log(10 === "10")// string is used
console.log(10 === 10)
console.log(20 === 40)
console.log(90 === "82")

//c. not equal to(!=)
console.log(10 != 5)
console.log(6 != 6)

//d.Greater than(>):
console.log(20 > 70)
console.log(20 > 10)

//e.less than(<)
console.log(5<2)
console.log(60<90)
console.log(90<40)

//f.greaterthan or equal to(>=):
console.log(10 >=10)
console.log(78 >= 66)

//g.lessthan or equae to (<=):
console.log(5 <= 10)
console.log(55 <= 89)

//ex
let s =10
let h = 20
console.log(s ===h )
console.log(s != h )
console.log(s >h )
console.log(s <h )
console.log(s >=h )
console.log(s <= h )
