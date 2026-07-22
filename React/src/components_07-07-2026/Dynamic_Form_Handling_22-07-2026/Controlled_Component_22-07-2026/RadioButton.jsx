import {useState} from 'react'

function RadioButton() {
    const[gender,setGender]=useState("");
  return (
    <>
    <input
    type="radio"
    value="Male"
    checked={gender==="Male"}
    onChange={(e)=>setGender(e.target.value)}/>
    Male
    <br/>
    <br/>
    <input
    type="radio"
    value="Female"
    checked={gender==="Female"}
    onChange={(e)=>setGender(e.target.value)}/>

    Female
    <br/>
    <br/>

    <h2>{gender}</h2>
    </>
  )
}

export default RadioButton