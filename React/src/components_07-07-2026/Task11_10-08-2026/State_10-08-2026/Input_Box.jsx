import React, { useState } from 'react';

function Input_Box() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h2>Your name is: {name}</h2>
    </div>
  );
}

export default Input_Box;