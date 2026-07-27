function SearchBar({search,setSearch}){

return(

<div className="flex justify-center mt-6">

<input

type="text"

placeholder="Search Products"

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="border p-3 rounded-lg w-96"

/>

</div>

)

}

export default SearchBar;