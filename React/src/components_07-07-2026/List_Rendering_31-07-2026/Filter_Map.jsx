import React from 'react'

function Filter_Map() {
    const numbers = [1,2,3,4,5,6,7,8,9];
  return (
    <>
    <h2>Even Numbers</h2>
    {numbers
    .filter((num)=> num % 2 === 0)
    .map((num)=>(
        <p key={num}>{num}</p>
    ))}
    
    </>
  );
}

export default Filter_Map;