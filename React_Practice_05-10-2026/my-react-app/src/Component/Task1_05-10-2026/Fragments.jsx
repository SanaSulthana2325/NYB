import React from 'react'

function Fragments() {
  return (
    <>
    <h1> hai tasan</h1>
    <h3> how are you!  Long time no see</h3>
    </>
  )
}

function Render(){
  return(
    <>
    <h1> Social Media</h1>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in quod ea! Amet tempora omnis veniam exercitationem veritatis aut id quae, illum maxime facere! Numquam quos deserunt eius voluptatum reiciendis?</p>
    </>
  )
}


// Calling function in components

function Add(a,b){
  return a+b;
}

export {Fragments, Render, Add};









// Fragments

// Sometimes we need a parent element but don't want to add an extra <div>.

// We can use a Fragment.



// It groups multiple elements without adding an actual HTML element to the page.


// Strict Mode

// StrictMode is a React development feature that helps identify potential problems in your application.

// It is commonly used in main.jsx.


// Rendering Components

// Rendering means displaying a React component on the webpage.