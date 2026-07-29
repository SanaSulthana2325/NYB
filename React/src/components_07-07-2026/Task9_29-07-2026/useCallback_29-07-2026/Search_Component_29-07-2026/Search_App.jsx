import { useCallback, useState } from "react";
import SearchButton from "./SearchButton";

function Search_App() {
  const [text, setText] = useState("");

  const handleSearch = useCallback(() => {
    console.log("Searching...");
  }, []);

  return (
    <div className="p-6 space-y-4">
      <input
        className="border p-2 rounded w-full"
        placeholder="Search products"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <SearchButton onSearch={handleSearch} />
    </div>
  );
}

export default Search_App;