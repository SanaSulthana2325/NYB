import React, { useState, Suspense } from 'react';

const About = React.lazy(() =>
  import('../About_Component_13-08-2026/About')
);

function Button() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className='bg-pink-700 text-white px-4 py-2'
      >
        Load About
      </button>

      <Suspense fallback={<h2>Loading About...</h2>}>
        {show && <About />}
      </Suspense>
    </div>
  );
}

export default Button;