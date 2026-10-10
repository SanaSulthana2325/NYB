// Provider

const UserContext = createContext();

function Pro(){
    return(
        <>
        <h2>User Profile</h2>
        </>
    );

}

function Cb(){
    return(
        <UserContext.Provider value="Sonu">
            <Pro/>
        </UserContext.Provider>
    )
}



// Consumer

import{createContext} from "react";

function Profile(){
    return(
        <>
        <UserContext.Consumer>
            {(username) =>(
                <h2> Welcome,{username} !</h2>
            )}
        </UserContext.Consumer>
        </>
    );
}


function Ca(){
    return(
        <UserContext.Provider value="Tasan">
            <Profile/>
        </UserContext.Provider>
    );
}

// useContext
import {useContext} from "react";

function Sam(){
    const username = useContext(UserContext);

    return(
        <>
        <h2> Hello, {username}!!</h2>
        </>
    )
}

function Cc(){
    return(
        <UserContext.Provider value="Ayesha">
            <Sam/>
        </UserContext.Provider>
    );
}


// Sharing Globally

function Navbar(){
    const username= useContext(UserContext);
    return(
        <>
        <h2> Navber :Hello,{username}</h2>
        </>
    )
}

function Sun(){
    const username = useContext(UserContext);
    return(
        <>
        <h2>Profile:{username}</h2>
        </>
    )
}

function Cd(){
    return(
        <UserContext.Provider value="Fathima">
            <Navbar/>
            <Sun/>
        </UserContext.Provider>
    )
}

// Prop vs Context

// Prop

function Mi(props){
    return(
        <>
        <h2> Welcome to the wrold, {props.username} !!!</h2>
        </>
    );
}

function Ce(){
    return(
        <>
        <Mi username="Mira"/>
        </>
    )
}


// using Context API

function Na(){
    const username = useContext(UserContext);
    return(
        <>
        <h2> Hello, I am {username}!!</h2>
        </>
    )
}

function Cf(){
    return(
        <>
        <UserContext.Provider value="Minnu">
            <Na/>
        </UserContext.Provider>
        </>
    )
}
export{Ca, Cb, Cc,Cd, Ce,Cf};













// The Context API in React is used to share data between multiple components without passing props manually through every level of the component tree.



// Context API

// What is it?

// The Context API is a feature in React that allows components to share data globally within a particular part of the application.

// Real-time example: Imagine you log in to an online shopping website. Your username needs to appear in the Navbar, Profile, and Dashboard. Instead of passing the username through every intermediate component, you can use Context API.

// Without Context:

// App → Navbar → Header → UserProfile

// With Context, components can access the shared data directly.


// Creating Context

// What is it?

// createContext() creates a Context object that can hold data to be shared with other components.

// Syntax:

// import { createContext } from "react";

// const UserContext = createContext();

// Here:

// createContext() creates a Context.

// UserContext is the name we give to that Context.

// The Context itself doesn't automatically share data; we use a Provider to supply the value.



// Provider

// What is it?

// A Provider supplies data to the components that need it.

// In modern React, you can use the Context's .Provider property.

// Syntax:

// <UserContext.Provider value="Sana">
//   <Profile />
// </UserContext.Provider>



// Consumer

// What is it?

// A Consumer allows a component to read the data provided by a Context.

// The traditional Consumer approach uses a function as its child.

// <UserContext.Consumer>
//   {(username) => <h2>Welcome, {username}!</h2>}
// </UserContext.Consumer>



// useContext Hook

// What is it?

// useContext() is a React Hook that allows a functional component to read data from a Context.

// Syntax:

// const username = useContext(UserContext);



// Sharing Global Data

// What is it?

// Sharing global data means making the same data available to multiple components without passing it through every intermediate component.

// Examples of data you might share globally:

// Logged-in user information

// Dark or light theme

// Shopping cart count

// Language preference

// Application settings



// Context vs Props

// Both Context and Props help components access data, but they work differently.

// Props pass data from a parent component to its direct child. Context shares data with components that need it, without requiring every intermediate component to pass it along.




// Feature                        Props                                  Context

// Purpose                  Pass data between components         Share data across a component tree

// Data source                 Parent component                          Context Provider

// Intermediate 
// components                May need to pass props along           Don't need to pass the Context value


// Best suited for             Component-specific data               Shared data such as theme or user information


// Common syntax                    props.username                             useContext(UserContext)

// Complexity                    Simple for a few levels             Useful when many components need the same data




// What is Prop Drilling?

// Prop drilling is the process of passing data from a parent component to a deeply nested child component through intermediate components using props, even when those intermediate components do not need the data themselves.

// In simple words, passing props through multiple components just to reach the component that needs the data is called prop drilling.


// Topic                             Remember this

// Context API                   Shares data across components

// createContext()               Creates a Context

// Provider                       Supplies the shared value

// Consumer                  Reads the value using render-function syntax

// useContext()                  Reads Context data using a Hook

// Global data                 Data shared by multiple components

// Props                       Pass data from parent to child

// Context vs Props            Use Context to avoid unnecessary prop drilling when many components need the same data