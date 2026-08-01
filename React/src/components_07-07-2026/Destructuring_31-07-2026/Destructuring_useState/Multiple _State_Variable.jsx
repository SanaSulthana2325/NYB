import { useState } from 'react';

function Multiple_State_Variable() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(20);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <button onClick={() => setName('Sana')}
        className='bg-green-300'>
        Set Name
      </button>

      <button onClick={() => setAge(21)}
        className='bg-red-500'>
        Set Age
      </button>
    </div>
  );
}


export default Multiple_State_Variable;