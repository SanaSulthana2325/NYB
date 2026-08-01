import React, {
  lazy,
  Suspense,
  useState
} from 'react';

const Details = lazy(() => import('./Deatils'));

function Button_App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}
        className='bg-yellow-500'>
        Show Details
      </button>

      {show && (
        <Suspense fallback={<p>Loading Details...</p>}>
          <Details/>
        </Suspense>
      )}
    </div>
  );
}

export default Button_App;