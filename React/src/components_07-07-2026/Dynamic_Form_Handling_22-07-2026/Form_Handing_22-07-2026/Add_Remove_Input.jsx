import { useState } from "react";

function Add_Remove_Input() {

  const [phones, setPhones] = useState([""]);

  const handleChange = (index, value) => {

    const list = [...phones];

    list[index] = value;

    setPhones(list);
  };

  const addPhone = () => {

    setPhones([...phones, ""]);
  };

  const removePhone = (index) => {

    const list = phones.filter((_, i) => i !== index);

    setPhones(list);
  };

  return (

    <div>

      <h2>Phone Numbers</h2>

      {phones.map((phone, index) => (

        <div key={index}>

          <input
            value={phone}
            onChange={(e) => handleChange(index, e.target.value)}
             className="border border-black p-2 rounded w-64"

          />

          <button onClick={() => removePhone(index)}
        className="border border-black p-2 rounded w-64"
            >
            Delete
          </button>

        </div>

      ))}

      <br />

      <button onClick={addPhone}
        className="border border-black p-2 rounded w-64"
      >
        Add Phone
      </button>

    </div>

  );
}

export default Add_Remove_Input;