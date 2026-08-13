import React, { useState, useCallback } from 'react';


function Multiple_Callback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increment}
      className='bg-pink-600 px-2 py-2 m-2'>+</button>
      <button onClick={decrement}
      className='bg-green-600 px-2 py-2 m-2'>-</button>
    </div>
  );
}

export default Multiple_Callback;