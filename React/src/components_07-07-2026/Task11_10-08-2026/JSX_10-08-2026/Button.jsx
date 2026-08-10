import React from 'react';

function Button() {

  function test() {
    alert("Button clicked!");
  }

  return (
    <>
      <button onClick={test} 
      className='bg-green-600'>Click</button>
    </>
  );
}

export default Button;