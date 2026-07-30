import React from 'react'

function Arrow_Function() {
    function greet(name){
        alert("Hello " + name);
    }
  return (
    <>
    <button onClick={()=> greet("Sana")}
        className='bg-red-400'> Greet</button>
    </>
  );
}

export default Arrow_Function