//Props

function Product(prop){
    return(
        <div>
            <h2> {prop.name}</h2>
            <p>Price:₹{prop.price}</p>
        </div>
    );
}


function AA(){
    return(
        <>
        <Product name="T-shirt" price="499"/>

        <Product name="Jeans" price="699"/>

        <Product name="watch" price="799"/>

        </>
    );
}

// state

function Cart(){
    let quantity = 1;

    return(
        <>
        <h2> Product: laptod</h2>
        <p> Quantity:{quantity}</p>
        </>
    );
}

// useState

import{useState} from "react"
function Cart1(){
    const[quantity,setQuantity] = useState(1);

    return(
        <>
        <h2>Mobile</h2>
        <p> Quantity:{quantity}</p>

        <button onClick={() => setQuantity(quantity + 1)} className="bg-pink-500"> Add one</button>
        </>
    );
}

// Parent Child Component

function Pro(){  //child
    return(
        <>
        <h2>Fridge</h2>
        </>
    )

}

function ProList(){  //child
    return(
        <>
        <Pro/>
        </>
    );
}

function Ba(){    //parent
    return(
        <>
        <ProList/>
        </>
    )
}


//Sending Data from parent to child

function Product1(props){
    return(
        <>
        <h2>{props.name}</h2>
        <p> ₹{props.price}</p>
        </>
    );
}

function Ca(){
    return(
        <Product1 
        name="Kurti"
        price="699"/> 
       )
}

// Sending Data From Child to Parent

function Parent(){
    const getStudentName = (name) =>{
        console.log("Student name:", name);
    };
    return(
        <>
        <h1> Parent component</h1>
        <Child sendName={getStudentName}/>
        </>
    );

}

function Child({ sendName}){
    return(
        <>
        <h2> Child Component</h2>

        <button onClick={()=> sendName("Tasan")} 
        className="bg-purple-600"> Send Name</button>
        </>
    );
}

// Component Hierarchy

function Da(){
    return(
        <>
        <Header2/>
        <ProductList/>
        <Footer2/>
        </>
    )
}

function ProductList(){
    return(
        <>
        <Pro1/>
        <Pro1/>
        <Pro1/>
        <Pro1/>

        </>
    )
}

function Pro1(){
    return(
        <>
        <h2> Shirt</h2>
        <p>₹ 600</p>
        </>
    )
}

function Header2(){
    return(
        <>
        <p> welcome to the webpage!!!</p>
        </>
    )
}

function Footer2(){
    return(
        <>
        <p> Copyright 2026</p>
        </>
    )
}

// Passing Function As Prop

function Ea(){
    function LoginUser(){
        console.log("User Logged in!!");
    }
    return(
        <LoginButton login={LoginUser}/>
    );
}

function LoginButton(props){
    return(
        <>
        <button onClick={props.login} className="bg-orange-500"> Login</button>
        </>
    );
}


// Sharing Data Between Components


function Product2({ addToCart}){
    return(
        <button onClick={addToCart}
        className="bg-green-500"> Add to cart</button>
    );
}

function Cart2({ count}){
    return(
        <h2> cart Items: {count}</h2>
    );
}

function Fa(){
    const [cartCount, setCartCount] = useState(0);

    function addToCart(){
        setCartCount(cartCount + 1);
    }
    return(
        <>
        <Product2 addToCart={addToCart}/>

        <Cart2 count={cartCount}/>
        </>
    );
}


// Conditional Rendering

// Conditional rendering means displaying different UI depending on a condition.

function Ga(){
   let isLoggedIn = true;

    return(
        <>
        {isLoggedIn ?(
            <h2> Welcome!!!</h2>
        ) : (
            <h2> Please Login</h2>
        )}
        </>
    );

}


// example




function Ha() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      {isLoggedIn ? (
        <>
          <h2>Welcome, Sana!</h2>

          <button onClick={() => setIsLoggedIn(false)} className="bg-green-800">
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>

          <button onClick={() => setIsLoggedIn(true)} className="bg-pink-300">
            Login
          </button>
        </>
      )}

    </div>
  );
}




export {AA, Cart, Cart1,Ba, Ca,Parent,Da,Ea,Fa,Ga,Ha};






























// Props
// What are Props?

// Props means properties.

// Props are used to send data from a parent component to a child component.



// State
// What is State?

// State is data that can change while the application is running.

// For example:

// Cart items
// Login status
// Counter
// Like button



// useState

// useState is a React Hook used to create and update state.

// syntax:

// const[state,setState]=useState(initialValue);


// Parent and Child Components

// React applications are divided into components.

// A component can contain another component.

// The component containing another component is the Parent.

// The component inside it is the Child.



// Sending Data from Parent to Child

// This is one of the most important concepts in React.

// Data normally flows:

// Parent
//    ↓
// Child

// We use props.




// Sending Data from Child to Parent

// This sounds confusing initially.

// React's normal data flow is:

// Parent → Child

// So how can a child send information back?

// We do it by passing a function from the parent to the child.

// The child then calls that function.



// Component Hierarchy

// Component hierarchy means the parent-child structure of components in a React application.

// Think of it like a family tree.



// Why is hierarchy useful?

// It helps us:

// Organize the application
// Reuse components
// Understand data flow
// Maintain large applications
// Separate responsibilities




// Passing Functions as Props

// This is closely related to sending data from child to parent.

// A function can be passed just like any other prop.




// A common solution is to move the shared state to their common parent.

// This is called lifting state up.


// | Topic                     | Simple meaning                         | Example              |
// | ------------------------- | -------------------------------------- | -------------------- |
// | **Props**                 | Data given to a component              | Product name         |
// | **State**                 | Data that can change                   | Cart count           |
// | **useState**              | Creates/updates state                  | `useState(0)`        |
// | **Parent**                | Component containing another component | `App`                |
// | **Child**                 | Component inside parent                | `Product`            |
// | **Parent → Child**        | Send data using props                  | Product name         |
// | **Child → Parent**        | Child calls parent's function          | Add to Cart          |
// | **Component Hierarchy**   | Component family/tree                  | App → Home → Product |
// | **Function as Props**     | Send a function to child               | `onAdd={addToCart}`  |
// | **Sharing Data**          | Keep common state in parent            | Cart count           |
// | **Conditional Rendering** | Show UI based on condition             | Login/Logout         |


// | Parent → Child      | Child → Parent                                |
// | ------------------- | --------------------------------------------- |
// | Uses props          | Uses callback function passed through props   |
// | Parent sends data   | Child sends data by calling parent's function |
// | Direct data flow    | Indirect communication                        |
// | `Child name="Sana"` | `Child sendData={getData}`                    |
// | Child receives data | Parent receives data                          |
