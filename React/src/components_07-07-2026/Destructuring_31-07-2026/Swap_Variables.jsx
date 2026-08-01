import React from 'react'

function Swap_Variables() {
    let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);
  return (
    <>
    <h2>Swap values</h2>
    </>
  )
}

export default Swap_Variables