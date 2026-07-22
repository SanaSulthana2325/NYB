import { useState} from 'react'

function Dropdown() {
    const[city,setCity]=useState("");
  return (
    <>
    <select
    value={city}
    onChange={(e)=>setCity(e.target.value)}
        className="border border-black p-2 rounded w-64"
    >
        <option value="">Choose City</option>
        <option value="Warangal">Warangal</option>
        <option value="Hyderabad">Hrderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>





    </select>
    <h2>{city}</h2>
    </>
  )
}

export default Dropdown;