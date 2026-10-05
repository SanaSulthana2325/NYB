import React from 'react'

// Rule:1 Because there are two separate top-level elements.
function JSX_Rule() {
  return (
    <div>
        <h1> Hello Wrold</h1>
        <p> Welcome</p>
    </div>
  );
}

function Image(){
    return(
        <>
        <img src='https://static.vecteezy.com/system/resources/previews/022/257/315/large_2x/rose-flower-pictures-beautiful-roses-love-rose-flower-beautiful-flowers-wallpapers-ai-generated-free-photo.jpg' width="300px" height="300px"/>
        </>
    )
}

// Rule:3  Use className instead of class

function Class(){
    return(
        <>
        <h1 className='title'> Hello Wrold </h1>
        </>
    )
}

// Rule 4: JavaScript goes inside {}

function Da(){
    const name="Tasan";
    return(
        <>
        <h1> Hello {name} </h1>
        </>
    )
}

// Valid and Invalid JSX

function Ud(){
    return(
        <>
        <h1> Hello!!</h1>
        <p> Welcome to the  technological wrold User </p>
        </>
    )
}

//beacuse everything is inside parent element 
export {JSX_Rule, Image,Class, Da, Ud}



// JSX Rules

// There are some important JSX rules.

// Rule 1: Return one parent element

// Rule:2 Close All Tags

