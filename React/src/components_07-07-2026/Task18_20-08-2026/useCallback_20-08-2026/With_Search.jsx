import React,{useState, useCallback} from 'react'

function With_Search() {
    const[search, setSearch] = useState("");

    const handleSearch = useCallback((value) =>{
        console.log("Searching for:", value);
        setSearch(value);
    },[]);
  return (
    <div>
        <input 
        type="text"
        placeholder='search'
        onChange={(e)=> handleSearch(e.target.value)}
        className='bg-yellow-200'/>


        <h2>Search:{search}</h2>


    </div>
  );
}

export default With_Search