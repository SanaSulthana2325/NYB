import React, { useState } from 'react';


function Add_Item_Array() {
  const [fruits, setFruits] = useState([
    'Apple',
    'Mango'
  ]);

  const addFruit = () => {
    setFruits([...fruits, 'Banana']);
  };

  return (
    <div>
      <h2>Fruits</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <button onClick={addFruit}>
        Add Banana
      </button>
    </div>
  );
}

export default Add_Item_Array;