import React from 'react';

function Ternary() {
  const numbers = [1,2,3,4,5,6,7,8,9];

  return (
    <>
      {numbers.map((num) =>
        num % 2 === 0 ? (
          <p key={num}>{num}</p>
        ) : null
      )}
    </>
  );
}

export default Ternary;