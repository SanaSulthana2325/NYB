import React, { useState } from 'react';

function With_Boolean() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}
        className='bg-pink-900'>
        Show / Hide
      </button>

      {show && <h2>Hello React!</h2>}
    </div>
  );
}

export default With_Boolean;