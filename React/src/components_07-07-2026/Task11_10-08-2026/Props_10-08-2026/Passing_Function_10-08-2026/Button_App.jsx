import React from 'react'
import Button1 from './Button1';

function Button_App() {
    function showMessage(){
        console.log('Button Clicked');
    }
  return (
    <>
    <Button1 handleClick={showMessage}/>
    </>
  )
}

export default Button_App