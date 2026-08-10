import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border: bg-green-300'
      />
      <br/>

      <input
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className='border: bg-pink-300'
      />

      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}

export default Form;