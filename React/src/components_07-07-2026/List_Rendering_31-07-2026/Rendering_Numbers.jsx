import React from 'react'

function Rendering_Numbers() {
    const numbers = [10,20,30,40,50];
  return (
    <>
    <h2>Numbers</h2>
    {numbers.map((num)=>(
        <p>{num}</p>
    ))}
    </>
  );
}

export default Rendering_Numbers