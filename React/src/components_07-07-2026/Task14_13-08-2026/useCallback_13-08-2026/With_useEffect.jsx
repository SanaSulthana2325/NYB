import React, { useState, useEffect, useCallback } from 'react';

function With_useEffect() {
  const [count, setCount] = useState(0);

  const fetchData = useCallback(() => {
    console.log('Fetching...');
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        className='bg-green-700 text-white px-4 py-2'
      >
        Increment
      </button>
    </div>
  );
}

export default With_useEffect;