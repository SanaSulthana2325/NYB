import React from 'react';

function Prop_Destructuring({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default Prop_Destructuring;