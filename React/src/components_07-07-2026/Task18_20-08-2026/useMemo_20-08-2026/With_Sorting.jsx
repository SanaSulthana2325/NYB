import React,{useMemo, useState} from 'react'

function With_Sorting() {

    const[sort, setSort] = useState("low");

    const[count, setCount] = useState(0);

    const prices = [500, 100, 800, 200,300];

    const sortedPrices = useMemo(()=>{
        console.log("Sorting prices...");

        return[...prices].sort((a,b)=>{
            if(sort === "low"){
                return a - b;
            }

            return b - a;
        });
    },[sort])
  return (
    <div>
        <button onClick={()=> setSort("low")}
            className='bg-pink-700 px-2 py-2 mr-2'> low to high</button>

            <button onClick={() => setSort("High")}
                className='bg-yellow-900 px-2 py-2 mr-2'> High to low</button>

                <button onClick={()=> setCount(count + 1)}
                    className='bg-blue-400 px-2 py-2 mr-2'> Count:{count}</button>

                    <h3>Prices:</h3>

                    {sortedPrices.map((price) =>(
                        <p key={price}>₹ {price}</p>
                    ))}
    </div>
  );
}

export default With_Sorting