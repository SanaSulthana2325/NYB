import React, { useState, useMemo } from 'react';

function Multiple_Dependencies() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [text, setText] = useState('');

  const sum = useMemo(() => {
    console.log('Calculating sum');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <h2>{sum}</h2>

      <button onClick={() => setA(a + 1)} className='bg-pink-600 px-2 py-2'>A</button>
      <button onClick={() => setB(b + 1)} className='bg-green-600 px-2 py-2 m-2'>B</button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
       className='border border-2px'/>
    </div>
  );
}

export default Multiple_Dependencies;