import React,{useState} from 'react'

const Product = React.memo(function Product({name, price}){
     console.log("Product Rendered",name);

     return(
        <div>
            <h3>{name}</h3>
            <p>₹ {price}</p>
        </div>
     );
});
function With_List() {
    const[count, setCount] = useState(0)
  return (
    <div>
        <button onClick={() => setCount(count + 1)}
            className='bg-green-500'> Count:{count}</button>

            <Product name="Laptop" price={50000}/>
            <Product name="Mobile" price={20000}/>
            <Product name="TV" price={60000}/>


    </div>
  );
}

export default With_List