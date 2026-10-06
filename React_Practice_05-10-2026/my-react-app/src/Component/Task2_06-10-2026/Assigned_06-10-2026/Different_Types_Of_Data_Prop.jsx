// Pass different types of data using Props.


// string

function Ia(){
    return(
        <>
        <Child name="Ayesha"/>
        </>
    )
};

function Child(props){
    return(
        <>
        <h2> Hello, {props.name}</h2>
        </>
    );
}

// Pass a number

function Ja(){
    return(
        <Num price={599}/>
    );
}

function Num(props){
    return(
        <>
        <h2> Price:₹{props.price}</h2>
        </>
    );
}

// Pass Boolean

function Ka(){
    return(
        <>
        <Boo isAvailable={false}/>
        </>
    );
}

function Boo(props){
    return(
        <>
        <h2> Available:{props.isAvailable.toString()}</h2>
        </>
    );
}

// Pass an Array

function La(){
    const fruits=["Apple","Mango","Banana","Grapes","Orange"];
    return(
        <>
        <Arr fruits={fruits}/>
        </>
    );
}

function Arr(props){
    return(
        <>
        <h2>Fruits</h2>
        {props.fruits.map((fruit)=>(
            <p>{fruit}</p>
        ))}
        </>
    );
}


// Pass an Object

function Ma(){
    const pro = {
        name:"T-shirt",
        price:599,
        category:"Fashion"
    };
    return(
        <Obj pro={pro}/>
    )
}

function Obj( props){
    return(
        <>
        <h2>{props.pro.name}</h2>
        <p> Price:₹{props.pro.price}</p>
        <p>Category:{props.pro.category}</p>
        </>
    );
}


// Pass a Function

function Na(){
    function showMessage(){
        console.log("Product Added to Cart")
    }
    return(
        <>
        <Child1 onAdd={showMessage}/>
        </>
    )
}

function Child1(props){
    return(
        <>
        <button onClick={props.onAdd} className="bg-pink-200"> Add to Cart</button>
        </>
    );
}


export {Ia,Ja,Ka,La,Ma,Na}



// | Data type    | Parent              | Example         |
// | ------------ | ------------------- | --------------- |
// | **String**   | `name="Sana"`       | `"Sana"`        |
// | **Number**   | `price={499}`       | `499`           |
// | **Boolean**  | `available={true}`  | `true`          |
// | **Array**    | `sizes={sizes}`     | `["S","M","L"]` |
// | **Object**   | `product={product}` | `{name, price}` |
// | **Function** | `onAdd={addToCart}` | `addToCart()`   |
