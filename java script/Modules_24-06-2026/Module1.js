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
