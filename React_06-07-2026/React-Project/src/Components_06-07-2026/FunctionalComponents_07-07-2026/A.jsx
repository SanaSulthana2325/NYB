import React from 'react'
import B from './B'

function A() {
  let a =10
  console.log(a)
  return (
    <>
        <h1>Hello This is react functional component</h1>
        <h1>{a}</h1>
    
        {/*<B/>*/}
        <B Hello="hai"/>
        

    </>
  );
}

export default A;



//own data
//API calls
//Parent component