//
import sum from './Modules.js'
console.log(sum)


//
export default function good(){

}



//Named export
import {hello,bye} from './Modules.js'
console.log(hello)
console.log(bye)

console.log(hello,bye)

//

import {ha} from '../functions/index.js'

console.log(ha)

// 
// import{add, multiply } from "./Modules.js";
// console.log(add(56, 7))
// console.log(multiply(5,3))


//
import math from "./Modules.js";
console.log(math.mul(10,6))

