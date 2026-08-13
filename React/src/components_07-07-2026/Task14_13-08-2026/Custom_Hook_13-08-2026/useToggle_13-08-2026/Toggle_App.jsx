import React from 'react'
import useToggle from './useToggle';

function Toggle_App() {
    const[isVisible, toggle] = useToggle();
  return (
    <div>
        <button onClick={toggle}
        className='bg-pink-700'>Toggle</button>

        {isVisible && <h2>Hello Sana</h2>}
    </div>
  );
}

export default Toggle_App;