import React from 'react'

function Parent_Child() {
  return (
    <div>
        <h2> Hello !! this is child Component</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem corrupti voluptatibus ducimus reiciendis optio aperiam animi sapiente ipsam fugiat nobis, officia consequuntur mollitia doloremque? Temporibus dolorem nostrum quibusdam odio?</p>
    </div>
  );
}

function Parent1(){
    return(
        <>
        <h1> I am The Parent Component</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quos quasi tempore beatae nobis ab iusto, cupiditate, a illum temporibus autem neque, quaerat architecto officiis nostrum totam nesciunt vel harum.</p>
<br/>
        <Parent_Child/>
        </>
    )
}


// Pass functions from Parent to Child.

function Oa(){
    function addToCart(){
        console.log("Sana Add Product!");
    }

    return(
        <>
        <h1> Shopping App</h1>
        <Child onAdd={addToCart}/>
        </>
    );
}

function Child(props){
    return(
        <>
        <h2> Laptop</h2>

        <button onClick={props.onAdd} className='bg-blue-400 px-2 py-2'>Add to Cart</button>
        </>
    );
}

export {Parent1, Oa}


// Why do we do this?

// This allows the Child to communicate with the Parent.

// This is commonly used for:

// Add to Cart
// Delete product
// Login
// Logout
// Submit form
// Update data
// Open/close mo