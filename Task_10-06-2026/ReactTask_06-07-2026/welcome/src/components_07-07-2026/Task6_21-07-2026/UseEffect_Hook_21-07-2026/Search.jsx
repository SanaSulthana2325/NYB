import { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Searching for:", search);
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default Search;