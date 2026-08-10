import React, { useState } from 'react';

function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
        padding: '20px'
      }}
    >
      <h1>React App</h1>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Theme;