import { useState } from "react";

function Checkbox_Form() {

  const [hobbies, setHobbies] = useState([]);

  const handleCheckbox = (event) => {

    if (event.target.checked) {

      setHobbies([...hobbies, event.target.value]);

    } else {

      setHobbies(
        hobbies.filter(item => item !== event.target.value)
      );
    }
  };

  return (

    <div>

      <label>

        <input
          type="checkbox"
          value="Reading"
          onChange={handleCheckbox}
        className="border border-black p-2 rounded w-64"

        />

        Reading

      </label>

      <br />

      <label>

        <input
          type="checkbox"
          value="Coding"
          onChange={handleCheckbox}
        className="border border-black p-2 rounded w-64"

        />

        Coding

      </label>

      <br />

      <label>

        <input
          type="checkbox"
          value="Gaming"
          onChange={handleCheckbox}
        className="border border-black p-2 rounded w-64"

        />

        Gaming

      </label>

      <hr />

      <h3>{hobbies.join(", ")}</h3>

    </div>

  );
}

export default Checkbox_Form;