import React from 'react'
import Student from './Student';

function Student_App() {
    const students=[
        {id:1, name: "Sara", age:20},
        {id:2, name:"Sonu", age:21}
    ];
  return (
    <>
    {students.map((student)=>(
        <Student 
        key={student.id}
        name={student.name}
        age={student.age}/>
    ))}

    <Student/>
    
    </>
  );
}

export default Student_App;