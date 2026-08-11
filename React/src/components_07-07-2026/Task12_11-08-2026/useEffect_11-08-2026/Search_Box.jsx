import React,{useState, useEffect} from 'react'

function Search_Box() {
    const[search, setSearch] = useState("");
    useEffect(()=>{
        if (search !=="") {
            console.log("Searching for:", search);
        }
    }, [search]);
  return (
    <input 
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder='Search Products'
    className='bg-green-700'/>
  );
}

export default Search_Box