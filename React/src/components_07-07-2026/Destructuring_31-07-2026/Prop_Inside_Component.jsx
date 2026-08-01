import React from 'react'

function Prop_Inside_Component() {
  function Student(props) {
  const { name, age } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
  return (
    <div>Prop_Inside_Component</div>
  )
}

export default Prop_Inside_Component;


