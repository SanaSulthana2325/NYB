import { sum } from "./sum.js";


document.getElementById("button").addEventListener("click", () => {

    const result = sum(6, 9);

    document.getElementById("result").innerHTML = 
        `Sum of 6 & 9 = ${result}`;

});