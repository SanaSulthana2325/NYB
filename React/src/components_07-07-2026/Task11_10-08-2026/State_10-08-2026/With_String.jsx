import React, {useState} from 'react';

function With_String() {
    const[name,setName] = useState('lulu');
  return (
    <>
    <h1>Hello {name}</h1>

    <button onClick={() => setName('Rahul')}
        className='bg-purple-500'>Change Name</button>
    </>
  )
}

export default With_String