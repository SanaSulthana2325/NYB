import React from 'react'

function Passing_Argument() {
    function greet(name){
        console.log("Welcome " + name);
    }
  return (
    <>
    <button onClick={()=> greet("Tasan")}
        className='bg-purple-300'> Tasan</button>
     <br/>
    <button onClick={()=> greet("Ali")}
        className='bg-pink-600'> Ali</button>
    
    </>
  );
}

export default Passing_Argument