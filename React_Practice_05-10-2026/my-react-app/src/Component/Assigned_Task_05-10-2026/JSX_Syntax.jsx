

// Basic JSX:JSX allows us to write HTML-like elements inside a JavaScript function.

function Fr(){
    return(
        <>
        <h1> Welcome to wrold!!</h1>
        </>
    )
}

// Multiple HTML Elements

// A component can return multiple elements, but they need one parent element.

function Dada(){
    return(
        <>
        <h1> Hello Laptop</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere reiciendis perferendis suscipit atque expedita quasi. Ab neque et unde consequuntur?</p>
        </>
    )
}

// JSX with JavaScript Variables

function Tata(){
    const name="Fathima";
    return(
        <>
        <h2> {name} is my sister </h2>
        </>
    )
}

// JSX with Numbers

function AA(){
    const age=27;
    return(
        <>
        <p> my sisters age is {age} </p>
        </>
    )
}

// JSX with Expressions

function Ji(){
    return(
        <>
        <h1> Result: {38 + 50}</h1>
        </>
    )
}

// JSX with a Function

function Msg(){
    return(
        <>
        "Welcome to React"
        </>
    )
}
 
function Wara(){
    return(
        <>
        <h1> {Msg()}</h1>
        </>
    )
}


// className in JSX

function Fu(){
    return(
        <div className="box">
            <h1> Hello Sam</h1>
        </div>
    );
}


// Inline CSS in JSX

function Hu(){
    return(
        <>
        <h1 style={{color:"blue", fontSize:"30px"}}> Hello!! welcome to wrold</h1>
        </>
    );
}



// Using Boolean Values

function Ka(){
    const isLoggedIn = true;
    return(
        <>
        <p> Logged In:{isLoggedIn.toString()}</p>
        </>
    );
}


// JSX with Arrays

function Wo(){
    const fru = ["Apple","Mango","Banana","Cherry"];

    return(
        <ul>
            {fru.map((fru)=>(
                <li>{fru}</li>
            ))}
        </ul>
    );
}
export {Fr,Dada, Tata, AA,Ji, Wara,Fu,Hu,Ka,Wo};



// | HTML       | JSX         |
// | ---------- | ----------- |
// | `class`    | `className` |
// | `for`      | `htmlFor`   |
// | `onclick`  | `onClick`   |
// | `tabindex` | `tabIndex`  |



// | Example | Valid?                | Reason                                       |
// | ------- | --------------------- | -------------------------------------------- |
// | 1       | ✅ Valid               | Correct JSX                                  |
// | 2       | ❌ Invalid             | Multiple top-level elements                  |
// | 3       | ✅ Valid               | One parent element                           |
// | 4       | ✅ Valid               | Self-closing `<img />`                       |
// | 5       | ❌ Invalid             | `<img>` isn't properly self-closed           |
// | 6       | ✅ Valid               | JavaScript variable correctly used with `{}` |
// | 7       | ❌ Incorrect JSX style | Use `className`                              |
// | 8       | ✅ Valid               | Correct `className`                          |
// | 9       | ✅ Valid               | Fragment provides one parent                 |
// | 10      | ✅ Valid               | Correct JSX comment                          |
