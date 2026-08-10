import React from 'react';

function Card(props) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        background: 'yellow'
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;