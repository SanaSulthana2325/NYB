import React,{useState} from 'react'

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);
  return (
    <>
    <label>
        <input
        type='checkbox'
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        />
        I am a good girl and this wrold is beautiful
    </label>
    <p className={isChecked ? "text-green-500": "text-red-500"}>
        Status: {isChecked ? "Accepted" : "Not Accepted"}
        
    </p>
    </>
  );
}

export default Checkbox;