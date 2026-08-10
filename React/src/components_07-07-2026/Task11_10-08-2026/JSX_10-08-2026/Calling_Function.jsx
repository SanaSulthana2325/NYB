import React from 'react'

function Calling_Function() {
    function greet(){
    return 'Good Morning';
    }
  return <h1>{greet()}</h1>;
}
  

export default Calling_Function