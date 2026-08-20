import React,{useState, useMemo} from 'react'

function With_Filtering() {
    const[search, setSearch] = useState("");
    const[count, setCount] = useState(0);

    const products = ["Laptop", "Mobile", "TV", "Keyboard", "Mouse"];

    const filteredProducts = useMemo(()=>{
        console.log("Filtering products.....");

        return products.filter((product) => product.toLowerCase().includes(search.toLowerCase()));
    },[search])
  return (
    <div>

        <input 
        type="text"
        placeholder='Search product'
        Value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-blue-500'/>

        <button onClick={()=> setCount(count + 1)}
            className='bg-yellow-500'> Count:{count}</button>

        <h3>Products:</h3>

        {filteredProducts.map((product)=>(
            <p key ={product}>{product}</p>
        ))}

    </div>
  );
}

export default With_Filtering