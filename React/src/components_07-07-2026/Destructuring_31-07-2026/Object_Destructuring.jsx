import React from 'react'

function Object_Destructuring() {
    const person = {
        name: "Sara",
        age:28,
        city:"Warangal"
    };
    const { name, age, city } = person;

      console.log(name);
      console.log(age);
      console.log(city)

  return (
    <>
    <h2> Object Destructuring</h2>
    
    </>
  )
}

export default Object_Destructuring