import React from 'react'

function New_Array() {
    const numbers = [1,2,3,4,5,6];
  return (
    <>
    <ul>
        {numbers.map((num) => (
            <li key={num}>{num * 2}</li>
        ))}

        
    </ul>
    
    </>

  );
}

export default New_Array;