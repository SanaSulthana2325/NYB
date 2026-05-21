//ARRAY
//
var arr=["1",2,3,4]
console.log(arr)
// in another if we want to add anything for there are 

//some methods of array

//1. push(add items at the end)
// like (if we add function to it)
function Hai(){
arr.push(5)

}
Hai()
console.log(arr)
//
arr.push(6)
console.log(arr)
//
arr.push(7)
console.log(arr)
//
arr.push(90)
console.log(arr)

//2.Unshift()[first]
arr.unshift(8)
console.log(arr)

//
arr.unshift(80)
console.log(arr)

//3.splice()  / we can addit any where
arr.splice(3,2,"hello")
console.log(arr)

var a=[1,2,3,4,5]

console.log(a[0])
console.log(a[3])
// referenceofthearray[0] [1] [2] [3]....n-1

 //4.pop()[remove last item]
 arr.pop()
 console.log(arr)

 //
 arr.pop()
 console.log(arr)

 //5.shift() [removes first item]

 arr.shift()
console.log(arr)

//
arr.shift()
console.log(arr)


//6.splice()
arr.splice(1,1)
console.log(arr)


//Task:
//  add splice at first
let arra= [2,3,4,5,6,10]
console.log(arra.length) 
arra.splice(0,0,1)
console.log(arra)

// add splice at last
arra.splice(arra.length,0,7)
console.log(arra)

//remove first
arra.splice(0,1)
console.log(arra)

// remove last
arra.splice(-1,1)
console.log(arra)

//add the text in middle
arra.splice(1,1,"hai")
console.log(arra)

//
arra.splice(2,1,"sana")
console.log(arra)

//delect or remove text from the middle
arra.splice(2,1)
console.log(arra)

//example

let ARR =["a","b","c","d"]

console.log(ARR.length)

console.log(ARR)

console.log(ARR)

console.log(ARR[4])

//array.length=total items count,starts from 1
// but index starts from 0,so last item= array[array.length-1]

//7. indexOf()

let num = [100,1,2,3,4]
console.log(num)
console.log(num[2])
console.log(num.indexOf(0))

//ex
let names=['sana','sulthana','tasan']
console.log(names.indexOf('sulthana'))
console.log(names.indexOf('tasan'))
console.log(names.indexOf('sana'))

//8. includes() // tur or false

let Num = [1,2,3,4,6]
console.log(Num)
console.log(Num.includes(0))
console.log(Num.includes(5))
console.log(Num.includes(1))

//ex
let name=['sana','tasleem','tasan']
console.log(name.includes('tasleem'))
console.log(name.includes('sulthanas'))
console.log(name.includes('sana'))



//lastIndexOf // finds last position of item
// like

let fruits =['apple','banana','mango','apple','orange']
 console.log(fruits.indexOf('apple'))
 
 console.log(fruits.lastIndexOf('apple'))

 console.log(fruits.lastIndexOf('grapes'))
// with from Index
 console.log(fruits.lastIndexOf('apple',6))


//assign empty array


//combining 2 array:( by using 'concat' we can 2 arrays)

var a=[1,2,3,4,5,6,7]
var b=["a","b","c","d","e"]
console.log(a,b)
var c=a.concat(b)
console.log(c)
for(let i=0; i<a.length;i++){
    console.log(a[i]+"="+ b[i])
}

//ex
let p=[1,2,3]
let q=[4,5,6]
let s=["aa","bb","cc"]
console.log(p,q)

let r=p.concat(q)
console.log(r)

let t=p.concat(q,s)
console.log(t)

for(let i=0;i<p.length;i++){   // we add es here for loop to get outputlike 1=a,2=b
    console.log(p[i]+"="+ s[i])
}


// spread

let f=[...p,...q,...s]
console.log(f)

 var d=[...a,...b]
console.log(d)


//

for(k of f){
    console.log(k)
}

for(k of d){
    console.log(k)
}

//for in loop

var arr=[1,2,3,4]

for(i in arr){
    console.log(i)
}
//
var Arr=[1,2,3,4]
for (i in Arr){
    arr[i]=arr[i]+1
}
console.log(arr)

//for of loop

for(i of arr){
    console.log(i)
}

// tesing the array
// some and every
console.log(arr.some(i => i>3))

console.log(arr.every(i => i>4))

//some ex
let marks = [55,78,62,49,90,20]//@
console.log(marks.some(m=> m>=80))
console.log(marks.some(m=> m>=35))

//
let cart = [299,499,999,1999]
console.log(cart.every(price => price < 800))
console.log(cart.some(price => price < 1000))


//join
console.log(arr.join(" -"))
//sort

let arr1=[1,9,5,6,7,3,4,8,60,78,3,32,3]
console.log(arr1)
arr1.sort()
console.log(arr1)

arr1.sort((a,b)=> a-b)
console.log(arr1)

//TASK(without using sort we have to do sortor arrange numbers in acending to decending order and reverse)
// by using for loop,if,function

let arr2=[9,4,7,1,3,3,7,1,30,20,15]
for(let round =0; round <arr2.length;round++){
    for(let i=0; i<arr2.length - 1;i++){
if(arr2[i] < arr2[i+1]){
    let temp = arr2[i]
arr2[i] = arr2[i+1]
arr2[i+1]= temp
}

    }
}
console.log("ascending:",arr2)
console.log("descending:", arr2)


// flattening of array( making nested array flat)
let x=[1,2,3,4,[1,2,3,[2,1,3]]]

x.flat(3)
console.log(x)

// ex
let w=[1,2,3,4,[5,[6,[7,]]]]
console.log(w.flat())
console.log(w.flat(0))
console.log(w.flat(Infinity))

// removing duplicates

var n=[1,2,3,4,1,2]
console.log(...new Set(n))
// indexOf()
var m=[]

for(i of n){
    if(m.indexOf(i) == -1){
        m.push(i)
    }
}
console.log(m)
console.log(n)

//map(transform every item in array and make a new array)
var arr4=[1,2,3,4,5]
console.log(arr4.map(i => i*i))
console.log(arr4.filter(n => n%2 ===0))
console.log(arr4.filter(i=>3))
let total = arr4.reduce((sum, num) => sum+num, 0)
console.log(total)


//filter
//ex
//var num[1,9,5,6,7,3,4,8,60,70,78,54,32,3,3,]

//reduce (accumulator: "bucket" that collects the results and current value: current item in loop)
//ex

// for each






