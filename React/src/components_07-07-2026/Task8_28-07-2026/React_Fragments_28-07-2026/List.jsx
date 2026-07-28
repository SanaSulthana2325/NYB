import React from 'react'
const fruits = ["Apple","Banana","Orange"];

function List() {
  return (
    <>
    <h2 className="text-3xl font-medium text-orange-500">Fruits</h2>
    <ul >
        {fruits.map((fruit, index)=>(
            <li key={index}
            className="text-2xl font-small text-purple-500"
            >
                {fruit}</li>
        ))}
    </ul>
    
    </>
  );
}

export default List