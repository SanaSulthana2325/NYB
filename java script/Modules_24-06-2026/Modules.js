//Modules:
//Modules are a way to split code into separate files and reuse them wherever needed.

//Instead of writing everything in one file, we break code into small reusable parts.


// default export: in whole file we can export only one code
// onli 1 export can be done
// we can import with any name
//no need to use {} at the time of input

 export default function sum(a, b){
    return a+b
}
console.log(sum(1,2))

//
import good from './Module1.js'
console.log(good)

// named export: we can export n number codes

export function hello(){

}

export function bye(){

}


