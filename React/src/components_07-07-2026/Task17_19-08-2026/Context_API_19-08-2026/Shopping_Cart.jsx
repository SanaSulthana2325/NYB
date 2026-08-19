import React,{createContext, useContext, useState} from 'react'

const CartContext = createContext();
function Shopping_Cart() {
    const[cart,setCart] = useState([]);

    const addToCart = (product) =>{
        setCart([...cart,product]);
    };
  return (
    <CartContext.Provider value={{cart, setCart, addToCart}}>
        <Navbar/>
        <Products/>
        <Cart/>
    </CartContext.Provider>
  );
}

function Navbar(){
    const{cart} = useContext(CartContext);
    return <h2>Cart Items:{cart.length}</h2>
}

function Products(){
    const{addToCart} = useContext(CartContext);

    return(
        <div>
            <h3>Laptop</h3>
            <button onClick={()=> addToCart("Laptop")}
                className='bg-yellow-500'>Add To Cart</button>
        </div>
    );
}

function Cart(){
    const{cart} = useContext(CartContext);
    return(
        <>
        <h2>Cart</h2>

        {cart.map((item,index) =>(
            <p key={index}>{item}</p>

        ))}
        </>
    );
}

export default Shopping_Cart