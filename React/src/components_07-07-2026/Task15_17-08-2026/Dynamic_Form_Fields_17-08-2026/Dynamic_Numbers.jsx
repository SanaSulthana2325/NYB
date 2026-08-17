import React,{useState} from 'react'

function Dynamic_Numbers() {
    const [phones, setPhones] = useState([""]);

    const addPhone = () => {
        setPhones([
            ...phones, ""
        ]);
    };

    const removePhone = (index) =>{
        setPhones(
            phones.filter((_, i) => i!== index)
        );
    };

    const handleChange = (index, value) =>{
        const updatedPhones =[...phones];
        updatedPhones[index] = value;
        setPhones(updatedPhones);
    };

  return (
    <div>
        <h2>Phone Number</h2>
    {phones.map((phone,index) =>(
        <div key={index}>
            <input
            type="text"
            placeholder='Enter Phone Number'
            value={phone}
            onChange={(e) =>
                handleChange(index,e.target.value)
            } className='bg-yellow-600'/>
            

            <button onClick={() => removePhone(index)}
                className='bg-pink-600'> Remove</button>
        </div>
  ))}
  
  <button onClick={addPhone}
  className='bg-orange-600'> Add Phone Number</button>
  </div>
  );
}

export default Dynamic_Numbers