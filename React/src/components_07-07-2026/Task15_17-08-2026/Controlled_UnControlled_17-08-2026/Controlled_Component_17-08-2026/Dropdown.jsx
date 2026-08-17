import React,{useState} from 'react'

function Dropdown() {
    const[course, setCourse] = useState("");
  return (
    <>
    <h2>Select Course</h2>
    <select
    value={course}
    onChange={(e) => setCourse(e.target.value)}
    className='bg-pink-500'>

        <option value="">Select</option>
        <option value="HR">HR</option>
        <option value="Marketing">Marketing</option>
        <option value="Finance">Finance</option>
        </select>
        <p> Selected Course: {course}</p>
    </>
  );
}

export default Dropdown;